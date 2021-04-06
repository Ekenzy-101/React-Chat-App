import React from "react";

interface Props {
  innerColor?: string;
  height?: number;
  width?: number;
  onClick?: () => void;
}

const Send: React.FC<Props> = ({ innerColor, height, width, onClick }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className="bg-green cursor-pointer rounded-full px-3 "
      width={width}
      height={height}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* <circle cx="29" cy="29" r="29" fill={"#1EBE71"} /> */}
      {/* <g clipPath="url(#clip0)"> */}
      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill={innerColor}></path>
    </svg>
  );
};

Send.defaultProps = {
  innerColor: "#FFFFFF",
  height: 52,
  width: 52,
};

export default Send;
