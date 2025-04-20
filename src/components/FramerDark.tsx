import * as React from "react";
import type { SVGProps } from "react";
const FramerDark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 256 384"
    width="100%"
    height="100%"
    {...props}
  >
    <path fill="#fff" d="M0 0h256v128H128zm0 128h128l128 128H128v128L0 256z" />
  </svg>
);
export default FramerDark;
export const FramerDarkUrl = "https://framer.com/";
