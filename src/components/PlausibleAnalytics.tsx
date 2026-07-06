import * as React from "react";
import type { SVGProps } from "react";
const PlausibleAnalytics = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 46 60"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <g clipPath="url(#PlausibleAnalytics__a)">
      <path
        fill="url(#PlausibleAnalytics__b)"
        d="M45.246 22.603C44.154 33.058 35.013 40.83 24.5 40.83h-4.047v9.57a9.6 9.6 0 0 1-9.6 9.6H3.36A3.36 3.36 0 0 1 0 56.64V36.938l5.038-7.07a3.36 3.36 0 0 1 4.037-1.149l2.866 1.2a3.35 3.35 0 0 0 4.025-1.145l6.717-9.417a3.34 3.34 0 0 1 4.014-1.14l5.52 2.32a3.35 3.35 0 0 0 4.022-1.142l6.46-9.063c2.025 3.56 3.014 7.789 2.547 12.27"
      />
      <path
        fill="url(#PlausibleAnalytics__c)"
        d="M3.292 28.873c.823-1.155 2.021-2.044 3.414-2.312a5.4 5.4 0 0 1 3.147.316l2.865 1.2a1.357 1.357 0 0 0 1.62-.464l6.594-9.245c.823-1.154 2.02-2.041 3.412-2.309a5.37 5.37 0 0 1 3.128.314l5.52 2.32q.252.105.52.106a1.35 1.35 0 0 0 1.099-.565l6.919-9.708C37.827 3.364 31.78 0 24.945 0H3.36A3.36 3.36 0 0 0 0 3.36v30.132z"
      />
    </g>
    <defs>
      <linearGradient
        id="PlausibleAnalytics__b"
        x1={14.841}
        x2={27.473}
        y1={22.544}
        y2={44.649}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#909CF7" />
        <stop offset={1} stopColor="#4B38D8" />
      </linearGradient>
      <linearGradient
        id="PlausibleAnalytics__c"
        x1={7.984}
        x2={21.001}
        y1={-1.358}
        y2={21.422}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#909CF7" />
        <stop offset={1} stopColor="#4B38D8" />
      </linearGradient>
      <clipPath id="PlausibleAnalytics__a">
        <path fill="#fff" d="M0 0h46v60H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default PlausibleAnalytics;
