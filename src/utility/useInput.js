import React, { useState } from "react";

export const useInput = ({ type, placeholder, htmlFor }) => {
  const types = (type) => {
    switch (type) {
      case "text":
        return "";
      case "number":
        return 0;
      case "checkbox":
        return false;
      default:
        return "";
    }
  };
  const [value, setValue] = useState(types(type));
  const input = (
    <input
      value={value}
      id={htmlFor}
      onChange={(e) =>
        setValue(type !== "checkbox" ? e.target.value : e.target.checked)
      }
      checked={type === "checkbox" ? value : false}
      type={type}
      placeholder={placeholder}
    />
  );
  return [value, input];
};
