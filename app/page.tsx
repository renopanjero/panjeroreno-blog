'use client';

import Footer from '@/components/footer/Footer';
import HeaderNav from '@/components/nav/HeaderNav';
import Hero from '@/components/section/Hero';
import Introduct from '@/components/section/Introduct';
import useTheme from '@/hooks/use-theme';

export default function Home() {
  const { isLightTheme, toggleTheme } = useTheme();
  return (
    <div>
      <div className="flex flex-col space-y-8 w-full md:max-w-2xl mx-auto overflow-hidden">
        <HeaderNav isLightTheme={isLightTheme} toggleTheme={toggleTheme} />
        <Hero isLightTheme={isLightTheme} />
        <div
          className={`mx-5 border-b-2 ${isLightTheme ? 'border-black' : 'border-white'}  `}
        />
        <Introduct isLightTheme={isLightTheme} />
        <div
          className={`mx-5 border-b-2 ${isLightTheme ? 'border-black' : 'border-white'}  `}
        />
        <div className="mx-5">
          <Footer />
        </div>
      </div>
    </div>
  );
}
