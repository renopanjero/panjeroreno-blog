'use client';

import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';

interface IHero {
  isLightTheme: boolean;
}

const Hero: React.FC<IHero> = ({ isLightTheme }) => {
  const [h1teks] = useTypewriter({
    words: ["Hi, I'm Ren"],
    typeSpeed: 15,
    deleteSpeed: 50,
  });

  const [paragraph1] = useTypewriter({
    words: [
      'Welcome to my little corner of the internet, where I share my experiences and the things that catch my interest.',
    ],
    typeSpeed: 15,
    deleteSpeed: 50,
  });

  const [paragraph2] = useTypewriter({
    words: [
      " Here, I'll write about anything that sparks my curiosity, whether it's a new hobby I'm trying out, life reflections, or moments that inspire me.",
    ],
    typeSpeed: 15,
    deleteSpeed: 50,
  });

  const [paragraph3] = useTypewriter({
    words: [
      'Through this blog, I hope you will enjoy my stories and articles.',
    ],
    typeSpeed: 15,
    deleteSpeed: 50,
  });

  const [paragraph4] = useTypewriter({
    words: ['Wanna share your ideas?'],
    typeSpeed: 15,
    deleteSpeed: 50,
  });

  const [spanTeks] = useTypewriter({
    words: ['  DM me @panjeroren on Instagram'],
    typeSpeed: 15,
    deleteSpeed: 50,
  });

  return (
    <div className="mx-6 text-start text-lg xs2:text-xl space-y-4">
      <h1 className="font-bold text-3xl mb-2">{h1teks}</h1>

      <div className="relative">
        <p className="transition-opacity duration-300 ease-in-out hover:opacity-0">
          {paragraph1}
        </p>
        <p
          className={`absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100  ${isLightTheme ? 'bg-text' : 'bg-black'}`}
        >
          Actually, I don&apos;t have any experience or interesting things to
          share.
        </p>
      </div>
      <div className="relative">
        <p className="transition-opacity duration-300 ease-in-out hover:opacity-0">
          {paragraph2}
        </p>
        <p
          className={`absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100 ${isLightTheme ? 'bg-text' : 'bg-black'}`}
        >
          Nothing interesting to me, I spent my days sleeping, watching movies,
          and reading books.
        </p>
      </div>

      <div className="relative">
        <p className="transition-opacity duration-300 ease-in-out hover:opacity-0">
          {paragraph3}
        </p>
        <p
          className={`absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100 ${isLightTheme ? 'bg-text' : 'bg-black'}`}
        >
          I&apos;m not expecting much from this.
        </p>
      </div>
      <div className="relative">
        <p className="transition-opacity duration-300 ease-in-out hover:opacity-0">
          {paragraph4}
          <span className="text-navi font-bold">
            {' '}
            <a
              href="https://www.instagram.com/panjeroren/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navi font-bold nav-link"
            >
              {spanTeks}
            </a>
          </span>
        </p>
        <p
          className={`absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100 ${isLightTheme ? 'bg-text' : 'bg-black'}`}
        >
          send me some memes?
          <span className="text-navi font-bold">
            {' '}
            <a
              href="https://www.instagram.com/panjeroren/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navi font-bold nav-link"
            >
              {spanTeks}
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
