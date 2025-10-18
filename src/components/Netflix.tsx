import * as React from "react";
import type { SVGProps } from "react";
const Netflix = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 551.111 1000"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <defs>
      <linearGradient id="Netflix__b">
        <stop
          offset={0}
          style={{
            stopColor: "#b1060f",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.625}
          style={{
            stopColor: "#7b010c",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#b1060f",
            stopOpacity: 0,
          }}
        />
      </linearGradient>
      <linearGradient id="Netflix__a">
        <stop
          offset={0}
          style={{
            stopColor: "#b1060f",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.546}
          style={{
            stopColor: "#7b010c",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#e50914",
            stopOpacity: 0,
          }}
        />
      </linearGradient>
      <linearGradient
        xlinkHref="#Netflix__a"
        id="Netflix__c"
        x1={78.234}
        x2={221.663}
        y1={423.767}
        y2={365.092}
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#Netflix__b"
        id="Netflix__d"
        x1={456.365}
        x2={309.676}
        y1={521.56}
        y2={583.495}
        gradientUnits="userSpaceOnUse"
      />
    </defs>
    <path
      d="M-1.152-1.152 2.305 1002.67c73.273-14.111 130.892-12.569 195.924-18.44V0Z"
      style={{
        fill: "url(#Netflix__c)",
        stroke: "none",
        strokeWidth: 1,
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeOpacity: 1,
        fillOpacity: 1,
      }}
    />
    <path
      d="M353.816 0h199.381l2.305 1000.365-202.839-33.422z"
      style={{
        fill: "url(#Netflix__d)",
        stroke: "none",
        strokeWidth: 1,
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeOpacity: 1,
        fillOpacity: 1,
      }}
    />
    <path
      d="M1.152 0c4.61 11.525 345.749 981.925 345.749 981.925 56.056-.4 131.219 8.754 205.144 17.288L197.077 0Z"
      style={{
        fill: "#e50914",
        fillOpacity: 1,
        stroke: "none",
        strokeWidth: 1,
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeOpacity: 1,
      }}
    />
  </svg>
);
export default Netflix;
