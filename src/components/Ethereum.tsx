import * as React from "react";
import type { SVGProps } from "react";
const Ethereum = (props: SVGProps<SVGSVGElement>) => (
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
        id="Ethereum__a"
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
        id="Ethereum__d"
        width="123.3%"
        height="114.6%"
        x="-11.7%"
        y="-5.2%"
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
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"
        />
      </filter>
      <linearGradient id="Ethereum__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="Ethereum__b" cx={16} cy={15} r={15} />
      <path
        id="Ethereum__e"
        d="M16.498 20.968 24 16.616l-7.502 10.379L9 16.615zm0-17.968 7.497 12.22-7.497 4.353L9 15.22z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use xlinkHref="#Ethereum__b" fill="#000" filter="url(#Ethereum__a)" />
      <use xlinkHref="#Ethereum__b" fill="#627EEA" />
      <use
        xlinkHref="#Ethereum__b"
        fill="url(#Ethereum__c)"
        style={{
          mixBlendMode: "soft-light",
        }}
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use xlinkHref="#Ethereum__e" fill="#000" filter="url(#Ethereum__d)" />
        <use
          xlinkHref="#Ethereum__e"
          fill="#FFF"
          fillOpacity={0}
          fillRule="evenodd"
        />
      </g>
      <g fill="#FFF" fillRule="nonzero">
        <path fillOpacity={0.602} d="M16.498 3v8.87l7.497 3.35z" />
        <path d="M16.498 3 9 15.22l7.498-3.35z" />
        <path fillOpacity={0.602} d="M16.498 20.968v6.027L24 16.616z" />
        <path d="M16.498 26.995v-6.028L9 16.616z" />
        <path fillOpacity={0.2} d="m16.498 19.573 7.497-4.353-7.497-3.348z" />
        <path fillOpacity={0.602} d="m9 15.22 7.498 4.353v-7.701z" />
      </g>
    </g>
  </svg>
);
export default Ethereum;
