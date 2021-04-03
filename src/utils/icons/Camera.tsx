import React from "react";

interface Props {
  height?: number;
  innerColor?: string;
  outerColor?: string;
  width?: number;
}

const Camera: React.FC<Props> = ({ height, innerColor, outerColor, width }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          d="M14.7094 11.0715C15.9298 12.2919 15.9298 14.2706 14.7094 15.4911C13.489 16.7115 11.5103 16.7115 10.2898 15.4911C9.0694 14.2706 9.0694 12.2919 10.2898 11.0715C11.5103 9.85108 13.489 9.85108 14.7094 11.0715Z"
          fill={outerColor}
        />
        <path
          d="M21.8749 4.6873H19.7157L18.1524 1.56219H6.84608L5.28426 4.68884L3.12813 4.69268C1.40919 4.69575 0.00987809 6.09654 0.00839381 7.81625L0 20.312C0 22.0356 1.40156 23.4379 3.12511 23.4379H21.8749C23.5985 23.4379 25.0001 22.0363 25.0001 20.3128V7.81236C25 6.08887 23.5984 4.6873 21.8749 4.6873ZM12.4996 19.5315C9.05329 19.5315 6.2494 16.7276 6.2494 13.2813C6.2494 9.83496 9.05329 7.03107 12.4996 7.03107C15.9459 7.03107 18.7498 9.83496 18.7498 13.2813C18.7498 16.7276 15.9459 19.5315 12.4996 19.5315Z"
          fill={outerColor}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="25" height="25" fill={innerColor} />
        </clipPath>
      </defs>
    </svg>
  );
};

Camera.defaultProps = {
  height: 25,
  width: 25,
  innerColor: "#FFFFFF",
  outerColor: "#BEBEBE",
};

export default Camera;
