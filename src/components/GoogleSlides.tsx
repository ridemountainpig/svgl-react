import * as React from "react";
import type { SVGProps } from "react";
const GoogleSlides = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 192 192"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path
      fill="url(#GoogleSlides__a)"
      d="M12.591 63.318c-2.493-15.262 7.858-29.655 23.12-32.148l96.724-15.8c15.262-2.492 29.655 7.859 32.148 23.12l14.732 90.189c2.493 15.262-7.858 29.655-23.12 32.148l-96.724 15.8c-15.262 2.493-29.655-7.858-32.148-23.12z"
    />
    <path
      fill="url(#GoogleSlides__b)"
      d="M12 61.6c0-8.943 0-13.415 1.405-16.962a20 20 0 0 1 11.233-11.233C28.185 32 32.656 32 41.6 32h108.8c8.943 0 13.415 0 16.962 1.404a20 20 0 0 1 11.234 11.234C180 48.185 180 52.657 180 61.6v68.8c0 8.943 0 13.415-1.404 16.962a20 20 0 0 1-11.234 11.234C163.815 160 159.343 160 150.4 160H41.6c-8.943 0-13.415 0-16.963-1.404a20 20 0 0 1-11.232-11.234C12 143.815 12 139.343 12 130.4z"
    />
    <mask
      id="GoogleSlides__d"
      width={168}
      height={128}
      x={12}
      y={32}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path
        fill="#fec700"
        d="M12 61.6c0-8.943 0-13.415 1.405-16.962a20 20 0 0 1 11.233-11.233C28.185 32 32.656 32 41.6 32h108.8c8.943 0 13.415 0 16.962 1.404a20 20 0 0 1 11.234 11.234C180 48.185 180 52.657 180 61.6v68.8c0 8.943 0 13.415-1.404 16.962a20 20 0 0 1-11.234 11.234C163.815 160 159.343 160 150.4 160H41.6c-8.943 0-13.415 0-16.963-1.404a20 20 0 0 1-11.232-11.234C12 143.815 12 139.343 12 130.4z"
      />
    </mask>
    <g filter="url(#GoogleSlides__c)" mask="url(#GoogleSlides__d)">
      <path
        fill="#ffbe00"
        d="m33.74 191.516 144.396-21.58L153.304 3.781 8.907 25.361z"
      />
      <path
        fill="url(#GoogleSlides__e)"
        d="m33.74 191.516 144.396-21.58L153.304 3.781 8.907 25.361z"
      />
    </g>
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M148 58a6 6 0 0 1 6 6v64a6 6 0 0 1-6 6H44l-.309-.008A6 6 0 0 1 38 128V64a6 6 0 0 1 5.691-5.992L44 58zm-98 64h92V70H50z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="GoogleSlides__a"
        x1={84.07}
        x2={157.2}
        y1={23.27}
        y2={160.82}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.2} stopColor="#ffdb0f" />
        <stop offset={0.67} stopColor="#ffbe00" />
        <stop offset={0.91} stopColor="#ffa8e3" />
      </linearGradient>
      <linearGradient
        id="GoogleSlides__b"
        x1={96}
        x2={96}
        y1={32}
        y2={160}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#ffbe00" />
        <stop offset={1} stopColor="#fec700" />
      </linearGradient>
      <linearGradient
        id="GoogleSlides__e"
        x1={108.52}
        x2={83.96}
        y1={168.16}
        y2={25.27}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.07} stopColor="#fff549" />
        <stop offset={0.78} stopColor="#ffbe00" stopOpacity={0} />
      </linearGradient>
      <filter
        id="GoogleSlides__c"
        width={193.23}
        height={211.73}
        x={-3.09}
        y={-8.22}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur result="blur" stdDeviation={6} />
      </filter>
    </defs>
  </svg>
);
export default GoogleSlides;
