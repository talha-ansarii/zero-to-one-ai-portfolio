import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "../../../lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "../../hooks/use-outside-click";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobileView, setIsMobileView] = useState<boolean>(false);

  useEffect(() => {
    const check = () => setIsMobileView(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  if (isMobileView) {
    return (
      <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
        <MobileDeck items={items} />
      </CarouselContext.Provider>
    );
  }

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth   [scrollbar-width:none] h-full"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l"
            )}
          ></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-4 ",
              "mx-auto h-[calc(100dvh-25px)] md:h-[calc(100dvh-50px)]" // remove max-w-4xl if you want the carousel to span the full width of its container
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                    // removed unsupported 'once' property
                  },
                }}
                key={"card" + index}
                className="rounded-3xl w-[calc(100vw-25px)] md:w-full last:pr-[50px] h-full"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="  left-5 mr-10 flex justify-end gap-2">
          <button
            className="absolute z-100 top-1/2 left-5 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button
            className="absolute z-100 top-1/2 right-16 z-40  flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

// Mobile deck swipe implementation
const MobileDeck = ({ items }: { items: JSX.Element[] }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  // Remove the canGoBack/canGoForward checks to allow circular navigation
  const advance = (dir: 1 | -1) => {
    setDirection(dir);
    setIndex((prevIndex) => {
      if (dir === 1) {
        // When going forward and at the end, loop back to beginning
        return prevIndex >= items.length - 1 ? 0 : prevIndex + 1;
      } else {
        // When going backward and at the beginning, loop to the end
        return prevIndex <= 0 ? items.length - 1 : prevIndex - 1;
      }
    });
  };

  const handleDragEnd = (_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
    const threshold = 80; // px
    const velocityThreshold = 400; // px/s
    const { x } = info.offset;
    const vel = info.velocity.x;
    if (x < -threshold || vel < -velocityThreshold) {
      advance(1); // next
    } else if (x > threshold || vel > velocityThreshold) {
      advance(-1); // prev
    }
  };

  const visible = items.slice(index, Math.min(index + 3, items.length));

  return (
    <div className="relative h-[calc(100dvh-25px)] w-[calc(100vw-15px)]  overflow-hidden touch-pan-y select-none">
      {visible.map((item, i) => {
        const absoluteIndex = index + i;
        const isTop = i === 0;
        const scale = 1 - i * 0.04;
        const translateY = i * 14;
        const z = 50 - i;
        return (
          <motion.div
            key={"deck-" + absoluteIndex}
            className="absolute inset-0 ml-2 mr-4"
            style={{ zIndex: z }}
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale, y: translateY }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              drag={isTop ? "x" : false}
              dragElastic={0.2}
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              whileDrag={{ rotate: isTop ? (direction === 1 ? -3 : 3) : 0, scale: isTop ? 1.02 : scale }}
              className="h-full"
            >
              {item}
            </motion.div>
          </motion.div>
        );
      })}
      <div className="pointer-events-none absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {items.map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-1.5 w-1.5 rounded-full transition-colors",
              i === index ? "bg-white" : "bg-white/30"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  // Intentionally only depend on 'open'; handleClose stable for our usage
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-[100dvh] overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="relative z-[60] mx-auto my-10 h-fit max-w-5xl rounded-3xl bg-white p-4 font-sans md:p-10 dark:bg-neutral-900"
            >
              <button
                className="sticky top-4 right-0 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-black dark:bg-white"
                onClick={handleClose}
              >
                <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
              </button>
              <motion.p
                layoutId={layout ? `category-${card.title}` : undefined}
                className="text-base font-medium text-black dark:text-white"
              >
                {card.category}
              </motion.p>
              <motion.p
                layoutId={layout ? `title-${card.title}` : undefined}
                className="mt-4 text-2xl font-semibold text-neutral-700 md:text-5xl dark:text-white"
              >
                {card.title}
              </motion.p>
              <div className="py-10">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="relative z-10 flex w-full md:w-96 flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 md:min-h-[calc(100vh-8rem)] min-h-[calc(100vh-8rem)] h-full dark:bg-neutral-900 "
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent" />
        <div className="relative z-40 p-8">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-left font-sans text-sm font-medium text-white md:text-base"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="mt-2 max-w-xs text-left font-sans text-xl font-semibold [text-wrap:balance] text-white md:text-3xl"
          >
            {card.title}
          </motion.p>
        </div>
        {/* <div className="relative"> */}
          {/* <div className="h-full z-0 absolute top-0 left-0 w-full rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 "></div> */}
          <BlurImage
            src={card.src}
            alt={card.title}
            className="absolute inset-0 z-10 object-cover"
          />
        {/* </div> */}
      </motion.button>
    </>
  );
};

interface BlurImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  width?: number | string;
  height?: number | string;
}

export const BlurImage = ({
  height,
  width,
  src = "",
  className,
  alt,
  ...rest
}: BlurImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <img
      className={cn(
        "h-full w-full transition duration-300",
        isLoading
          ? "blur-sm"
          : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      alt={alt ? alt : "Background image"}
      {...rest}
    />
  );
};
