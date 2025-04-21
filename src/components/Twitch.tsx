import * as React from "react";
import type { SVGProps } from "react";
const Twitch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 2400 2800"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path fill="#fff" d="m2200 1300-400 400h-400l-350 350v-350H600V200h1600z" />
    <g fill="#9146ff">
      <path d="M500 0 0 500v1800h600v500l500-500h400l900-900V0zm1700 1300-400 400h-400l-350 350v-350H600V200h1600z" />
      <path d="M1700 550h200v600h-200zm-550 0h200v600h-200z" />
    </g>
  </svg>
);
export default Twitch;
export const TwitchUrl = "https://twitch.tv";
