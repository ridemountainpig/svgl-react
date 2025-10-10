import * as React from "react";
import type { SVGProps } from "react";
const TurborepoDark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 100 100"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path
      fill="#fff"
      d="M49.542 17.322c-17.766 0-32.22 14.454-32.22 32.22s14.454 32.22 32.22 32.22 32.22-14.454 32.22-32.22-14.454-32.22-32.22-32.22m0 48.894c-9.21 0-16.674-7.464-16.674-16.674s7.464-16.674 16.674-16.674 16.674 7.464 16.674 16.674-7.464 16.674-16.674 16.674"
    />
    <path
      fill="url(#TurborepoDark__a)"
      fillRule="evenodd"
      d="M52.242 12.03V0c26.148 1.398 46.92 23.046 46.92 49.542S78.39 97.68 52.242 99.084v-12.03c19.488-1.392 34.92-17.676 34.92-37.512S71.73 13.422 52.242 12.03M21.126 74.142c-5.166-5.964-8.496-13.56-9.09-21.9H0c.624 11.67 5.292 22.26 12.606 30.414l8.514-8.514zm25.716 24.942v-12.03c-8.346-.594-15.942-3.918-21.906-9.09l-8.514 8.514c8.16 7.32 18.75 11.982 30.414 12.606z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="TurborepoDark__a"
        x1={54.186}
        x2={5.418}
        y1={6.967}
        y2={55.735}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0096FF" />
        <stop offset={1} stopColor="#FF1E56" />
      </linearGradient>
    </defs>
  </svg>
);
export default TurborepoDark;
