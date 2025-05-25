import * as React from "react";
import type { SVGProps } from "react";
const Valibot = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <defs>
      <linearGradient
        id="prefix__a"
        x1={0.414}
        x2={0}
        y1={0.255}
        y2={0.932}
        gradientUnits="objectBoundingBox"
      >
        <stop offset={0} stopColor="#eab308" />
        <stop offset={1} stopColor="#ca8a04" />
      </linearGradient>
      <linearGradient
        id="prefix__b"
        x1={0.338}
        x2={0.664}
        y1={0.02}
        y2={0.966}
        gradientUnits="objectBoundingBox"
      >
        <stop offset={0} stopColor="#fde68a" />
        <stop offset={1} stopColor="#fbbf24" />
      </linearGradient>
      <linearGradient
        id="prefix__c"
        x2={1}
        y1={0.5}
        y2={0.5}
        gradientUnits="objectBoundingBox"
      >
        <stop offset={0} stopColor="#7dd3fc" />
        <stop offset={1} stopColor="#0ea5e9" />
      </linearGradient>
    </defs>
    <path fill="none" d="M0 0h512v512H0z" />
    <path
      fill="url(#prefix__a)"
      d="M742.271 987.024c-66.706 0-119.121 54.673-121.874 126.408l-2.551 95.471c-3.967 78.653 71.961 105.52 126.936 105.52Z"
      transform="translate(-592.542 -894.723)"
    />
    <path
      fill="url(#prefix__b)"
      d="M92.616.01h227.278c54.53-.8 95.624 40.1 98.381 93.335l6.144 135.76c.732 67.368-48.116 94.95-104.525 95.335l-227.278 2.934C34.061 327.8-1.063 283.663.022 229.105l3.8-135.76C7.41 33.54 33.3 1.093 92.616.01"
      transform="translate(62.42 92.302)"
    />
    <path
      fill="#111827"
      d="M167.821 102.746h213.114c51.132-.746 89.665 37.307 92.25 86.824l5.761 126.29c.686 62.669-45.117 88.326-98.011 88.685l-213.114 2.729c-54.906.396-87.844-40.662-86.824-91.414l3.56-126.289c3.368-55.634 27.642-85.818 83.264-86.825"
    />
    <path
      fill="url(#prefix__c)"
      d="M27.626 0A27.626 27.626 0 1 1 0 27.626 27.626 27.626 0 0 1 27.626 0"
      transform="translate(365.148 205.357)"
    />
    <path
      fill="url(#prefix__c)"
      d="M27.626 0A27.626 27.626 0 1 1 0 27.626 27.626 27.626 0 0 1 27.626 0"
      transform="translate(152.034 205.357)"
    />
  </svg>
);
export default Valibot;
