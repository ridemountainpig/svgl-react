import * as React from "react";
import type { SVGProps } from "react";
const AffinityPublisher = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    fillRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit={2}
    clipRule="evenodd"
    viewBox="0 0 1024 1024"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path
      fill="#891b26"
      d="M1024 100c0-55.192-44.808-100-100-100H100C44.808 0 0 44.808 0 100v824c0 55.192 44.808 100 100 100h824c55.192 0 100-44.808 100-100z"
    />
    <path
      fill="url(#prefix__a)"
      d="m4145.14 949-257.8-446.348L3754 733.508V909c0 22.077 17.92 40 40 40zm187.99 0h-148.64s-192.55-333.487-257.06-445.057c-12.63-21.85-12.64-48.87-.01-70.724 23.33-40.368 53.92-93.31 53.92-93.31zm187.99 0h-148.64l-369.29-646.928 72.14-124.89zM4628 808.578V909c0 22.077-17.92 40-40 40h-27.53L4095 143.121 4134.35 75h69.95zM4588 75h-344.36L4628 740.456V115c0-22.077-17.92-40-40-40"
      transform="translate(-3678.99)"
    />
    <defs>
      <radialGradient
        id="prefix__a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="translate(4421.95 -89.26)scale(1038.26)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#ffae71" />
        <stop offset={1} stopColor="#ff9350" />
      </radialGradient>
    </defs>
  </svg>
);
export default AffinityPublisher;
