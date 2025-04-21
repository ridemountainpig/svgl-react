import * as React from "react";
import type { SVGProps } from "react";
const Raindropio = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 38 31"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <defs>
      <path
        id="prefix__a"
        d="M9.5.917a9.5 9.5 0 0 1 9.5 9.5v9.5H9.5a9.5 9.5 0 0 1 0-19"
      />
      <path
        id="prefix__c"
        d="M0 19.917v-9.5l.004-.27a9.5 9.5 0 1 1 9.496 9.77z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path
        fill="#0B7ED0"
        d="M28.192 4.7c5.077 4.933 5.077 12.93 0 17.863q-.255.248-.519.479L19 31l-8.673-7.958q-.264-.231-.52-.479c-5.076-4.932-5.076-12.93 0-17.863 5.077-4.933 13.309-4.933 18.385 0"
      />
      <g transform="translate(0 11.083)">
        <mask id="prefix__b" fill="#fff">
          <use xlinkHref="#prefix__a" />
        </mask>
        <use xlinkHref="#prefix__a" fill="#2CD4ED" />
        <path
          fill="#0DB4E2"
          d="M28.192-6.384c5.077 4.933 5.077 12.931 0 17.864q-.255.247-.519.478L19 19.917l-8.673-7.959q-.264-.23-.52-.478c-5.076-4.933-5.076-12.93 0-17.864 5.077-4.933 13.309-4.933 18.385 0"
          mask="url(#prefix__b)"
        />
      </g>
      <g transform="translate(19 11.083)">
        <mask id="prefix__d" fill="#fff">
          <use xlinkHref="#prefix__c" />
        </mask>
        <use xlinkHref="#prefix__c" fill="#3169FF" />
        <path
          fill="#3153FF"
          d="M9.192-6.384c5.077 4.933 5.077 12.931 0 17.864q-.255.247-.519.478L0 19.917l-8.673-7.959q-.264-.23-.52-.478c-5.076-4.933-5.076-12.93 0-17.864 5.077-4.933 13.309-4.933 18.385 0"
          mask="url(#prefix__d)"
        />
      </g>
    </g>
  </svg>
);
export default Raindropio;
export const RaindropioUrl = "https://raindrop.io/";
