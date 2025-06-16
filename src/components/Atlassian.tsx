import * as React from "react";
import type { SVGProps } from "react";
const Atlassian = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 256 256"
    width="100%"
    height="100%"
    {...props}
  >
    <defs>
      <linearGradient
        id="Atlassian__a"
        x1="99.7%"
        x2="39.8%"
        y1="15.8%"
        y2="97.4%"
      >
        <stop offset="0%" stopColor="#0052CC" />
        <stop offset="92.3%" stopColor="#2684FF" />
      </linearGradient>
    </defs>
    <path
      fill="url(#Atlassian__a)"
      d="M76 118c-4-4-10-4-13 1L1 245a7 7 0 0 0 6 10h88c3 0 5-1 6-4 19-39 8-98-25-133"
    />
    <path
      fill="#2681FF"
      d="M122 4c-35 56-33 117-10 163l42 84c1 3 4 4 7 4h87a7 7 0 0 0 7-10L134 4c-2-5-9-5-12 0"
    />
  </svg>
);
export default Atlassian;
