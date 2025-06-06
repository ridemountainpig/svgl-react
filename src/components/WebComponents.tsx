import * as React from "react";
import type { SVGProps } from "react";
const WebComponents = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path
      fill="var(--bgcolor, #fff)"
      d="m31 12-1 1L2 63l29 51h67l15-26v-2l14-23-15-24v-2L98 12zm21 30h21l13 21-13 21H52L40 63z"
    />
    <path fill="#166da5" d="m122 63-12 21-18-21 18-21z" />
    <path fill="#8fdb69" d="M108 88 89 65 78 84l17 26z" />
    <path fill="#166da5" d="M108 38 89 61 78 42l17-26z" />
    <path d="M63 110 35 63l28-47H33L6 63l27 47z" />
    <path fill="#287bbe" d="m50 38 13-22h32l13 22zm28 4h32l11 19H89z" />
    <path fill="#ddf021" d="m50 88 13 22h32l13-22zm28-4h32l11-19H89z" />
  </svg>
);
export default WebComponents;
