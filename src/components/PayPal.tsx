import * as React from "react";
import type { SVGProps } from "react";
const PayPal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="7.056 3 37.351 45"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <g xmlns="http://www.w3.org/2000/svg" clipPath="url(#prefix__a)">
      <path
        fill="#002991"
        d="M38.914 13.35c0 5.574-5.144 12.15-12.927 12.15H18.49l-.368 2.322L16.373 39H7.056l5.605-36h15.095c5.083 0 9.082 2.833 10.555 6.77a9.7 9.7 0 0 1 .603 3.58"
      />
      <path
        fill="#60CDFF"
        d="M44.284 23.7A12.894 12.894 0 0 1 31.53 34.5h-5.206L24.157 48H14.89l1.483-9 1.75-11.178.367-2.322h7.497c7.773 0 12.927-6.576 12.927-12.15 3.825 1.974 6.055 5.963 5.37 10.35"
      />
      <path
        fill="#008CFF"
        d="M38.914 13.35C37.31 12.511 35.365 12 33.248 12h-12.64L18.49 25.5h7.497c7.773 0 12.927-6.576 12.927-12.15"
      />
    </g>
  </svg>
);
export default PayPal;
export const PayPalUrl = "https://paypal.com";
