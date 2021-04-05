import React from "react";

interface Props {
  innerColor?: string;
  height?: string | number;
  outerColor?: string;
  width?: string | number;
}

const Microphone: React.FC<Props> = ({
  innerColor,
  height,
  outerColor,
  width,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="29" cy="29" r="29" fill={outerColor} />
      <g clipPath="url(#clip0)">
        <path
          d="M36.8599 29.8789C36.8599 29.4189 36.5081 29.0671 36.0481 29.0671C35.5881 29.0671 35.2364 29.4189 35.2364 29.8789C35.2364 33.0448 32.6658 35.6153 29.4999 35.6153C26.334 35.6153 23.7634 33.0448 23.7634 29.8789C23.7634 29.4189 23.4117 29.0671 22.9517 29.0671C22.4917 29.0671 22.1399 29.4189 22.1399 29.8789C22.1399 33.64 24.954 36.8059 28.6881 37.2118V39.3765H25.7387C25.2787 39.3765 24.927 39.7283 24.927 40.1883C24.927 40.6483 25.2787 41.0001 25.7387 41.0001H33.2611C33.7211 41.0001 34.0728 40.6483 34.0728 40.1883C34.0728 39.7283 33.7211 39.3765 33.2611 39.3765H30.3117V37.2118C34.0458 36.8059 36.8599 33.64 36.8599 29.8789Z"
          fill={innerColor}
        />
        <path
          d="M29.5 18C27.0106 18 24.9812 20.0294 24.9812 22.5188V29.8518C24.9812 32.3682 27.0106 34.3706 29.5 34.3976C31.9894 34.3976 34.0188 32.3682 34.0188 29.8788V22.5188C34.0188 20.0294 31.9894 18 29.5 18Z"
          fill={innerColor}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="23"
            height="23"
            fill="white"
            transform="translate(18 18)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

Microphone.defaultProps = {
  innerColor: "#FFFFFF",
  outerColor: "#1EBE71",
  height: 58,
  width: 58,
};

export default Microphone;
