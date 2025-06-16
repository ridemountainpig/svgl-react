import * as React from "react";
import type { SVGProps } from "react";
const Coinbase = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 48 48"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <g clipPath="url(#Coinbase__a)">
      <path
        fill="#0052FF"
        d="M0 11.077C0 4.959 4.96 0 11.077 0h25.846C43.041 0 48 4.96 48 11.077v25.846C48 43.041 43.04 48 36.923 48H11.077C4.959 48 0 43.04 0 36.923z"
      />
      <path
        fill="#fff"
        d="M23.957 32.5a8.54 8.54 0 0 1-4.508-1.396 8.5 8.5 0 0 1-3.072-3.575 8.48 8.48 0 0 1 1.207-8.969 8.541 8.541 0 0 1 12.706-.432 8.5 8.5 0 0 1 2.189 4.172H41a16.99 16.99 0 0 0-5.845-11.19A17.07 17.07 0 0 0 23.19 7.022a17.06 17.06 0 0 0-11.495 5.263A16.98 16.98 0 0 0 7 24c0 4.361 1.68 8.556 4.694 11.716a17.07 17.07 0 0 0 23.462 1.173A16.99 16.99 0 0 0 41 25.7h-8.521c0 3.4-5.113 6.8-8.522 6.8"
      />
    </g>
    <defs>
      <clipPath id="Coinbase__a">
        <rect width={48} height={48} fill="#fff" rx={24} />
      </clipPath>
    </defs>
  </svg>
);
export default Coinbase;
