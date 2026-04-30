import * as React from "react";
import type { SVGProps } from "react";
const Fresco = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <g clipPath="url(#Fresco__a)">
      <path
        fill="#001E36"
        d="M26.333 0H5.667A5.667 5.667 0 0 0 0 5.667v19.866A5.667 5.667 0 0 0 5.667 31.2h20.666A5.667 5.667 0 0 0 32 25.533V5.667A5.667 5.667 0 0 0 26.333 0"
      />
      <path
        fill="#31A8FF"
        d="M11.288 16.62v5.26a.152.152 0 0 1-.171.171h-2.64a.14.14 0 0 1-.119-.043.26.26 0 0 1-.032-.15V8.14q0-.3.15-.3h8.501a.26.26 0 0 1 .15.031q.043.033.065.29l.236 2.34a.11.11 0 0 1-.032.118.2.2 0 0 1-.14.054h-5.968v3.263h5.367q.193 0 .193.15v2.361a.152.152 0 0 1-.172.172zM18.737 11.382h2.34a.29.29 0 0 1 .28.215q.076.142.107.3.045.208.064.42.021.225.021.482a5 5 0 0 1 1.428-1.148 4 4 0 0 1 1.986-.483.17.17 0 0 1 .193.193v2.597q0 .15-.215.15a5.4 5.4 0 0 0-2.522.451 2.3 2.3 0 0 0-.72.494v6.805q0 .193-.171.193h-2.597a.19.19 0 0 1-.215-.214v-7.385a50 50 0 0 0-.043-2.04 7 7 0 0 0-.086-.88.123.123 0 0 1 .15-.15"
      />
    </g>
    <defs>
      <clipPath id="Fresco__a">
        <path fill="#fff" d="M0 0h32v31.2H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Fresco;
