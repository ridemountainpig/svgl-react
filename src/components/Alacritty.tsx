import * as React from "react";
import type { SVGProps } from "react";
const Alacritty = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    style={{
      clipRule: "evenodd",
      fillRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 1.41420996,
      enableBackground: "new",
    }}
    viewBox="0 0 64 64"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <defs>
      <linearGradient
        id="prefix__a"
        x1={0.025}
        x2={1}
        y1={0.079}
        y2={0}
        gradientTransform="rotate(90 177.831 370.053)scale(473.895)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#ec2802",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#fcb200",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        xlinkHref="#prefix__a"
        id="prefix__b"
        x1={19.063}
        x2={19}
        y1={0}
        y2={43.25}
        gradientTransform="matrix(1.40188 0 0 1.34821 21.364 -32.96)"
        gradientUnits="userSpaceOnUse"
      />
      <clipPath id="prefix__c" clipPathUnits="userSpaceOnUse">
        <path
          d="M14.813 26.75 19 15.945l4.187 10.805L19 43.25Z"
          style={{
            fill: "none",
            stroke: "#000",
            strokeWidth: 0.03779528,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 1.41420996,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
        />
      </clipPath>
      <filter
        id="prefix__d"
        width={1.192}
        height={1.148}
        x={-0.096}
        y={-0.074}
        style={{
          colorInterpolationFilters: "sRGB",
        }}
      >
        <feGaussianBlur stdDeviation={1.002} />
      </filter>
    </defs>
    <g
      style={{
        display: "inline",
      }}
    >
      <path
        d="m43.566 2.972-1.39 3.37C45.912 17.854 45.912 17.854 48 27.896c2.087-10.042 2.087-10.042 5.825-21.552l-1.391-3.37L48-7.772Z"
        style={{
          clipRule: "evenodd",
          fill: "#069efe",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "none",
          strokeWidth: 0.26960364,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 1.41420996,
          strokeDasharray: "none",
          strokeOpacity: 0.4330357,
          paintOrder: "stroke markers fill",
        }}
        transform="translate(-16 35.82)"
      />
      <path
        d="M43.093-32.96h9.814l21.729 53.928h-9.112L48-20.221 30.476 20.968h-9.112z"
        style={{
          clipRule: "evenodd",
          fill: "url(#prefix__b)",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "url(#prefix__linearGradient10962)",
          strokeWidth: 0,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 1.41420996,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(-16 35.82)"
      />
      <path
        d="M19 32.395 31.5 0 6.5.133Z"
        clipPath="url(#prefix__c)"
        style={{
          clipRule: "evenodd",
          display: "inline",
          fill: "#fff",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "none",
          strokeWidth: 0,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 0,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          paintOrder: "markers fill stroke",
          filter: "url(#prefix__d)",
        }}
        transform="matrix(1.3912 0 0 1.33794 5.567 6.717)"
      />
    </g>
  </svg>
);
export default Alacritty;
export const AlacrittyUrl = "https://alacritty.org";
