import * as React from "react";
import type { SVGProps } from "react";
const GoogleChat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 192 192"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <rect width={160} height={96} x={16} y={28} fill="#00AF57" rx={48} />
    <path
      fill="#0EBC5F"
      d="M133 48c28.167 0 51 22.834 51 51 0 28.167-22.833 51-51 51H96.624l-34.857 23.064c-3.86 2.544-5.789 3.816-7.372 3.92a6 6 0 0 1-5.612-3.022C48 172.583 48 170.271 48 165.649V148.81C25.121 143.78 8 123.39 8 99c0-28.166 22.834-51 51-51z"
    />
    <mask
      id="GoogleChat__a"
      width={176}
      height={129}
      x={8}
      y={48}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path
        fill="#0EBC5F"
        d="M133 48c28.167 0 51 22.834 51 51 0 28.167-22.833 51-51 51H96.722l-39.428 25.896c-3.99 2.62-9.294-.242-9.294-5.015V148.81C25.121 143.78 8 123.39 8 99c0-28.166 22.834-51 51-51z"
      />
    </mask>
    <g mask="url(#GoogleChat__a)">
      <rect width={160} height={96} x={16} y={28} fill="#0EBC5F" rx={48} />
      <rect
        width={160}
        height={96}
        x={16}
        y={28}
        fill="url(#GoogleChat__b)"
        rx={48}
      />
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth={12}
        d="M62 94s8.84 18 34 18 34-17.182 34-17.182"
      />
    </g>
    <defs>
      <linearGradient
        id="GoogleChat__b"
        x1={96}
        x2={96}
        y1={28}
        y2={124}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.09} stopColor="#94D4FF" />
        <stop offset={0.28} stopColor="#78C9FF" />
        <stop offset={0.88} stopColor="#01AE58" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
export default GoogleChat;
