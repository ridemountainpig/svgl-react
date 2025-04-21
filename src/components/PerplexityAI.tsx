import * as React from "react";
import type { SVGProps } from "react";
const PerplexityAI = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path
      fill="none"
      stroke="#20808d"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M24 4.5v39M13.73 16.573v-9.99L24 16.573m0 14.5L13.73 41.417V27.01L24 16.573m0 0 10.27-9.99v9.99"
    />
    <path
      fill="none"
      stroke="#20808d"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.73 31.396H9.44V16.573h29.12v14.823h-4.29"
    />
    <path
      fill="none"
      stroke="#20808d"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M24 16.573 34.27 27.01v14.407L24 31.073"
    />
  </svg>
);
export default PerplexityAI;
export const PerplexityAIUrl = "https://perplexity.ai/";
