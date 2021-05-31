import React from "react";
import "./styles.css";

export default function CalculatorButton(props) {
  return (
    <button className="calc-btn" style={props.style}>
      {props.content}
    </button>
  );
}
