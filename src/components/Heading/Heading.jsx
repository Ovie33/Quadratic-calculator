import React from "react";
import "./Heading.jsx";
import style from "./Heading.module.css";

function Heading() {
  return (
    <div className={style.header}>
      <h1 className={style.h1}>QUADRATIC EQUATIONS CALCULATOR</h1>
    </div>
  );
}

export default Heading;
