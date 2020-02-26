import React from "react";

export const Input = ({ name, type, value, label, helptext, onChange }) => {
  return (
    <div>
      <div>
        <label htmlFor={name}>{label}</label>
      </div>
      <input type={type} value={value} onChange={onChange} />
      <div>
        <p>{helptext}</p>
      </div>
    </div>
  );
};

export default Input;
