import * as React from "react";
import type { SVGProps } from "react";
const Raycast = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 28 28"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path
      fill="#FF6363"
      fillRule="evenodd"
      d="M7 18.079V21l-7-7 1.46-1.46L7 18.081zM9.921 21H7l7 7 1.46-1.46zm16.614-5.538L27.996 14l-14-14-1.458 1.466 5.539 5.538H14.73l-3.866-3.858-1.46 1.46 2.405 2.404h-1.68v10.866h10.865v-1.68l2.405 2.404 1.46-1.46-3.865-3.866V9.927zM7.73 6.276 6.265 7.738l1.568 1.566 1.461-1.46zm12.432 12.432-1.46 1.462 1.566 1.568 1.462-1.462zM4.596 9.41l-1.462 1.462L7 14.738v-2.923zm11.596 11.596h-2.924l3.866 3.866 1.462-1.462z"
      clipRule="evenodd"
    />
  </svg>
);
export default Raycast;
