import * as React from "react";
import type { SVGProps } from "react";
const Python = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="16 16 32 32"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path
      fill="url(#Python__a)"
      d="M31.885 16c-8.124 0-7.617 3.523-7.617 3.523l.01 3.65h7.752v1.095H21.197S16 23.678 16 31.876c0 8.196 4.537 7.906 4.537 7.906h2.708v-3.804s-.146-4.537 4.465-4.537h7.688s4.32.07 4.32-4.175v-7.019S40.374 16 31.885 16m-4.275 2.454a1.394 1.394 0 1 1 0 2.79 1.393 1.393 0 0 1-1.395-1.395c0-.771.624-1.395 1.395-1.395"
    />
    <path
      fill="url(#Python__b)"
      d="M32.115 47.833c8.124 0 7.617-3.523 7.617-3.523l-.01-3.65H31.97v-1.095h10.832S48 40.155 48 31.958s-4.537-7.906-4.537-7.906h-2.708v3.803s.146 4.537-4.465 4.537h-7.688s-4.32-.07-4.32 4.175v7.019s-.656 4.247 7.833 4.247m4.275-2.454a1.393 1.393 0 0 1-1.395-1.395 1.394 1.394 0 1 1 1.395 1.395"
    />
    <defs>
      <linearGradient
        id="Python__a"
        x1={19.075}
        x2={34.898}
        y1={18.782}
        y2={34.658}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#387EB8" />
        <stop offset={1} stopColor="#366994" />
      </linearGradient>
      <linearGradient
        id="Python__b"
        x1={28.809}
        x2={45.803}
        y1={28.882}
        y2={45.163}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFE052" />
        <stop offset={1} stopColor="#FFC331" />
      </linearGradient>
    </defs>
  </svg>
);
export default Python;
