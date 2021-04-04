import React, { forwardRef } from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: string;
}

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { error } = props;
  return (
    <div className="mb-4">
      <input
        {...props}
        ref={ref}
        className="bg-light-gray font-geo-regular focus:outline-none focus:border-green mb-2 h-11 px-3 py-2 placeholder-dark-gray placeholder-opacity-40 rounded-lg w-full"
      />
      {error ? <p className="text-red font-geo-bold px-3">{error}</p> : null}
    </div>
  );
});

export default Input;
