import * as React from "react";
import type { SVGProps } from "react";
const Dotenv = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path fill="#09090B" d="M0 0h24v24H0z" />
    <path
      fill="#ECD53F"
      d="M24 0v24H0V0zM10.933 15.89H6.84v5.52h4.198v-.93H7.955v-1.503h2.77v-.93h-2.77v-1.224h2.978zm2.146 0h-1.084v5.52h1.035v-3.6l2.226 3.6h1.118v-5.52h-1.036v3.686zm5.117 0h-1.208l1.973 5.52h1.19l1.976-5.52h-1.182l-1.352 4.085zM5.4 19.68H3.72v1.68H5.4z"
    />
  </svg>
);
export default Dotenv;
