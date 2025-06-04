import * as React from "react";
import type { SVGProps } from "react";
const ReactWheelPickerLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 256 256"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path
      fill="#000"
      d="M144 16h-32a64.07 64.07 0 0 0-64 64v96a64.07 64.07 0 0 0 64 64h32a64.07 64.07 0 0 0 64-64V80a64.07 64.07 0 0 0-64-64m2.34 146.34a8.004 8.004 0 0 1 11.32 11.32l-24 24a7.99 7.99 0 0 1-5.66 2.346 8 8 0 0 1-5.66-2.346l-24-24a8.004 8.004 0 1 1 11.32-11.32L120 172.69V83.31l-10.34 10.35a8.004 8.004 0 1 1-11.32-11.32l24-24a8 8 0 0 1 11.32 0l24 24a8.005 8.005 0 0 1-11.32 11.32L136 83.31v89.38z"
    />
  </svg>
);
export default ReactWheelPickerLight;
