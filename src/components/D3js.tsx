import * as React from "react";
import type { SVGProps } from "react";
const D3js = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-10 -10 116 111"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <clipPath id="prefix__a">
      <path d="M0 0h7.75a45.5 45.5 0 1 1 0 91H0V71h7.75a25.5 25.5 0 1 0 0-51H0zm36.251 0h32a27.75 27.75 0 0 1 21.331 45.5A27.75 27.75 0 0 1 68.251 91h-32a53.7 53.7 0 0 0 18.746-20H68.25a7.75 7.75 0 1 0 0-15.5H60.5a53.7 53.7 0 0 0 0-20h7.75a7.75 7.75 0 1 0 0-15.5H54.997A53.7 53.7 0 0 0 36.251 0" />
    </clipPath>
    <linearGradient
      id="prefix__b"
      x1={7}
      x2={50}
      y1={64}
      y2={107}
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#f9a03c" />
      <stop offset={1} stopColor="#f7974e" />
    </linearGradient>
    <linearGradient
      id="prefix__d"
      x1={2}
      x2={87}
      y1={-2}
      y2={84}
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#f26d58" />
      <stop offset={1} stopColor="#f9a03c" />
    </linearGradient>
    <linearGradient
      id="prefix__c"
      x1={45}
      x2={108}
      y1={-10}
      y2={53}
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#b84e51" />
      <stop offset={1} stopColor="#f68e48" />
    </linearGradient>
    <g clipPath="url(#prefix__a)">
      <path fill="url(#prefix__b)" d="M-128-102v300h300z" />
      <path fill="url(#prefix__c)" d="M-72-102h300v300z" />
      <path
        fill="none"
        stroke="url(#prefix__d)"
        strokeWidth={40}
        d="m-100-102 300 300"
      />
    </g>
  </svg>
);
export default D3js;
export const D3jsUrl = "https://d3js.org/";
