import * as React from "react";
import type { SVGProps } from "react";
const VK = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 256 256"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <g clipPath="url(#VK__a)">
      <mask
        id="VK__a"
        width={256}
        height={256}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill="#fff" d="M256 0H0v256h256z" />
      </mask>
      <g mask="url(#VK__a)">
        <path
          fill="#07F"
          d="M0 122.88C0 64.95 0 35.99 18 18 36 0 64.95 0 122.88 0h10.24C191.05 0 220.01 0 238 18c18 18 18 46.95 18 104.88v10.24c0 57.93 0 86.89-18 104.88-18 18-46.95 18-104.88 18h-10.24c-57.93 0-86.89 0-104.88-18C0 220 0 191.06 0 133.13v-10.24z"
        />
        <path
          fill="#fff"
          d="M136.21 184.43c-58.34 0-91.62-40-93.01-106.56h29.23c.96 48.85 22.5 69.54 39.57 73.81V77.87h27.52V120c16.85-1.81 34.56-21.01 40.53-42.13h27.52c-4.58 26.02-23.78 45.22-37.44 53.12 13.66 6.4 35.52 23.14 43.84 53.44h-30.29c-6.5-20.27-22.72-35.95-44.16-38.08v38.08h-3.3z"
        />
      </g>
    </g>
  </svg>
);
export default VK;
