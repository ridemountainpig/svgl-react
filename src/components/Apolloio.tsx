import * as React from "react";
import type { SVGProps } from "react";
const Apolloio = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 128 128"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <rect width={128} height={128} fill="#FECF40" rx={8} />
    <path
      fill="#000"
      d="M91.044 36.135H78.489l6.51 11.134zm17.45 62.852L63.922 25 19.5 98.832h23.792c3.174 0 6.297-.8 9.058-2.316 2.98-1.638 5.23-4.012 6.989-6.89 2.056-3.367 4.053-6.773 6.077-10.16l5.178-8.67-6.678-11.167-2.961 4.755c-3.375 5.631-6.569 11.392-10.066 16.947-1.759 2.786-4.054 5.418-7.442 6.096a9.7 9.7 0 0 1-1.558.174c-.698.026-1.397.013-2.088.013l24.121-40.99 30.975 52.363z"
    />
  </svg>
);
export default Apolloio;
