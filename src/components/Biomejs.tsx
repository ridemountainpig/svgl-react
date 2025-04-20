import * as React from "react";
import type { SVGProps } from "react";
const Biomejs = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 55.425"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <rect width="100%" height="100%" fill="none" />
    <path
      fill="#60a5fa"
      d="M32 0 17.745 24.69a32.2 32.2 0 0 1 16.869-.584l4.818 1.137-4.533 19.22-4.825-1.137c-5.93-1.399-11.628 1.716-14.036 6.685l-4.46-2.158c3.404-7.029 11.425-11.285 19.637-9.347l2.26-9.58A27.231 27.231 0 0 0 0 55.424l64 .001z"
      style={{
        paintOrder: "markers fill stroke",
      }}
    />
  </svg>
);
export default Biomejs;
export const BiomejsUrl = "https://biomejs.dev/";
