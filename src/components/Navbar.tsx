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
    <div>
      <div className="flex relative z-[50] mt-[-70px] md:mt-[-35px] justify-center items-end ">
      <FloatingDock
        items={links}
      />
    </div>
    </div>
  )
}

export default Navbar