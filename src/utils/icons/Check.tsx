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
      viewBox={`0 0 ${newWidth} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 4.06122L4.33871 7L10 1"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      {isDouble ? (
        <path
          d="M7 4.06122L10.3387 7L16 1"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      ) : null}
    </svg>
  );
};

Check.defaultProps = {
  color: "#FFFFFF",
  height: 10,
  variant: "single",
  width: 10,
};

export default Check;
