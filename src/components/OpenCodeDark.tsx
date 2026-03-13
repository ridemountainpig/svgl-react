import * as React from "react";
import type { SVGProps } from "react";
const OpenCodeDark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 512"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path fill="#131010" d="M0 0h512v512H0z" />
      <path fill="#5A5858" d="M320 224v128H192V224z" />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M384 416H128V96h256zm-64-256H192v192h128z"
        clipRule="evenodd"
      />
    </svg>
    <style>
      {
        "@media (prefers-color-scheme:light){:root{filter:none}}@media (prefers-color-scheme:dark){:root{filter:none}}"
      }
    </style>
  </svg>
);
export default OpenCodeDark;
