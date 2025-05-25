import * as React from "react";
import type { SVGProps } from "react";
const Dogecoin = (props: SVGProps<SVGSVGElement>) => (
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
      <filter
        id="prefix__a"
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
      <filter
        id="prefix__d"
        width="123.3%"
        height="121.9%"
        x="-11.7%"
        y="-7.8%"
        filterUnits="objectBoundingBox"
      >
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
          stdDeviation={0.5}
        />
        <feColorMatrix
          in="shadowBlurOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"
        />
      </filter>
      <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="prefix__b" cx={16} cy={15} r={15} />
      <path
        id="prefix__e"
        d="M13.248 13.61h4.314v2.286h-4.314v4.818h2.721q1.615 0 2.644-.437 1.029-.436 1.615-1.21.585-.773.796-1.815.21-1.042.21-2.252t-.21-2.252a4.4 4.4 0 0 0-.796-1.815q-.587-.774-1.615-1.21-1.029-.437-2.644-.437h-2.721zm-2.766 2.286H9v-2.285h1.482V7h6.549q1.815 0 3.142.627 1.327.628 2.168 1.715.84 1.086 1.25 2.543T24 15a11.5 11.5 0 0 1-.41 3.115q-.408 1.456-1.25 2.543-.84 1.087-2.167 1.715Q18.845 23 17.03 23h-6.549z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use xlinkHref="#prefix__b" fill="#000" filter="url(#prefix__a)" />
      <use xlinkHref="#prefix__b" fill="#C3A634" />
      <use
        xlinkHref="#prefix__b"
        fill="url(#prefix__c)"
        style={{
          mixBlendMode: "soft-light",
        }}
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use xlinkHref="#prefix__e" fill="#000" filter="url(#prefix__d)" />
      <use xlinkHref="#prefix__e" fill="#FFF" />
    </g>
  </svg>
);
export default Dogecoin;
