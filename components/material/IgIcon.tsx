import React from 'react';
import type { SVGProps } from 'react';

export function LineMdInstagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2rem"
      height="2rem"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx={17} cy={7} r={1.5} fill="#1D4ED8" fillOpacity={0}>
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.65s"
          dur="0.075s"
          values="0;1"
        ></animate>
      </circle>
      <g
        fill="none"
        stroke="#1D4ED8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
      >
        <path
          strokeDasharray={72}
          strokeDashoffset={72}
          d="M16 3c2.76 0 5 2.24 5 5v8c0 2.76 -2.24 5 -5 5h-8c-2.76 0 -5 -2.24 -5 -5v-8c0 -2.76 2.24 -5 5 -5h4Z"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.3s"
            values="72;0"
          ></animate>
        </path>
        <path
          strokeDasharray={28}
          strokeDashoffset={28}
          d="M12 8c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.35s"
            dur="0.3s"
            values="28;0"
          ></animate>
        </path>
      </g>
    </svg>
  );
}
