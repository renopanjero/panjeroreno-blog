import React from 'react';
import { LineMdGithubLoop } from '../material/GitHubIcon';
import { LineMdInstagram } from '../material/IgIcon';
import { LaBlog } from '../material/BlogIcon';

const Footer = () => {
  return (
    <div>
      <nav className="text-lg mt-6 mb-7 flex flex-col sm:flex-row justify-center items-center gap-6 ">
        <ul className="flex space-x-4 items-center justify-center text-center text-sm xs1:text-lg">
          <li>
            <a className="nav-footer" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="nav-footer" href="#home">
              Blog
            </a>
          </li>
          <li>
            <a className="nav-footer" href="#home">
              Progress-Report
            </a>
          </li>
          <li>
            <a className="nav-footer" href="#home">
              About
            </a>
          </li>
        </ul>
        <ul className="flex  items-center">
          <li>
            <a target="_blank" href="https://github.com/renopanjero">
              <LineMdGithubLoop className="text-blue-800" />
            </a>
          </li>
          <li>
            <LaBlog />
          </li>
          <li>
            <a target="_blank" href="https://www.instagram.com/panjeroren/">
              <LineMdInstagram />
            </a>
          </li>
        </ul>
        <p className="text-sm ">© 2024 pxlren.vercel.app</p>
      </nav>
    </div>
  );
};

export default Footer;
