import * as React from "react";
import type { SVGProps } from "react";
const XRP = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 32 32"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <defs>
      <linearGradient id="XRP__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <filter
        id="XRP__a"
        width="111.7%"
        height="111.7%"
        x="-5.8%"
        y="-4.2%"
        filterUnits="objectBoundingBox"
      >
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
          stdDeviation={0.5}
        />
        <feComposite
          in="shadowBlurOuter1"
          in2="SourceAlpha"
          operator="out"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          in="shadowBlurOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"
        />
      </filter>
      <circle id="XRP__b" cx={15} cy={15} r={15} />
    </defs>
    <g fill="none" fillRule="nonzero">
      <g transform="translate(1)">
        <use xlinkHref="#XRP__b" fill="#000" filter="url(#XRP__a)" />
        <use xlinkHref="#XRP__b" fill="#23292F" fillRule="evenodd" />
        <use
          xlinkHref="#XRP__b"
          fill="url(#XRP__c)"
          fillRule="evenodd"
          style={{
            mixBlendMode: "soft-light",
          }}
        />
        <circle
          cx={15}
          cy={15}
          r={14.5}
          stroke="#000"
          strokeLinejoin="square"
          strokeOpacity={0.097}
        />
      </g>
      <g fill="#FFF">
        <path d="M22.363 8h2.602l-5.414 5.361a5.06 5.06 0 0 1-7.102 0L7.032 8h2.605l4.113 4.071a3.2 3.2 0 0 0 4.496 0zM9.605 22.906H7l5.45-5.393a5.06 5.06 0 0 1 7.1 0L25 22.906h-2.605L18.25 18.8a3.2 3.2 0 0 0-4.496 0z" />
      </g>
    </g>
  </svg>
);
export default XRP;
