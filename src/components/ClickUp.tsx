import * as React from "react";
import type { SVGProps } from "react";
const ClickUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 64 64"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path
      fill="url(#ClickUp__a)"
      fillRule="evenodd"
      d="M6.438 50.21c-.626-.764-.49-1.889.281-2.507l7.298-5.86c.636-.51 1.567-.395 2.086.235 4.957 6.018 10.217 8.804 16.039 8.804 5.782 0 10.898-2.747 15.638-8.698.509-.639 1.437-.77 2.083-.271l7.397 5.725c.782.604.939 1.726.326 2.5-7.008 8.846-15.589 13.507-25.444 13.507-9.826 0-18.483-4.632-25.704-13.436"
      clipRule="evenodd"
    />
    <path
      fill="url(#ClickUp__b)"
      fillRule="evenodd"
      d="M32.495 17.18a.727.727 0 0 0-.964 0L15.663 31.212a1.455 1.455 0 0 1-2.064-.139l-6.19-7.16a1.455 1.455 0 0 1 .14-2.044L31.054 1.2a1.455 1.455 0 0 1 1.921 0l23.508 20.684c.6.527.662 1.44.139 2.044l-6.205 7.158a1.455 1.455 0 0 1-2.063.136z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="ClickUp__a"
        x1={5.333}
        x2={58.665}
        y1={32.162}
        y2={32.162}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.226} stopColor="#6647F0" />
        <stop offset={0.793} stopColor="#0091FF" />
      </linearGradient>
      <linearGradient
        id="ClickUp__b"
        x1={5.333}
        x2={58.665}
        y1={31.645}
        y2={31.645}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF02F0" />
        <stop offset={0.779} stopColor="#F76808" />
      </linearGradient>
    </defs>
  </svg>
);
export default ClickUp;
