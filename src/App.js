import "./App.css";
import React, { useState, useEffect } from "react";
import Heading from "./components/Heading/Heading";
import Input from "./components/Input/Input";
import Result from "./components/Result/Result";

function App() {
  const [valueA, setvalueA] = useState(0);
  const [valueB, setValueB] = useState(0);
  const [valueC, setValueC] = useState(0);
  const [resultValue, setResultValue] = useState(0);
  const [resultValueB, setResultValueB] = useState(0);

  useEffect(() => {
    solveQuadraticEquation();
  }, [valueA, valueB, valueC]);

  const solveQuadraticEquation = () => {
    let resultValue1 =
      (-1 * valueB + Math.sqrt(valueB ** 2 - 4 * valueA * valueC)) /
      (2 * valueA);
    let resultValue2 =
      (-1 * valueB - Math.sqrt(valueB ** 2 - 4 * valueA * valueC)) /
      (2 * valueA);

    setResultValue(resultValue1);
    setResultValueB(resultValue2);
  };

  return (
    <div className="App">
      <div className="header">
        <Heading />
      </div>
      <div className="box">
        <div className="sup">
          <Input value={valueA} setValue={setvalueA} />
          <span>
            X<sup>2</sup>
          </span>
        </div>
        <p>+</p>
        <div className="span">
          <Input value={valueB} setValue={setValueB} />
          <span>X</span>
        </div>
        <p>+</p>
        <Input value={valueC} setValue={setValueC} />
      </div>
      <Result resultValue={resultValue} resultValueB={resultValueB} />
    </div>
  );
}

export default App;
