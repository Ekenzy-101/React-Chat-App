import React from "react";

interface Props {
  color?: string;
  height?: number;
  width?: number;
}

const Chat: React.FC<Props> = ({ color, height, width }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3932 0.889404C6.99347 0.889404 1.78651 5.69549 1.78651 11.6033C1.79927 14.014 2.66533 16.3423 4.23108 18.1754C3.90731 20.1405 2.50912 21.7581 0.611588 22.3628C0.14364 22.5182 -0.109664 23.0236 0.0457602 23.4915C0.167076 23.8568 0.508843 24.1031 0.893717 24.1029C3.7974 24.2053 6.64375 23.2774 8.92914 21.4833C10.3524 22.0362 11.8664 22.319 13.3932 22.3172C19.793 22.3172 25 17.5111 25 11.6033C25 5.69549 19.793 0.889404 13.3932 0.889404Z"
        fill={color}
      />
    </svg>
  );
};

Chat.defaultProps = {
  color: "#C4C4C4",
  width: 25,
  height: 25,
};

export default Chat;
