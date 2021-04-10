import React from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {}

const Form: React.FC<Props> = (props) => {
  return <form {...props} className="w-full" />;
};

export default Form;
