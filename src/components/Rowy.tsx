import * as React from "react";
import type { SVGProps } from "react";
const Rowy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 26 26"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <g clipPath="url(#prefix__a)">
      <g clipPath="url(#prefix__b)">
        <path fill="#fff" d="M0 0h26v26H0z" />
        <path fill="url(#prefix__c)" d="M0 0h26v26H0z" />
        <path fill="url(#prefix__d)" fillOpacity={0.8} d="M0 0h26v26H0z" />
        <g
          style={{
            mixBlendMode: "overlay",
          }}
        >
          <path fill="url(#prefix__e)" d="M0 0h26v26H0z" />
          <path fill="url(#prefix__f)" d="M0 0h26v26H0z" />
        </g>
      </g>
      <path
        fill="url(#prefix__g)"
        fillRule="evenodd"
        d="M11.5 18.5v-3h-6v3a3 3 0 1 0 6 0m-5-2h4v2l-.005.15A2 2 0 0 1 8.5 20.5l-.15-.006A2 2 0 0 1 6.5 18.5z"
        clipRule="evenodd"
      />
      <path
        fill="#4200FF"
        fillRule="evenodd"
        d="M5.5 8.5v3h6v-3a3 3 0 1 0-6 0m5 2h-4v-2l.005-.15A2 2 0 0 1 8.5 6.5l.15.005A2 2 0 0 1 10.5 8.5z"
        clipRule="evenodd"
      />
      <path
        fill="url(#prefix__h)"
        fillRule="evenodd"
        d="M11.5 16.5v-6h-6v6zm-5-5h4v4h-4z"
        clipRule="evenodd"
      />
      <path
        fill="url(#prefix__i)"
        fillRule="evenodd"
        d="M18.5 5.5h-3v6h3a3 3 0 1 0 0-6m-1.999 5v-4H18.5l.15.005A2 2 0 0 1 20.5 8.5l-.006.15A2 2 0 0 1 18.5 10.5z"
        clipRule="evenodd"
      />
      <path
        fill="url(#prefix__j)"
        fillRule="evenodd"
        d="M10.5 8.5v3h6v-6h-3a3 3 0 0 0-3 3m3-2h2v4h-4v-2l.005-.15A2 2 0 0 1 13.5 6.5"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <linearGradient
        id="prefix__c"
        x1={13}
        x2={13}
        y1={0}
        y2={26}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" stopOpacity={0} />
        <stop offset={1} stopColor="#fff" />
      </linearGradient>
      <linearGradient
        id="prefix__g"
        x1={6}
        x2={6}
        y1={16.499}
        y2={21.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F0A" />
        <stop offset={1} stopColor="#FA0" />
      </linearGradient>
      <linearGradient
        id="prefix__h"
        x1={5.988}
        x2={5.988}
        y1={11.477}
        y2={16.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4200FF" />
        <stop offset={1} stopColor="#F0A" />
      </linearGradient>
      <linearGradient
        id="prefix__i"
        x1={16.517}
        x2={21.5}
        y1={10.992}
        y2={10.992}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0AF" />
        <stop offset={1} stopColor="#0FA" />
      </linearGradient>
      <linearGradient
        id="prefix__j"
        x1={16.5}
        x2={11.497}
        y1={5.998}
        y2={5.998}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0AF" />
        <stop offset={1} stopColor="#4200FF" />
      </linearGradient>
      <radialGradient
        id="prefix__d"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(-14.60336 -59.1644 66.5347 -16.42255 23.01 32.433)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" stopOpacity={0} />
        <stop offset={1} stopColor="#C6C6C6" />
        <stop offset={1} stopColor="#C6C6C6" />
      </radialGradient>
      <radialGradient
        id="prefix__e"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(-80.599 17.196 10.8)scale(17.6864 18.7096)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FA0" />
        <stop offset={0.49} stopColor="#F0A" />
        <stop offset={1} stopColor="#4200FF" />
      </radialGradient>
      <radialGradient
        id="prefix__f"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(179.35 12.991 1.605)scale(15.2894 48.4386)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.26} stopColor="#0FA" />
        <stop offset={0.49} stopColor="#0AF" />
        <stop offset={1} stopColor="#4200FF" stopOpacity={0} />
      </radialGradient>
      <clipPath id="prefix__a">
        <rect width={26} height={26} fill="#fff" rx={8} />
      </clipPath>
      <clipPath id="prefix__b">
        <path fill="#fff" d="M0 0h26v26H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Rowy;
