import React, { useState } from "react";
import CalculatorButton from "./CalculatorButton";
import "./styles.css";

export default function Calculator() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [operator, setOperator] = useState(null);
  const [result, setResult] = useState(0);

  const value = b ? b : a;

  const handleFunctionForNumberButton = (content) => {
    if (!b && !a) {
      setA(parseFloat(a + content));
    } else {
      setB(parseFloat(b + content));
    }
    if (a && b && result) {
      setB(parseFloat(0 + content));
      setA(result);
    }
  };

  console.log("a", a);
  console.log("b", b);
  console.log("operator", operator);
  console.log("result", result);

  const handleFunctionForOperatorButton = (content) => {
    if (operator !== null) {
      if (operator === "+") {
        setResult(a + b);
      } else if (operator === "-") {
        setResult(a - b);
      } else if (operator === "×") {
        setResult(a * b);
      } else if (operator === "÷") {
        setResult(a / b);
      }
    }
    setOperator(content);
  };

  const handleFunctionForDoorButton = (content) => {
    if (operator === "+") {
      setResult(a + b);
    } else if (operator === "-") {
      setResult(a - b);
    } else if (operator === "×") {
      setResult(a * b);
    } else if (operator === "÷") {
      setResult(a / b);
    }
  };

  const handleFunctionForACButton = (content) => {
    setA(0);
    setB(0);
    setResult(0);
    setOperator(null);
  };

  const buttonSettings = [
    {
      content: "AC",
      style: { background: "#A6A6A6" },
      handleFunction: handleFunctionForACButton,
    },
    {
      content: "±",
      style: { background: "#A6A6A6" },
      // handleFunction: handleFunctionForPlusMinusButton,
    },
    {
      content: "%",
      style: { background: "#A6A6A6" },
      // handleFunction: handleFunctionForPercentButton,
    },
    {
      content: "÷",
      style: { background: "#FF9F00" },
      handleFunction: handleFunctionForOperatorButton,
    },
    {
      content: "7",
      handleFunction: handleFunctionForNumberButton,
    },
    {
      content: "8",
      handleFunction: handleFunctionForNumberButton,
    },
    {
      content: "9",
      handleFunction: handleFunctionForNumberButton,
    },
    {
      content: "×",
      style: { background: "#FF9F00" },
      handleFunction: handleFunctionForOperatorButton,
    },
    {
      content: "4",
      handleFunction: handleFunctionForNumberButton,
    },
    {
      content: "5",
      handleFunction: handleFunctionForNumberButton,
    },
    {
      content: "6",
      handleFunction: handleFunctionForNumberButton,
    },
    {
      content: "-",
      style: { background: "#FF9F00" },
      handleFunction: handleFunctionForOperatorButton,
    },
    {
      content: "1",
      handleFunction: handleFunctionForNumberButton,
    },
    {
      content: "2",
      handleFunction: handleFunctionForNumberButton,
    },
    {
      content: "3",
      handleFunction: handleFunctionForNumberButton,
    },
    {
      content: "+",
      style: { background: "#FF9F00" },
      handleFunction: handleFunctionForOperatorButton,
    },
    {
      content: "0",
      style: { width: "122px", gridColumn: "1/span 2", borderRadius: "40px" },
      handleFunction: handleFunctionForNumberButton,
    },
    {
      content: ".",
      // handleFunction: handleFunctionForPointButton,
    },
    {
      content: "=",
      style: { background: "#FF9F00" },
      handleFunction: handleFunctionForDoorButton,
    },
  ];
  return (
    <div className="calculator">
      <div className="top"></div>
      <div className="display">{result ? result : value}</div>
      <div className="buttons">
        {buttonSettings.map((button) => (
          <CalculatorButton
            key={button.content}
            content={button.content}
            onButtonClick={button.handleFunction}
            style={button.style}
          />
        ))}
      </div>
      <div className="bottom"></div>
    </div>
  );
}
