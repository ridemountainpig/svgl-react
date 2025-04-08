import * as React from "react";
import type { SVGProps } from "react";
const JSON = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 160 160"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <defs>
      <linearGradient id="prefix__a">
        <stop offset={0} />
        <stop offset={1} stopColor="#fff" />
      </linearGradient>
      <linearGradient
        xlinkHref="#prefix__a"
        id="prefix__c"
        x1={-553.27}
        x2={-666.12}
        y1={525.91}
        y2={413.05}
        gradientTransform="matrix(.99884 0 0 .9987 689.01 -388.84)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#prefix__a"
        id="prefix__b"
        x1={-666.12}
        x2={-553.27}
        y1={413.04}
        y2={525.91}
        gradientTransform="matrix(.99884 0 0 .9987 689.01 -388.84)"
        gradientUnits="userSpaceOnUse"
      />
    </defs>
    <g fillRule="evenodd" color="#000">
      <path
        fill="url(#prefix__b)"
        d="M79.865 119.1c35.398 48.255 70.04-13.469 69.989-50.587C149.794 24.627 105.313.099 79.836.099 38.944.099 0 33.895 0 80.135 0 131.531 44.64 160 79.836 160c-7.965-1.147-34.506-6.834-34.863-67.967-.24-41.347 13.488-57.866 34.805-50.599.477.177 23.514 9.265 23.514 38.951 0 29.56-23.427 38.715-23.427 38.715"
      />
      <path
        fill="url(#prefix__c)"
        d="M79.823 41.401C56.433 33.339 27.78 52.617 27.78 91.23c0 63.048 46.721 68.77 52.384 68.77C121.056 160 160 126.204 160 79.964 160 28.568 115.36.099 80.164.099c9.748-1.35 52.541 10.55 52.541 69.037 0 38.141-31.953 58.905-52.735 50.033-.477-.177-23.514-9.264-23.514-38.951 0-29.56 23.367-38.818 23.367-38.818z"
      />
    </g>
  </svg>
);
export default JSON;
