import React from "react";

interface Props {
  color?: string;
  height?: number;
  width?: number;
}

const MoreVertical: React.FC<Props> = ({ color, height, width }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="2.5" cy="2.5" r="2.5" fill={color} />
      <circle cx="2.5" cy="10.5" r="2.5" fill={color} />
      <circle cx="2.5" cy="18.5" r="2.5" fill={color} />
    </svg>
  );
};

MoreVertical.defaultProps = {
  color: "#FFFFFF",
  height: 21,
  width: 5,
};
export default MoreVertical;
