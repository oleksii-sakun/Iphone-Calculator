import React from "react";
import CalculatorButton from "./CalculatorButton";
import "./styles.css";

export default function Calculator() {
  return (
    <div className="calculator">
      <div className="top"></div>
      <div className="display">0</div>
      <div className="buttons">
        <CalculatorButton
          style={{ background: "#A6A6A6" }}
          content="AC"
        ></CalculatorButton>
        <CalculatorButton
          style={{ background: "#A6A6A6" }}
          content="±"
        ></CalculatorButton>
        <CalculatorButton
          style={{ background: "#A6A6A6" }}
          content="%"
        ></CalculatorButton>
        <CalculatorButton
          style={{ background: "#FF9F00" }}
          content="÷"
        ></CalculatorButton>
        <CalculatorButton content="7"></CalculatorButton>
        <CalculatorButton content="8"></CalculatorButton>
        <CalculatorButton content="9"></CalculatorButton>
        <CalculatorButton
          style={{ background: "#FF9F00" }}
          content="×"
        ></CalculatorButton>
        <CalculatorButton content="4"></CalculatorButton>
        <CalculatorButton content="5"></CalculatorButton>
        <CalculatorButton content="6"></CalculatorButton>
        <CalculatorButton
          style={{ background: "#FF9F00" }}
          content="-"
        ></CalculatorButton>
        <CalculatorButton content="1"></CalculatorButton>
        <CalculatorButton content="2"></CalculatorButton>
        <CalculatorButton content="3"></CalculatorButton>
        <CalculatorButton
          style={{ background: "#FF9F00" }}
          content="+"
        ></CalculatorButton>
        <CalculatorButton
          style={{
            width: "122px",
            gridColumn: "1/span 2",
            borderRadius: "40px",
          }}
          content="0"
        ></CalculatorButton>
        <CalculatorButton content=","></CalculatorButton>
        <CalculatorButton
          style={{ background: "#FF9F00" }}
          content="="
        ></CalculatorButton>
      </div>
      <div className="bottom"></div>
    </div>
  );
}
