import React from "react";

interface Props {
  color?: string;
  height?: number;
  width?: number;
}

const Back: React.FC<Props> = ({ color, height, width }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8.5 1L1.5 8L8.5 15" stroke={color} />
    </svg>
  );
};

Back.defaultProps = {
  color: "#000",
  height: 16,
  width: 9,
};

export default Back;
