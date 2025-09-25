import * as React from "react";
import type { SVGProps } from "react";
const Svgl = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 512 512"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <rect
      id="Svgl__b"
      width={512}
      height={512}
      x={0}
      y={0}
      fill="url(#Svgl__\xABr3c\xBB)"
      stroke="#FFF"
      strokeOpacity="100%"
      strokeWidth={0}
      paintOrder="stroke"
      rx={128}
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x={76}
      y={76}
      fill="snow"
      alignmentBaseline="middle"
      style={{
        color: "#e6e6e6",
      }}
      viewBox="0 0 256 256"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path d="M168 36H88a52.06 52.06 0 0 0-52 52v80a52.06 52.06 0 0 0 52 52h48a3.8 3.8 0 0 0 1.26-.21c25.46-8.48 74.05-57.07 82.53-82.53A3.8 3.8 0 0 0 220 136V88a52.06 52.06 0 0 0-52-52M44 168V88a44.05 44.05 0 0 1 44-44h80a44.05 44.05 0 0 1 44 44v44h-28a52.06 52.06 0 0 0-52 52v28H88a44.05 44.05 0 0 1-44-44m96 42v-26a44.05 44.05 0 0 1 44-44h26c-11.1 22.23-47.77 58.9-70 70" />
    </svg>
  </svg>
);
export default Svgl;
