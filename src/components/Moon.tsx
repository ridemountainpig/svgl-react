import * as React from "react";
import type { SVGProps } from "react";
const Moon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 256 256"
    width="100%"
    height="100%"
    {...props}
  >
    <defs>
      <radialGradient
        id="Moon__b"
        cx="50%"
        cy="50%"
        r="49.789%"
        fx="50%"
        fy="50%"
      >
        <stop offset="0%" stopColor="#4600D1" />
        <stop offset="49.285%" stopColor="#4600D1" />
        <stop offset="100%" stopColor="#35009F" />
      </radialGradient>
      <radialGradient
        id="Moon__d"
        cx="50%"
        cy="50%"
        r="49.603%"
        fx="50%"
        fy="50%"
      >
        <stop offset="0%" stopColor="#35019E" />
        <stop offset="18.73%" stopColor="#320194" />
        <stop offset="100%" stopColor="#206" />
      </radialGradient>
      <circle id="Moon__a" cx={128} cy={128} r={128} />
    </defs>
    <circle cx={128} cy={128} r={128} fill="#5805FF" />
    <mask id="Moon__c" fill="#fff">
      <use xlinkHref="#Moon__a" />
    </mask>
    <circle
      cx={199.694}
      cy={105.369}
      r={128}
      fill="url(#Moon__b)"
      mask="url(#Moon__c)"
    />
    <circle
      cx={275.372}
      cy={82.376}
      r={128}
      fill="url(#Moon__d)"
      mask="url(#Moon__c)"
    />
  </svg>
);
export default Moon;
