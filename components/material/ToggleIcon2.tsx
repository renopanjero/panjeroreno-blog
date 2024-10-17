import React from 'react';
import type { SVGProps } from 'react';

export function LineMdMoonAltToSunnyOutlineLoopTransition(
  props: SVGProps<SVGSVGElement>
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.7rem"
      height="1.7rem"
      viewBox="0 0 24 24"
      {...props}
      className=""
    >
      <g
        fill="none"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
      >
        <path
          strokeDasharray={2}
          strokeDashoffset={2}
          d="M12 19v1M19 12h1M12 5v-1M5 12h-1"
        >
          <animate
            fill="freeze"
            attributeName="d"
            begin="0.3s"
            dur="0.1s"
            values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
          ></animate>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.3s"
            dur="0.1s"
            values="2;0"
          ></animate>
        </path>
        <path
          strokeDasharray={2}
          strokeDashoffset={2}
          d="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5"
        >
          <animate
            fill="freeze"
            attributeName="d"
            begin="0.4s"
            dur="0.1s"
            values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
          ></animate>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.4s"
            dur="0.1s"
            values="2;0"
          ></animate>
        </path>
        <animateTransform
          attributeName="transform"
          dur="15s"
          repeatCount="indefinite"
          type="rotate"
          values="0 12 12;360 12 12"
        ></animateTransform>
      </g>
      <mask id="lineMdMoonAltToSunnyOutlineLoopTransition0">
        <circle cx={12} cy={12} r={12} fill="#fff"></circle>
        <circle cx={12} cy={12} r={8}>
          <animate
            fill="freeze"
            attributeName="r"
            dur="0.2s"
            values="8;4"
          ></animate>
        </circle>
        <circle cx={18} cy={6} r={12} fill="#fff">
          <animate
            fill="freeze"
            attributeName="cx"
            dur="0.2s"
            values="18;22"
          ></animate>
          <animate
            fill="freeze"
            attributeName="cy"
            dur="0.2s"
            values="6;2"
          ></animate>
          <animate
            fill="freeze"
            attributeName="r"
            dur="0.2s"
            values="12;3"
          ></animate>
        </circle>
        <circle cx={18} cy={6} r={10}>
          <animate
            fill="freeze"
            attributeName="cx"
            dur="0.2s"
            values="18;22"
          ></animate>
          <animate
            fill="freeze"
            attributeName="cy"
            dur="0.2s"
            values="6;2"
          ></animate>
          <animate
            fill="freeze"
            attributeName="r"
            dur="0.2s"
            values="10;1"
          ></animate>
        </circle>
      </mask>
      <circle
        cx={12}
        cy={12}
        r={10}
        mask="url(#lineMdMoonAltToSunnyOutlineLoopTransition0)"
        fill="black"
      >
        <animate
          fill="freeze"
          attributeName="r"
          dur="0.2s"
          values="10;6"
        ></animate>
      </circle>
    </svg>
  );
}
