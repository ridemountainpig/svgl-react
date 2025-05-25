import * as React from "react";
import type { SVGProps } from "react";
const Dropbox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 128 128"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path fill="#0061FE" d="M0 0h128v128H0z" />
    <path
      fill="#F7F5F2"
      d="M43.7 32 23.404 44.75 43.701 57.5 64 44.75 84.3 57.5l20.298-12.75L84.299 32 64.002 44.75zm0 51L23.404 70.25 43.701 57.5 64 70.25 43.702 83Zm20.302-12.75L84.299 57.5l20.298 12.75L84.299 83zm0 29.75L43.7 87.25 64 74.5l20.3 12.75z"
    />
  </svg>
);
export default Dropbox;
