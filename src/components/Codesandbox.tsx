import * as React from "react";
import type { SVGProps } from "react";
const Codesandbox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 600 600"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path
      fill="#DCFF50"
      fillRule="evenodd"
      d="M150 150h299.832v300H150zm269.168 30.682v238.636H180.665V180.682z"
      clipRule="evenodd"
    />
  </svg>
);
export default Codesandbox;
