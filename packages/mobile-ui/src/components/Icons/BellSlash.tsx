import * as React from 'react';
import { Svg, SvgProps, Defs, Path, G, Mask, Use } from 'react-native-svg';

const SvgBellSlash = (props: SvgProps) => (
  <Svg width="1em" height="1em" viewBox="0 0 1024 1024" {...props}>
    <Defs>
      <Path
        d="M521 969.833c0-6.11-3.056-9.166-9.167-9.166-22.534 0-41.918-8.117-58.15-24.35-16.233-16.232-24.35-35.616-24.35-58.15 0-6.111-3.055-9.167-9.166-9.167-6.111 0-9.167 3.056-9.167 9.167 0 27.882 9.835 51.658 29.505 71.328 19.67 19.67 43.446 29.505 71.328 29.505 6.111 0 9.167-3.056 9.167-9.167zM98 842h828C813.052 714.917 756.578 538.694 756.578 313.333c0-21.604-5.095-43.843-15.286-66.718-10.19-22.875-24.84-44.691-43.947-65.448-19.108-20.757-44.903-37.808-77.387-51.151C587.475 116.672 551.49 110 512 110c-39.49 0-75.475 6.672-107.958 20.016-32.484 13.343-58.279 30.394-77.387 51.15-19.107 20.758-33.757 42.574-43.947 65.449-10.191 22.875-15.286 45.114-15.286 66.718C267.422 538.694 210.948 714.917 98 842zm812.903 35.714L1023.99 990l-37.614 34-147.558-146.286H658.462c0 40.381-14.303 74.857-42.91 103.429C586.948 1009.714 552.43 1024 512 1024c-40.43 0-74.947-14.286-103.553-42.857-28.606-28.572-42.909-63.048-42.909-103.429H109.231c-19.834 0-36.997-7.238-51.49-21.714-14.494-14.476 109.94-228.19 121.574-260.571 11.633-32.381 21.168-71.62 28.606-117.715 7.437-46.095 11.156-95.619 11.156-148.571 0-19.828 2.616-39.176 7.849-58.044L.01 46.14 38.012 11l210.262 208.774c10.007-17.826 22.588-35.179 37.74-52.06C330.64 118 389.186 87.81 461.654 77.143c-3.051-7.238-4.577-14.667-4.577-22.286 0-15.238 5.34-28.19 16.02-38.857C483.775 5.333 496.743 0 512 0s28.224 5.333 38.904 16c10.68 10.667 16.02 23.619 16.02 38.857 0 7.62-1.527 15.048-4.578 22.286C634.814 87.81 693.361 118 737.986 167.714c44.625 49.715 66.937 103.524 66.937 161.429 0 52.952 3.719 102.476 11.156 148.571 7.438 46.096 16.973 85.334 28.606 117.715 11.633 32.38 146.859 282.285 127.026 282.285h-60.808zm0 0l-662.63-657.94c-9.372 16.694-16.488 33.803-21.347 51.325l611.891 606.615h72.086z"
        id="bell-slash_svg__path-1"
      />
    </Defs>
    <G
      id="bell-slash_svg__Symbols"
      stroke="none"
      strokeWidth={1}
      fill="none"
      fillRule="evenodd">
      <G id="bell-slash_svg__bell-slash">
        <Mask id="bell-slash_svg__mask-2" fill="#fff">
          <Use xlinkHref="#bell-slash_svg__path-1" />
        </Mask>
        <Use
          id="bell-slash_svg__Mask"
          fill={props.color}
          fillRule="nonzero"
          xlinkHref="#bell-slash_svg__path-1"
        />
      </G>
    </G>
  </Svg>
);

export default SvgBellSlash;
