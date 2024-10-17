import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';

interface IIntroduct {
  isLightTheme: boolean;
}

const Introduct: React.FC<IIntroduct> = ({ isLightTheme }) => {
  const [h1teks] = useTypewriter({
    words: ['Who am I?'],
    typeSpeed: 15,
    deleteSpeed: 50,
  });
  const [paragraph1] = useTypewriter({
    words: [
      'I created this blog as a space to express myself and share my journey.',
    ],
    typeSpeed: 15,
    deleteSpeed: 50,
  });
  const [paragraph2] = useTypewriter({
    words: [
      'My goal is to live life to the fullest and embrace change. Each post reflects my thoughts, experiences, and aspirations as I strive to become a better version of myself.',
    ],
    typeSpeed: 15,
    deleteSpeed: 50,
  });
  const [paragraph3] = useTypewriter({
    words: [
      'Join me as I explore new ideas, discover my passions, and navigate the ups and downs of life.',
    ],
    typeSpeed: 15,
    deleteSpeed: 50,
  });
  const [linkAbout] = useTypewriter({
    words: ['About me'],
    typeSpeed: 15,
    deleteSpeed: 50,
  });

  return (
    <div className="mx-6 text-end text-lg xs2:text-xl space-y-4">
      <h1 className="font-bold text-3xl mb-2">{h1teks}</h1>
      <div className="relative">
        <p className="transition-opacity duration-300 ease-in-out hover:opacity-0">
          {paragraph1}
        </p>
        <p
          className={`absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100  ${isLightTheme ? 'bg-text' : 'bg-black'}`}
        >
          Honestly, this is just my project to learn javascript.
        </p>
      </div>
      <div className="relative">
        <p className="transition-opacity duration-300 ease-in-out hover:opacity-0">
          {paragraph2}
        </p>
        <p
          className={`absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100  ${isLightTheme ? 'bg-text' : 'bg-black'}`}
        >
          But it&apos;s true. I do want to be a better person.
        </p>
      </div>
      <div className="relative">
        <p className="transition-opacity duration-300 ease-in-out hover:opacity-0">
          {paragraph3}
        </p>
        <p
          className={`absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100  ${isLightTheme ? 'bg-text' : 'bg-black'}`}
        >
          Sometimes, whoever we are, hope is always there
        </p>
      </div>
      <div className="relative">
        <span className="text-navi font-bold">
          {' '}
          <a className="text-navi font-bold nav-link" href="#">
            {linkAbout}
          </a>
        </span>
      </div>
    </div>
  );
};

export default Introduct;
