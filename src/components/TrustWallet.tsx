import * as React from "react";
import type { SVGProps } from "react";
const TrustWallet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 444 501"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path
      fill="#0500FF"
      d="M.71 72.41 222.16.11v500.52C63.98 433.89.71 305.98.71 233.69z"
    />
    <path
      fill="url(#prefix__a)"
      d="M443.62 72.41 222.17.11v500.52c158.18-66.74 221.45-194.65 221.45-266.94z"
    />
    <defs>
      <linearGradient
        id="prefix__a"
        x1={385.26}
        x2={216.61}
        y1={-34.78}
        y2={493.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.02} stopColor="#00F" />
        <stop offset={0.08} stopColor="#0094FF" />
        <stop offset={0.16} stopColor="#48FF91" />
        <stop offset={0.42} stopColor="#0094FF" />
        <stop offset={0.68} stopColor="#0038FF" />
        <stop offset={0.9} stopColor="#0500FF" />
      </linearGradient>
    </defs>
  </svg>
);
export default TrustWallet;
export const TrustWalletUrl = "https://trustwallet.com/";
