import * as React from "react";
import type { SVGProps } from "react";
const ChakraUI = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 257 257"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <rect width={257} height={257} fill="url(#prefix__a)" rx={128.5} />
    <path
      fill="#fff"
      d="m69.558 133.985 87.592-86.99c1.636-1.624 4.27.353 3.165 2.378l-32.601 59.752c-.728 1.332.237 2.958 1.755 2.958h56.34c1.815 0 2.691 2.223 1.364 3.462l-98.728 92.142c-1.77 1.652-4.405-.676-2.984-2.636l46.736-64.473c.958-1.322.014-3.174-1.619-3.174h-59.61c-1.786 0-2.677-2.161-1.41-3.419"
    />
    <defs>
      <linearGradient
        id="prefix__a"
        x1={128.5}
        x2={128.5}
        y2={257}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7BCBD4" />
        <stop offset={1} stopColor="#29C6B7" />
      </linearGradient>
    </defs>
  </svg>
);
export default ChakraUI;
export const ChakraUIUrl = "https://chakra-ui.com";
