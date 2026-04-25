import * as React from "react";
import type { SVGProps } from "react";
const NanoLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 1080 1080"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <circle cx={540} cy={540} r={540} fill="#209CE9" />
    <path
      fill="#fff"
      d="M740.509 877H793L654.016 658.179h90.923v-38.394H629.627l-48.769-76.78h164.064v-38.386H581.676L777.649 202h-50.204L542.156 486.267 360.707 202h-53.512l193.314 302.619H336.791v38.386h165.406l-49.47 76.78H336.791v38.394h91.193L287 877h52.061l142.511-218.821h118.569zM506.568 619.785l34.736-53.326 34.212 53.326z"
    />
  </svg>
);
export default NanoLight;
