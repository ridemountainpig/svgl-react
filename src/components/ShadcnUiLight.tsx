import * as React from "react";
import type { SVGProps } from "react";
const ShadcnUiLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={25}
      d="m208 128-80 80m64-168L40 192"
    />
  </svg>
);
export default ShadcnUiLight;
export const ShadcnUiLightUrl = "https://ui.shadcn.com/";
