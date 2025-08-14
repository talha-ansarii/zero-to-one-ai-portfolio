import { ReactNode } from 'react';
import Navbar from './Navbar';
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react';

interface BlueBackgroundWrapperProps {
    children: ReactNode;
}

export default function BlueBackgroundWrapper({ children }: BlueBackgroundWrapperProps) {
    return (
      <div className="relative h-[calc(100dvh-20px)] mt-[10px] w-[calc(100vw-20px)] ml-[10px] md:h-[calc(100vh-50px)] md:w-[calc(100vw-50px)] md:mt-[25px] md:ml-[25px] rounded-[20px] md:rounded-[25px] bg-gray-100">
        <div className="h-full w-full bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-[20px] md:rounded-[25px] relative flex items-center justify-center">
          <div className="absolute inset-0  rounded-[20px] md:rounded-[25px]"></div>
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_40%,white)] rounded-[20px] md:rounded-[25px]"></div>

          {children}
        </div>
        
        <div className="absolute right-6 lg:right-6 h-[30px] z-[10] top-10 flex gap-2">
          <a
            target="_blank"
            href={"https://www.linkedin.com/in/talha-ansarii/"}
          >
            <IconBrandLinkedin
              className=" text-gray-700 hover:text-blue-600 hover:scale-110 transition-all duration-100   "
              stroke={1.3}
              size={28}
            />
          </a>
          <a target="_blank" href={"https://github.com/talha-ansarii"}>
            <IconBrandGithub
              className=" text-gray-700 hover:text-gray-900 hover:scale-110 transition-all duration-100 "
              stroke={1.3}
              size={28}
            />
          </a>
          <a target="_blank" href={"https://www.instagram.com/talhaansarii/"}>
            <IconBrandInstagram
              className=" text-gray-700 hover:text-pink-600 hover:scale-110 transition-all duration-100 "
              stroke={1.3}
              size={29}
            />
          </a>
        </div>

        <Navbar />
      </div>
    );
}
