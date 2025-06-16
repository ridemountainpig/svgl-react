import * as React from "react";
import type { SVGProps } from "react";
const AffinityPhoto = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    fillRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit={2}
    clipRule="evenodd"
    viewBox="0 0 1024 1024"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path
      fill="#4e3188"
      d="M1023.994 100c0-55.192-44.807-100-99.999-100H100.002C44.81 0 .002 44.808.002 100v824c0 55.192 44.808 100 100 100h823.993c55.192 0 100-44.808 100-100z"
    />
    <path
      fill="url(#AffinityPhoto__a)"
      d="M3547 650.087V909c0 21.809-17.49 39.566-39.2 39.992l-264.42-.001-172.64-298.904zm-342.96 298.904h-467.78l234.02-404.714zm-505.34-2.629c-14.15-5.425-24.44-18.652-25.59-34.397l-.11-178.463 190.17-329.251h148.64zm449.05-542.726c12.95.054 25.34 7.661 32.03 18.935.07.114.2.344.2.344l39.3 68.052.34.564c6.42 11.234 6.67 25.389.25 36.827-13.17 23.042-26.55 45.973-39.83 68.96-6.52 11.179-18.86 18.473-31.98 18.636-25.03.105-75.22.047-75.29.047-12.95-.054-25.54-6.959-32.24-18.233-.15-.244-.43-.743-.43-.743s-39.32-68.059-39.4-68.217c-6.43-11.234-6.42-25.747 0-37.185.09-.168.29-.504.29-.504s26.31-45.638 39.48-68.457c6.52-11.179 18.89-18.87 32-19.034.22-.001.66-.011.66-.011l74.17.019zm372.14-326.51-311.25 538.875H3547V115c0-17.566-11.35-32.503-27.11-37.874M3053.34 75h428.43l-231.7 401.157-214.21-370.881zm96.18 295.191h-266.68l133.34-230.855z"
      transform="translate(-2597.98)"
    />
    <defs>
      <radialGradient
        id="AffinityPhoto__a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="translate(3341.03 -89.259)scale(1038.25)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f9a6ff" />
        <stop offset={1} stopColor="#ea73ff" />
      </radialGradient>
    </defs>
  </svg>
);
export default AffinityPhoto;
