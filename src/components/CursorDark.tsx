import * as React from "react";
import type { SVGProps } from "react";
const CursorDark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{
      flex: "none",
      lineHeight: 1,
    }}
    viewBox="0 0 24 24"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path fill="url(#prefix__a)" d="m11.925 24 10.425-6-10.425-6L1.5 18z" />
    <path fill="url(#prefix__b)" d="M22.35 18V6L11.925 0v12z" />
    <path fill="url(#prefix__c)" d="M11.925 0 1.5 6v12l10.425-6z" />
    <path fill="#555" d="M22.35 6 11.925 24V12z" />
    <path fill="#ffff" d="m22.35 6-10.425 6L1.5 6z" />
    <defs>
      <linearGradient
        id="prefix__a"
        x1={11.925}
        x2={11.925}
        y1={12}
        y2={24}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.16} stopColor="#ffff" stopOpacity={0.39} />
        <stop offset={0.658} stopColor="#ffff" stopOpacity={0.8} />
      </linearGradient>
      <linearGradient
        id="prefix__b"
        x1={22.35}
        x2={11.925}
        y1={6.037}
        y2={12.15}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.182} stopColor="#ffff" stopOpacity={0.31} />
        <stop offset={0.715} stopColor="#ffff" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="prefix__c"
        x1={11.925}
        x2={1.5}
        y1={0}
        y2={18}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#ffff" stopOpacity={0.6} />
        <stop offset={0.667} stopColor="#ffff" stopOpacity={0.22} />
      </linearGradient>
    </defs>
  </svg>
);
export default CursorDark;
