import * as React from "react";
import type { SVGProps } from "react";
const FlowLauncher = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 382.6 382.5"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <defs>
      <linearGradient
        id="FlowLauncher__a"
        x2={249.9}
        y1={191.3}
        y2={191.3}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#1b9de2" />
        <stop offset={0.2} stopColor="#1595df" />
        <stop offset={0.7} stopColor="#0680d7" />
        <stop offset={1} stopColor="#0078d4" />
      </linearGradient>
      <linearGradient
        xlinkHref="#FlowLauncher__a"
        id="FlowLauncher__b"
        x1={697.3}
        x2={809.9}
        y1={499.2}
        y2={499.2}
        gradientTransform="rotate(49.2 809.6 -269.1)"
      />
      <linearGradient
        id="FlowLauncher__c"
        x1={143.6}
        x2={393.5}
        y1={249.8}
        y2={249.8}
        gradientTransform="rotate(180 263.1 220.5)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#0c59a4" />
        <stop offset={1} stopColor="#114a8b" />
      </linearGradient>
    </defs>
    <path
      fill="url(#FlowLauncher__a)"
      d="M117 382.5H0v-189C0 90.7 84 0 186.9 0h63v120.4h-54.6c-46.8 0-78 31.2-78 78l-.1 184.1z"
    />
    <path
      fill="url(#FlowLauncher__b)"
      d="m249.9 182.6.2-46.8h-54.7c-39 0-62.4 23.4-62.4 62.4l-.2 47 54.6-.1c39 0 62.5-23.4 62.5-62.5"
    />
    <path
      fill="url(#FlowLauncher__c)"
      d="M265.5 0h117v189c0 102.8-84 193.5-186.8 193.5h-63V262.1h54.6c46.9 0 78.1-31.2 78.1-78z"
    />
  </svg>
);
export default FlowLauncher;
