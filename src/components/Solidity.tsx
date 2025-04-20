import * as React from "react";
import type { SVGProps } from "react";
const Solidity = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 1300 1300"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path
      d="M773.772 253.308 643.068 485.61H381.842l130.614-232.302z"
      opacity={0.45}
    />
    <path d="M643.068 485.61h261.318L773.772 253.308H512.456z" opacity={0.6} />
    <path
      d="M512.456 717.822 643.068 485.61 512.456 253.308 381.842 485.61z"
      opacity={0.8}
    />
    <path
      d="m513.721 1066.275 130.704-232.303h261.318l-130.705 232.303z"
      opacity={0.45}
    />
    <path d="M644.424 833.973H383.107l130.613 232.303h261.317z" opacity={0.6} />
    <path
      d="M775.038 601.761 644.424 833.973l130.614 232.303 130.704-232.303z"
      opacity={0.8}
    />
  </svg>
);
export default Solidity;
export const SolidityUrl = "https://soliditylang.org/";
