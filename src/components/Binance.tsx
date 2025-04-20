import * as React from "react";
import type { SVGProps } from "react";
const Binance = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 201 201"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path
      fill="#000"
      d="M100.517 200.483c55.228 0 100-44.771 100-100s-44.772-100-100-100-100 44.772-100 100 44.771 100 100 100"
    />
    <path
      fill="#F3BA2F"
      fillRule="evenodd"
      d="m126.452 111.118 15.085 15.041-41.006 40.962-40.962-40.962 15.084-15.041 25.878 25.877zm-25.921-25.921 15.301 15.301-15.301 15.301-15.258-15.258v-.043l2.688-2.688 1.3-1.3zm-51.582.216 15.085 15.085-15.085 15.041-15.085-15.085zm103.164 0 15.085 15.085-15.085 15.041-15.084-15.085zm-51.582-51.582 40.962 40.962-15.084 15.085-25.878-25.921-25.878 25.878L59.57 74.793z"
      clipRule="evenodd"
    />
  </svg>
);
export default Binance;
export const BinanceUrl = "https://binance.com/";
