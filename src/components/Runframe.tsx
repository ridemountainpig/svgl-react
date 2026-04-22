import * as React from "react";
import type { SVGProps } from "react";
const Runframe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 512 512"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <rect width={512} height={512} fill="#000" rx={64} />
    <g fill="#fff">
      <path d="M117.783 158 82.87 356h56.25l19.837-112.5h78.75l15.076-85.5h-78.75ZM441.783 158 406.87 356h-56.25l19.837-112.5h-78.75l15.076-85.5h78.75Z" />
    </g>
  </svg>
);
export default Runframe;
