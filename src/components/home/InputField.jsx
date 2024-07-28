import React from "react";

const InputField = ({
  label,
  type,
  value,
  onChange,
  placeholder,
  required,
}) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default InputField;
