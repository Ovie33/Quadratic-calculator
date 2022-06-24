import React from "react";
import style from "./Input.module.css";

function Input({ value, setValue }) {
  return (
    <div className={style.inputdiv}>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.currentTarget.valueAsNumber);
        }}
        className={style.input}
        type="number"
      />
    </div>
  );
}

export default Input;
