import * as React from "react";
import type { SVGProps } from "react";
const RadixUILight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#121212"
    style={{
      marginRight: 3,
    }}
    viewBox="4 0 17 25"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path d="M12 25a8 8 0 1 1 0-16zm0-25H4v8h8zm5 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8" />
  </svg>
);
export default RadixUILight;
export const RadixUILightUrl = "https://www.radix-ui.com/";
