import * as React from "react";
import type { SVGProps } from "react";
const YoutubeMusic = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 192 192"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path fill="none" d="M0 0h192v192H0z" />
    <circle cx={96} cy={96} r={88} fill="red" />
    <path
      fill="#FFF"
      d="M96 50.32c25.19 0 45.68 20.49 45.68 45.68S121.19 141.68 96 141.68 50.32 121.19 50.32 96 70.81 50.32 96 50.32m0-6.4c-28.76 0-52.08 23.32-52.08 52.08S67.24 148.08 96 148.08s52.08-23.32 52.08-52.08S124.76 43.92 96 43.92"
    />
    <path fill="#FFF" d="m79 122 45-26-45-26z" />
  </svg>
);
export default YoutubeMusic;
export const YoutubeMusicUrl = "https://music.youtube.com/";
