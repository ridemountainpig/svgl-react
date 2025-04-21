import * as React from "react";
import type { SVGProps } from "react";
const Esbuild = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 256 256"
    width="100%"
    height="100%"
    {...props}
  >
    <circle cx={128} cy={128} r={128} fill="#FFCF00" />
    <path
      fill="#191919"
      d="M69.285 58.715 138.571 128l-69.286 69.285-16.97-16.97L104.629 128 52.315 75.685zm76.8 0L215.371 128l-69.286 69.285-16.97-16.97L181.429 128l-52.314-52.315z"
    />
  </svg>
);
export default Esbuild;
export const EsbuildUrl = "https://esbuild.github.io/";
