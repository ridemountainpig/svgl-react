import * as React from "react";
import type { SVGProps } from "react";
const GoogleMeet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 192 192"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path
      fill="url(#GoogleMeet__a)"
      d="M110.015 108.88c-6.829-4.718-6.921-14.778-.179-19.62L165 49.643c7.94-5.701 19-.038 19 9.737v77.755c0 9.675-10.861 15.359-18.821 9.859z"
    />
    <path
      fill="url(#GoogleMeet__b)"
      d="M8 71c0-24.3 19.7-44 44-44h64c11.046 0 20 8.954 20 20v98c0 11.046-8.954 20-20 20H28c-11.046 0-20-8.954-20-20z"
    />
    <mask
      id="GoogleMeet__d"
      width={129}
      height={138}
      x={8}
      y={27}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="#fff"
        d="M8 71c0-24.3 19.7-44 44-44h64c11.046 0 20 8.954 20 20v98c0 11.046-8.954 20-20 20H28c-11.046 0-20-8.954-20-20z"
      />
    </mask>
    <g filter="url(#GoogleMeet__c)" mask="url(#GoogleMeet__d)">
      <path fill="url(#GoogleMeet__e)" d="m73.906 99.198 110-63.198v124z" />
    </g>
    <circle cx={38} cy={135} r={14} fill="#fff" />
    <defs>
      <linearGradient
        id="GoogleMeet__a"
        x1={128.8}
        x2={227.2}
        y1={104.44}
        y2={104.44}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#f6a100" />
        <stop offset={1} stopColor="#ffbe00" />
      </linearGradient>
      <linearGradient
        id="GoogleMeet__e"
        x1={136.22}
        x2={78.5}
        y1={91.32}
        y2={91.19}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.15} stopColor="#ffb5e8" />
        <stop offset={1} stopColor="#ffdbf5" stopOpacity={0} />
      </linearGradient>
      <radialGradient
        id="GoogleMeet__b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(-159.725 0 0 -135.852 160.325 96)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.15} stopColor="#ffe921" />
        <stop offset={1} stopColor="#fec700" />
      </radialGradient>
      <filter
        id="GoogleMeet__c"
        width={166}
        height={180}
        x={45.91}
        y={8}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur result="blur" stdDeviation={14} />
      </filter>
    </defs>
  </svg>
);
export default GoogleMeet;
