import * as React from "react";
import type { SVGProps } from "react";
const Lovable = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <mask
      id="prefix__b"
      width={121}
      height={122}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path
        fill="url(#prefix__a)"
        fillRule="evenodd"
        d="M36.069 0c19.92 0 36.068 16.155 36.068 36.084v13.713h12.004c19.92 0 36.069 16.156 36.069 36.084s-16.149 36.083-36.069 36.083H0v-85.88C0 16.155 16.148 0 36.069 0"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#prefix__b)">
      <g filter="url(#prefix__c)">
        <ellipse
          cx={52.738}
          cy={65.101}
          fill="#4B73FF"
          rx={81.373}
          ry={81.192}
        />
      </g>
      <g filter="url(#prefix__d)">
        <ellipse
          cx={61.673}
          cy={20.547}
          fill="#FF66F4"
          rx={104.216}
          ry={81.192}
        />
      </g>
      <g filter="url(#prefix__e)">
        <ellipse
          cx={78.666}
          cy={5.268}
          fill="#FF0105"
          rx={81.373}
          ry={71.304}
        />
      </g>
      <g filter="url(#prefix__f)">
        <ellipse
          cx={63.121}
          cy={20.527}
          fill="#FE7B02"
          rx={48.937}
          ry={48.829}
        />
      </g>
    </g>
    <defs>
      <filter
        id="prefix__c"
        width={235.52}
        height={235.159}
        x={-65.022}
        y={-52.478}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_572_319"
          stdDeviation={18.194}
        />
      </filter>
      <filter
        id="prefix__d"
        width={281.208}
        height={235.159}
        x={-78.93}
        y={-97.032}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_572_319"
          stdDeviation={18.194}
        />
      </filter>
      <filter
        id="prefix__e"
        width={235.52}
        height={215.383}
        x={-39.094}
        y={-102.423}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_572_319"
          stdDeviation={18.194}
        />
      </filter>
      <filter
        id="prefix__f"
        width={170.649}
        height={170.432}
        x={-22.204}
        y={-64.688}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_572_319"
          stdDeviation={18.194}
        />
      </filter>
      <linearGradient
        id="prefix__a"
        x1={40.453}
        x2={76.933}
        y1={21.433}
        y2={121.971}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.025} stopColor="#FF8E63" />
        <stop offset={0.56} stopColor="#FF7EB0" />
        <stop offset={0.95} stopColor="#4B73FF" />
      </linearGradient>
    </defs>
  </svg>
);
export default Lovable;
