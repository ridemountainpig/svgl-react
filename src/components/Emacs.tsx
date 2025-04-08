import * as React from "react";
import type { SVGProps } from "react";
const Emacs = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <g fill="none">
      <rect width={256} height={256} fill="url(#prefix__a)" rx={60} />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M86.53 227.747s11.67.822 26.684-.496c6.08-.533 29.165-2.791 46.424-6.561 0 0 21.043-4.484 32.301-8.616 11.779-4.322 18.189-7.991 21.074-13.19-.126-1.065.888-4.842-4.544-7.111-13.888-5.801-29.994-4.752-61.866-5.425-35.343-1.209-47.101-7.1-53.364-11.845-6.006-4.813-2.986-18.13 22.748-29.86 12.963-6.247 63.78-17.774 63.78-17.774-17.114-8.424-49.027-23.233-55.587-26.431-5.753-2.804-14.96-7.028-16.956-12.137-2.263-4.905 5.344-9.13 9.593-10.34 13.684-3.931 33.003-6.374 50.585-6.648 8.838-.138 10.272-.704 10.272-.704 12.195-2.015 20.222-10.323 16.878-23.48-3.003-13.431-18.839-21.323-33.888-18.59-14.171 2.572-48.328 12.452-48.328 12.452 42.22-.364 49.287.338 52.443 4.732 1.864 2.595-.847 6.153-12.107 7.985-12.259 1.993-37.741 4.394-37.741 4.394-24.445 1.446-41.665 1.543-46.83 12.431-3.373 7.114 3.599 13.403 6.654 17.34 12.914 14.301 31.567 22.014 43.573 27.694 4.518 2.137 17.773 6.173 17.773 6.173-38.951-2.134-67.05 9.777-83.531 23.49-18.642 17.171-10.396 37.637 27.796 50.239 22.558 7.443 33.745 10.944 67.393 7.927 19.819-1.064 22.943-.431 23.141 1.188.278 2.28-22.014 7.944-28.099 9.692-15.483 4.447-56.068 13.427-56.271 13.471"
        clipRule="evenodd"
      />
      <defs>
        <linearGradient
          id="prefix__a"
          x1={0}
          x2={256}
          y1={0}
          y2={256}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8381C5" />
          <stop offset={0.615} stopColor="#7E55B3" />
          <stop offset={1} stopColor="#A52ECB" />
        </linearGradient>
      </defs>
    </g>
  </svg>
);
export default Emacs;
