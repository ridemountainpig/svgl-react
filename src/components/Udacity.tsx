import * as React from "react";
import type { SVGProps } from "react";
const Udacity = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path
      d="M13.3 0 0 7.7v17.6C0 33.4 6.5 40 14.6 40c2.7 0 5.2-.7 7.4-1.9l10.8-6.2C37.1 29.6 40 25.2 40 20V1.6L37.4.1 26 6.2v19.2c0 .8-.1 1.6-.2 2.4-.2.8-.4 1.5-.7 2.2l-.3.6c-.4 0-2.9-.9-4.2-1.8a10.1 10.1 0 0 1-2.9-2.9c-.4-.6-.7-1.2-1-1.8s-.5-1.3-.6-2-.1-1.4-.1-2.1V1.6zm6.5 36.2c-.7.3-1.7.7-2.5.9s-1.5.2-2.3.2q-1.2 0-2.4-.3c-.8-.2-1.5-.4-2.2-.7s-1.4-.7-2-1.1A9.6 9.6 0 0 1 5 32c-.4-.6-.8-1.3-1.1-2s-.5-1.5-.7-2.3-.2-1.6-.2-2.4V9.2l10-6.1V20c0 6.4 4.7 11.8 10.7 13.1-.2.3-.4.6-.7.8-1.1 1.1-2 1.8-3.2 2.3m17-14c-.1.7-.4 1.4-.6 2-.3.6-.6 1.2-1 1.8s-1.6 2.1-3.2 3-3.1 1.2-4 1.4c.6-1.6 1-3.2 1-5V7.7l8-4.6V20c0 .8 0 1.5-.2 2.2"
      style={{
        fill: "#02b3e4",
      }}
    />
  </svg>
);
export default Udacity;
export const UdacityUrl = "https://www.udacity.com/";
