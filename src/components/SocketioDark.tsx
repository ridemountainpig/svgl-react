import * as React from "react";
import type { SVGProps } from "react";
const SocketioDark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 256 256"
    width="100%"
    height="100%"
    {...props}
  >
    <circle
      cx={128}
      cy={128}
      r={114}
      fill="none"
      stroke="#FFF"
      strokeWidth={20}
    />
    <path
      fill="#FFF"
      d="M97.637 121.69c27.327-22.326 54.058-45.426 81.98-67.097-14.646 22.505-29.708 44.711-44.354 67.215-12.562.06-25.123.06-37.626-.119zm23.1 12.442c12.621 0 25.183 0 37.745.179-27.505 22.206-54.117 45.484-82.099 67.096 14.646-22.505 29.708-44.77 44.354-67.275"
    />
  </svg>
);
export default SocketioDark;
export const SocketioDarkUrl = "https://socket.io/";
