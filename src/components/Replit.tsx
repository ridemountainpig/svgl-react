import * as React from "react";
import type { SVGProps } from "react";
const Replit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 24"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path
      fill="#F26207"
      d="M0 1.5A1.5 1.5 0 0 1 1.5 0h7A1.5 1.5 0 0 1 10 1.5V8H1.5A1.5 1.5 0 0 1 0 6.5zM10 8h8.5A1.5 1.5 0 0 1 20 9.5v5a1.5 1.5 0 0 1-1.5 1.5H10zM0 17.5A1.5 1.5 0 0 1 1.5 16H10v6.5A1.5 1.5 0 0 1 8.5 24h-7A1.5 1.5 0 0 1 0 22.5z"
    />
  </svg>
);
export default Replit;
export const ReplitUrl = "https://replit.com/";
