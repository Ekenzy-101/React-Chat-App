import React from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button: React.FC<Props> = (props) => {
  return (
    <button
      {...props}
      className="bg-green border-none flex justify-center items-center focus:outline-none  h-11 rounded-2.5xl text-white  w-full"
    />
  );
};

export default Button;
