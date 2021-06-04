import React from "react";
import "./styles.css";

export default function CalculatorButton(props) {
  return (
    <button
      className="calc-btn"
      style={props.style}
      onClick={() => props.onButtonClick(props.value)}
    >
      {props.value}
    </button>
  );
}
