import { ReactNode, useEffect, useState } from 'react';
import Navbar from './Navbar';
import HamburgerMenu from './HamburgerMenu';

interface BlueBackgroundWrapperProps {
    children: ReactNode;
}

export default function BlueBackgroundWrapper({ children }: BlueBackgroundWrapperProps) {
    const [isShort, setIsShort] = useState(false);

    useEffect(() => {
      const check = () => setIsShort(window.innerHeight < 700);
      check();
      window.addEventListener('resize', check);
      return () => window.removeEventListener('resize', check);
    }, []);

    return (
      <div className={`relative h-[calc(100dvh-20px)] mt-[10px] w-[calc(100vw-20px)] ml-[10px] md:h-[calc(100vh-50px)] md:w-[calc(100vw-50px)] md:mt-[25px] md:ml-[25px] rounded-[20px] md:rounded-[25px] bg-gray-100 overflow-visible ${isShort ? 'short-screen' : ''}`}>
        <div className="h-full w-full bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-[20px] md:rounded-[25px] relative flex items-start md:items-center justify-center overflow-hidden">
          <div className="absolute inset-0 rounded-[20px] md:rounded-[25px]"></div>
          {/* Decorative glow overlay is heavy for small screens; hide it below md for clarity */}
          <div className="hidden md:flex absolute pointer-events-none inset-0 items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_40%,white)] rounded-[20px] md:rounded-[25px]"></div>

          {children}
        </div>
        
  <div className="absolute right-4 sm:right-6 lg:right-6 h-[30px] z-[60] top-4 sm:top-6 md:top-8 flex gap-2">
          <HamburgerMenu />
        </div>

  <Navbar />
      </div>
    );
}
