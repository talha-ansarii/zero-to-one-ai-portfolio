import FunFact from "../components/Fact";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center text-white h-full p-4 md:p-8 w-full">
      <div className="clock text-gray-800 absolute z-[50] top-5 md:top-10 left-6 ">
        <span className="text-gray-600">Did you know? </span>
        <FunFact />
      </div>
      {/* Left Column */}
      <div className="w-full md:w-1/2 space-y-6 ml-6 text-center md:text-left">
        <h1 className="text-xl md:text-2xl poppins-regular lg:text-3xl font-bold leading-tight text-[#334054]">
          Transform into an AI-first enterprise, with the most{" "}
          <span className=" text-[#421fb8]">
            complete Agentic
            <br /> AI Platform
          </span>
          <br />
        </h1>
        <p className="text-sm poppins-regular text-black">
          The Age of AI is here, Your Agency is the fastest and least disruptive
          way to get there, equipping you with all the tools and capabilities to
          accelerate your AI transformation.
        </p>
      </div>

      {/* Right Column */}
      <div className="w-full md:w-1/2  flex items-center justify-center p-4 md:p-8 mt-8 md:mt-0">
        {/* <div className="w-full max-w-2xl bg-white aspect-video `rounded-2xl flex items-center justify-center relative overflow-hidden">
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-black/40 truncate">
            Automations, Applications
          </p>
          <button className="absolute bottom-6 md:bottom-8 bg-[#6a5acd] text-white px-6 py-3 rounded-full flex items-center gap-2 text-lg font-semibold hover:bg-[#5a4cad] transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            PLAY
          </button>
        </div> */}
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border poppins-regular ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              AI Transformations
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Hover over this card to unleash the power of CSS perspective
            </CardItem>
            <CardItem
              translateZ="100"
              rotateX={0}
              rotateZ={0}
              className="w-full mt-4"
            >
              <img
                src="/hero.jpeg"
                height="1000"
                width="1000"
                className="h-60 object-cover w-full rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                translateX={-4}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Try now →
              </CardItem>
              <CardItem
                translateZ={20}
                translateX={4}
                as="button"
                className="px-4 py-2 rounded-xl bg-[#421fb8] dark:bg-white dark:text-black text-white text-xs font-bold"
              >
              contact us →
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
};

export default Home;
