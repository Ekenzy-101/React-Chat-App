import React from "react";

interface Props {
  color?: string;
  height?: number;
  width?: number;
  variant?: "single" | "double";
}

const Check: React.FC<Props> = ({ color, height, width, variant }) => {
  const isDouble = variant === "double";
  const newWidth = isDouble ? width! * 2 : width;
  return (
    <svg
      width={newWidth}
      height={height}
      viewBox={`"0 0 ${newWidth} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 3.04082L3.22581 5L7 1"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      {isDouble ? (
        <path
          d="M5 3.04082L7.22581 5L11 1"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      ) : null}
    </svg>
  );
};

Check.defaultProps = {
  color: "#FFFFFF",
  height: 6,
  variant: "single",
  width: 6,
};

export default Check;
