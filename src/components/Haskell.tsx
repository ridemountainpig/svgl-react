import * as React from "react";
import type { SVGProps } from "react";
const Haskell = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path fill="#453a62" d="M9 43H1l12-18L1 7h8l12 18z" />
    <path fill="#5e5086" d="M20 7h-8l12 18-12 18h8l8.16-12.24L36 43h8z" />
    <path fill="#8f4e8b" d="M34.338 24H47v-6H30.338zm6 9H47v-6H36.338z" />
  </svg>
);
export default Haskell;
export const HaskellUrl = "https://www.haskell.org/";
