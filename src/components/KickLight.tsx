import * as React from "react";
import type { SVGProps } from "react";
const KickLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 933 300"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <g clipPath="url(#prefix__a)">
      <g clipPath="url(#prefix__b)">
        <path
          fill="#53FC18"
          fillRule="evenodd"
          d="M0 0h100v66.667h33.333V33.333h33.334V0h100v100h-33.334v33.333H200v33.334h33.333V200h33.334v100h-100v-33.333h-33.334v-33.334H100V300H0zm666.667 0h100v66.667H800V33.333h33.333V0h100v100H900v33.333h-33.333v33.334H900V200h33.333v100h-100v-33.333H800v-33.334h-33.333V300h-100zM300 0h100v300H300zm233.333 0h-66.666v33.333h-33.334v233.334h33.334V300h166.666V200h-100V100h100V0z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="prefix__a">
        <path fill="#fff" d="M0 0h933v300H0z" />
      </clipPath>
      <clipPath id="prefix__b">
        <path fill="#fff" d="M0 0h933.333v300H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default KickLight;
export const KickLightUrl = "https://kick.com/";
