import * as React from "react";
import type { SVGProps } from "react";
const GoogleChat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 96 100"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <g clipPath="url(#GoogleChat__a)">
      <path
        fill="#00AC47"
        d="M21.76 53.94v-32.5H7.56c-4.18 0-7.56 3.4-7.56 7.58V96.2c0 3.38 4.08 5.06 6.46 2.68l15.62-15.62h44.48c4.18 0 7.56-3.38 7.56-7.56V61.5H29.34c-4.18 0-7.58-3.38-7.58-7.56"
      />
      <path
        fill="#5BB974"
        d="M88.32 0H29.34c-4.18 0-7.56 3.38-7.56 7.56v13.88h44.78c4.18 0 7.56 3.38 7.56 7.56v32.48h14.2c4.18 0 7.56-3.38 7.56-7.56V7.56C95.88 3.38 92.5 0 88.32 0"
      />
      <path
        fill="#00832D"
        d="M66.56 21.44h-44.8v32.48c0 4.18 3.38 7.56 7.56 7.56H74.1V29.02a7.54 7.54 0 0 0-7.54-7.58"
      />
    </g>
    <defs>
      <clipPath id="GoogleChat__a">
        <path fill="#fff" d="M0 0h95.88v100H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default GoogleChat;
