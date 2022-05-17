import React from "react";

const InputWithLabel = ({
  id,
  label,
  value,
  onInputChange,
  children,
  isFocused,
  type = "text",
}) => (
  <>
    <label htmlFor={id}>{children}</label> &nbsp;
    <input
      id={id}
      type={type}
      value={value}
      onChange={onInputChange}
      autoFocus={isFocused}
    />
  </>
);

export default InputWithLabel;
