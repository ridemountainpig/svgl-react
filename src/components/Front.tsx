import * as React from "react";
import type { SVGProps } from "react";
const Front = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 950 950"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <circle cx={475} cy={475} r={425} fill="#fff" />
    <path
      fill="#001B38"
      d="M308 308.2c0-45.95 37.25-83.2 83.2-83.2H658v118.4c0 22.975-18.625 41.6-41.6 41.6H508c-22.091 0-40 17.909-40 40v258.4c0 22.975-18.625 41.6-41.6 41.6H308z"
    />
    <circle
      cx={509}
      cy={426}
      r={108}
      fill="url(#prefix__a)"
      transform="rotate(90 509 426)"
    />
    <circle
      cx={509}
      cy={426}
      r={108}
      fill="url(#prefix__b)"
      opacity={0.5}
      transform="rotate(90 509 426)"
    />
    <defs>
      <linearGradient
        id="prefix__a"
        x1={428.041}
        x2={591.574}
        y1={502.06}
        y2={339.649}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF0057" stopOpacity={0.16} />
        <stop offset={0.861} stopColor="#FF0057" />
      </linearGradient>
      <linearGradient
        id="prefix__b"
        x1={428.041}
        x2={591.574}
        y1={502.06}
        y2={339.649}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF0057" stopOpacity={0.16} />
        <stop offset={0.861} stopColor="#FF0057" />
      </linearGradient>
    </defs>
  </svg>
);
export default Front;
export const FrontUrl = "https://front.com";
