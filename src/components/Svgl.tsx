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
      id="prefix__b"
      width={512}
      height={512}
      x={0}
      y={0}
      fill="#222"
      stroke="#FFF"
      strokeOpacity="100%"
      strokeWidth={0}
      paintOrder="stroke"
      rx={128}
    />
    <rect
      width={512}
      height={512}
      fill="url(#prefix__a)"
      rx={128}
      style={{
        mixBlendMode: "overlay",
      }}
    />
    <defs>
      <radialGradient
        id="prefix__a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(0 512 -512 0 256 0)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </radialGradient>
    </defs>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x={101}
      y={101}
      fill="#e8e8e8"
      alignmentBaseline="middle"
      style={{
        color: "#fff",
      }}
      viewBox="0 0 256 256"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path d="M168 32H88a56.06 56.06 0 0 0-56 56v80a56.06 56.06 0 0 0 56 56h48a8 8 0 0 0 2.53-.41c26.23-8.75 76.31-58.83 85.06-85.06A8 8 0 0 0 224 136V88a56.06 56.06 0 0 0-56-56M48 168V88a40 40 0 0 1 40-40h80a40 40 0 0 1 40 40v40h-24a56.06 56.06 0 0 0-56 56v24H88a40 40 0 0 1-40-40m96 35.14V184a40 40 0 0 1 40-40h19.14C191 163.5 163.5 191 144 203.14" />
    </svg>
  </svg>
);
export default Svgl;
