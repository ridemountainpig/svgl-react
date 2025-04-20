import * as React from "react";
import type { SVGProps } from "react";
const Solana = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 36 36"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <defs>
      <linearGradient
        id="prefix__a"
        x1="90.737%"
        x2="35.509%"
        y1="34.776%"
        y2="55.415%"
      >
        <stop offset="0%" stopColor="#00FFA3" />
        <stop offset="100%" stopColor="#DC1FFF" />
      </linearGradient>
      <linearGradient
        id="prefix__b"
        x1="66.588%"
        x2="11.36%"
        y1="43.8%"
        y2="64.439%"
      >
        <stop offset="0%" stopColor="#00FFA3" />
        <stop offset="100%" stopColor="#DC1FFF" />
      </linearGradient>
      <linearGradient
        id="prefix__c"
        x1="78.586%"
        x2="23.358%"
        y1="39.317%"
        y2="59.956%"
      >
        <stop offset="0%" stopColor="#00FFA3" />
        <stop offset="100%" stopColor="#DC1FFF" />
      </linearGradient>
    </defs>
    <g fill="none">
      <circle cx={18} cy={18} r={18} fill="#181E33" />
      <path
        fill="url(#prefix__a)"
        d="M3.9 14.355a.79.79 0 0 1 .554-.23h19.153c.35 0 .525.423.277.67l-3.783 3.784a.79.79 0 0 1-.555.23H.393a.392.392 0 0 1-.277-.67z"
        transform="translate(6 9)"
      />
      <path
        fill="url(#prefix__b)"
        d="M3.9.23A.8.8 0 0 1 4.454 0h19.153c.35 0 .525.422.277.67l-3.783 3.783a.79.79 0 0 1-.555.23H.393a.392.392 0 0 1-.277-.67z"
        transform="translate(6 9)"
      />
      <path
        fill="url(#prefix__c)"
        d="M20.1 7.247a.79.79 0 0 0-.554-.23H.393a.392.392 0 0 0-.277.67l3.783 3.784c.145.145.344.23.555.23h19.153c.35 0 .525-.423.277-.67z"
        transform="translate(6 9)"
      />
    </g>
  </svg>
);
export default Solana;
export const SolanaUrl = "https://solana.com/";
