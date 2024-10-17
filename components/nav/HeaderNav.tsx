'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { LineMdSunnyOutlineToMoonAltLoopTransition } from '../material/ToggleIcon';
import { LineMdMoonAltToSunnyOutlineLoopTransition } from '../material/ToggleIcon2';
import { Icon } from '@iconify/react/dist/iconify.cjs';
import { useDrag } from '@use-gesture/react';
import { useSpring, animated } from '@react-spring/web';

interface IHeader {
  isLightTheme: boolean;
  toggleTheme: () => void;
}

const HeaderNav: React.FC<IHeader> = ({ isLightTheme, toggleTheme }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [clickSound, setClickSound] = useState<HTMLAudioElement | null>(null);

  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  const bind = useDrag(
    (state) => {
      api.start({ x: state.offset[0], y: state.offset[1] });
    },
    {
      bounds: { left: 0, top: 0, right: 0, bottom: 350 }, // Set bounds like react-draggable
    }
  );

  useEffect(() => {
    const newAudio = new Audio('/music/rose.mp3');
    newAudio.loop = true;
    setAudio(newAudio);

    const clickSoundEffect = new Audio('/music/click.mp3');
    setClickSound(clickSoundEffect);

    const handleEnded = () => {
      newAudio.currentTime = 0;
      newAudio.play();
    };

    newAudio.addEventListener('ended', handleEnded);

    return () => {
      newAudio.removeEventListener('ended', handleEnded);
      newAudio.pause();
      newAudio.currentTime = 0;
    };
  }, []);

  useEffect(() => {
    if (audio) {
      if (isSpinning) {
        audio.play();
      } else {
        audio.pause();
        audio.currentTime = 0;
      }
    }
  }, [isSpinning, audio]);

  const toggleMusicSpin = () => {
    if (clickSound) {
      clickSound.play(); // Play suara klik saat ikon ditekan
    }
    setIsSpinning((prev) => !prev);
  };

  return (
    <div>
      <div className="items-center mx-5 mt-5">
        <div>
          <div className="relative">
            <Image
              priority
              id="Header"
              draggable="false"
              src={isLightTheme ? '/image3.png' : '/image4.png'}
              alt={isLightTheme ? 'headerlight' : 'headerdark'}
              width={1000}
              height={400}
              className={`rounded-sm h-auto mb-1 md:mb-2 border pointer-events-none`}
            />
            <div className="absolute top-0 left-0 w-full h-full"></div>
          </div>

          <nav
            className={`border-b-2 md:border-b-2 pb-1 md:pb-2 space-x-5 gap-10 justify-center text-center items-center flex ${isLightTheme ? 'border-black' : 'border-white'}`}
          >
            <ul className="flex text-center justify-center items-center gap-4 xs:gap-4 xs1:gap-8 xs2:gap-16 sm:gap-12 md:gap-10 text-xs xs:text-sm xs1:text-lg sm:text-xl">
              <li>
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link" href="#home">
                  Blog
                </a>
              </li>
              <li>
                <a className="nav-link" href="#home">
                  Progress-Reports
                </a>
              </li>
              <li>
                <a className="nav-link" href="#home">
                  About
                </a>
              </li>
            </ul>
            <div className="pt-1 hidden sm:flex gap-4">
              <Icon
                icon="ph:vinyl-record-bold"
                onClick={toggleMusicSpin}
                width="1.7rem"
                height="1.7rem"
                style={{ color: isLightTheme ? 'black' : 'white' }}
                className={`focus:outline-none transform transition-transform duration-75 cursor-pointer active:scale-75 ${isSpinning ? 'animate-spin' : ''}`}
              />
              <button onClick={toggleTheme} className="focus:outline-none">
                {isLightTheme ? (
                  <LineMdMoonAltToSunnyOutlineLoopTransition />
                ) : (
                  <LineMdSunnyOutlineToMoonAltLoopTransition />
                )}
              </button>
            </div>
          </nav>
        </div>
        <div className="flex items-end justify-end sm:hidden">
          {/* Draggable button */}
          <animated.div
            {...bind()}
            style={{ x, y }}
            className={`flex flex-col space-y-2 z-50 top-44 xs2:top-56 fixed p-2 cursor-grab touch-none ${isLightTheme ? 'bg-white border-black' : 'bg-black border-white'} rounded-sm border`}
          >
            <button onClick={toggleTheme} className="focus:outline-none">
              {isLightTheme ? (
                <LineMdMoonAltToSunnyOutlineLoopTransition />
              ) : (
                <LineMdSunnyOutlineToMoonAltLoopTransition />
              )}
            </button>
            <button>
              <Icon
                icon="ph:vinyl-record-bold"
                onClick={toggleMusicSpin}
                width="1.7rem"
                height="1.7rem"
                style={{ color: isLightTheme ? 'black' : 'white' }}
                className={`focus:outline-none transform transition-transform duration-75 active:scale-75 cursor-pointer ${isSpinning ? 'animate-spin' : ''}`}
              />
            </button>
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
