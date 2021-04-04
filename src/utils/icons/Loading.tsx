import React from "react";

interface Props {
  color?: string;
  width?: number;
  height?: number;
  radius?: number;
  strokeWidth?: number;
}

const Loading: React.FC<Props> = ({ color, height, strokeWidth, width }) => {
  return (
    <svg
      className="animate-spin -ml-1 mr-3 h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox={`0 0 ${width! * 2} ${height! * 2}`}
    >
      <circle
        className="opacity-25"
        cx={height}
        cy={width}
        r="10"
        stroke={color}
        strokeWidth={strokeWidth}
      ></circle>
      <path
        className="opacity-75"
        fill={color}
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
};

Loading.defaultProps = {
  color: "#FFFFFF",
  height: 12,
  width: 12,
  radius: 10,
  strokeWidth: 4,
};

export default Loading;
