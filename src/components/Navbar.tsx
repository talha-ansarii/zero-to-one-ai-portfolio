import { FloatingDock } from "./ui/floating-dock";
import {
  IconDeviceLaptop,
  IconDeviceMobileMessage,
  IconHome,
  IconPackages,
} from "@tabler/icons-react";
 
const Navbar = () => {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "Assets",
      icon: (
        <IconDeviceLaptop className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/projects",
    },
    {
      title: "Services",
      icon: (
        <IconPackages className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/services",
    },
    {
      title: "Contact",
      icon: (
        <IconDeviceMobileMessage className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/contact",
    },
  ];

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[100] flex justify-center items-end">
      <div className="pointer-events-auto md:translate-y-1/2">
        <FloatingDock items={links} />
      </div>
    </div>
  )
}

export default Navbar