import * as React from "react";
import type { SVGProps } from "react";
const FastAPI = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 256 256"
    width="100%"
    height="100%"
    {...props}
  >
    <path
      fill="#009688"
      d="M128 0C57.33 0 0 57.33 0 128s57.33 128 128 128 128-57.33 128-128S198.67 0 128 0m-6.67 230.605v-80.288H76.699l64.128-124.922v80.288h42.966z"
    />
  </svg>
);
export default FastAPI;
export const FastAPIUrl = "https://fastapi.tiangolo.com/";
