// import { type } from "os";
import React from "react";
// import React, { useState } from "react";

type InputPropsType = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  type: string;
  title: string;
};

const Input: React.FC<InputPropsType> = (props) => {
  const { value, setValue, placeholder, type, title } = props;
  // const [value, setValue] = useState("VALUE");
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div style={{ fontSize: "24px", display: "flex", flexDirection: "column" }}>
      <span>{title}</span>
      <input
        onChange={changeHandler}
        style={{ fontSize: "24px", marginTop: "20px" }}
        value={value}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export default Input;
