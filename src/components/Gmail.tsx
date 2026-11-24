import * as React from "react";
import type { SVGProps } from "react";
const Gmail = (props: SVGProps<SVGSVGElement>) => (
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
      fill="url(#Gmail__a)"
      d="M146 44h38v110c0 6.627-5.373 12-12 12h-20a6 6 0 0 1-6-6z"
    />
    <path
      fill="#fc413d"
      d="M46 44H8v110c0 6.627 5.373 12 12 12h20a6 6 0 0 0 6-6z"
    />
    <path
      fill="url(#Gmail__b)"
      d="M39.226 30.456c-8.033-6.752-20.018-5.714-26.77 2.319-6.752 8.032-5.714 20.017 2.319 26.77l76.078 63.949a8 8 0 0 0 10.295 0l76.078-63.95c8.032-6.752 9.07-18.737 2.318-26.77-6.752-8.032-18.737-9.07-26.769-2.318L96 78.18z"
    />
    <defs>
      <linearGradient
        id="Gmail__a"
        x1={165}
        x2={165}
        y1={44}
        y2={166}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#60d673" />
        <stop offset={0.17} stopColor="#42c868" />
        <stop offset={0.39} stopColor="#0ebc5f" />
        <stop offset={0.62} stopColor="#00a9bb" />
        <stop offset={0.86} stopColor="#3c90ff" />
        <stop offset={1} stopColor="#3186ff" />
      </linearGradient>
      <linearGradient
        id="Gmail__b"
        x1={8}
        x2={184}
        y1={46.13}
        y2={46.13}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.08} stopColor="#ff63a0" />
        <stop offset={0.3} stopColor="#fc413d" />
        <stop offset={0.5} stopColor="#fc413d" />
        <stop offset={0.65} stopColor="#fc413d" />
        <stop offset={0.72} stopColor="#fc5c30" />
        <stop offset={0.86} stopColor="#feb10c" />
        <stop offset={0.91} stopColor="#fec700" />
        <stop offset={0.96} stopColor="#ffdb0f" />
      </linearGradient>
    </defs>
  </svg>
);
export default Gmail;
