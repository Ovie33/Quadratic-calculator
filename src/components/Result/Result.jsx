import React from "react";
import style from "./Result.module.css";

function Result({ resultValue, resultValueB }) {
  return (
    <div>
      <p className={style.pas}>
        x = {resultValue} or {resultValueB}
      </p>
    </div>
  );
}

export default Result;
