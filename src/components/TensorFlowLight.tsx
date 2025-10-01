import * as React from "react";
import type { SVGProps } from "react";
const TensorFlowLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    id="TensorFlowLight__Artwork"
    viewBox="0 0 266.79 269.02"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <defs>
      <linearGradient
        id="TensorFlowLight__linear-gradient"
        x1={60.08}
        x2={218.39}
        y1={134.33}
        y2={134.33}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#ff6f00" />
        <stop offset={1} stopColor="#ffa800" />
      </linearGradient>
      <linearGradient
        xlinkHref="#TensorFlowLight__linear-gradient"
        id="TensorFlowLight__linear-gradient-2"
        x1={59}
        x2={217.32}
        y1={134.33}
        y2={134.33}
      />
      <clipPath id="TensorFlowLight__clip-path">
        <path
          d="m200.76 95.86-64.47-36.84V210l25.76-14.96v-42.47l19.45 11.25-.11-29.05-19.34-11.05v-16.87l38.8 22.42z"
          className="TensorFlowLight__cls-1"
        />
      </clipPath>
      <clipPath id="TensorFlowLight__clip-path-2">
        <path
          d="m66.03 95.86 64.47-36.84V210l-25.76-14.96v-88.19l-38.8 22.42z"
          className="TensorFlowLight__cls-1"
        />
      </clipPath>
      <style>{".TensorFlowLight__cls-1{fill:none}"}</style>
    </defs>
    <g
      style={{
        clipPath: "url(#TensorFlowLight__clip-path)",
      }}
    >
      <path
        d="M60.08 58.47h158.31v151.72H60.08z"
        style={{
          fill: "url(#TensorFlowLight__linear-gradient)",
        }}
      />
    </g>
    <g
      style={{
        clipPath: "url(#TensorFlowLight__clip-path-2)",
      }}
    >
      <path
        d="M59 58.47h158.31v151.72H59z"
        style={{
          fill: "url(#TensorFlowLight__linear-gradient-2)",
        }}
      />
    </g>
  </svg>
);
export default TensorFlowLight;
