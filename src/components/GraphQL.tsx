import * as React from "react";
import type { SVGProps } from "react";
const GraphQL = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#f6009b"
    viewBox="0 0 100 100"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="m50 6.903 37.323 21.549v43.096L50 93.097 12.677 71.548V28.451zM16.865 30.87v31.656L44.28 15.041zM50 13.51 18.398 68.246h63.205zm27.415 58.924h-54.83L50 88.261zm5.72-9.908L55.72 15.041 83.136 30.87z"
      clipRule="evenodd"
    />
    <circle cx={50} cy={9.321} r={8.82} />
    <circle cx={85.229} cy={29.66} r={8.82} />
    <circle cx={85.229} cy={70.34} r={8.82} />
    <circle cx={50} cy={90.679} r={8.82} />
    <circle cx={14.766} cy={70.34} r={8.82} />
    <circle cx={14.766} cy={29.66} r={8.82} />
  </svg>
);
export default GraphQL;
