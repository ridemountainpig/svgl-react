import * as React from "react";
import type { SVGProps } from "react";
const Neon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 64 64"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path
      fill="#37C38F"
      d="M63 .018v63.535L38.418 42.25v21.303H0V0zM7.723 55.838h22.972V25.325l24.583 21.724V7.729L7.723 7.716z"
    />
  </svg>
);
export default Neon;
