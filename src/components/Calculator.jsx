import React, { useState } from "react";
import CalculatorButton from "./CalculatorButton";
import "./styles.css";

export default function Calculator() {
  const [dispValue, setDispValue] = useState("0");
  const [operator, setOperator] = useState(null);
  const [memory, setMemory] = useState(null);

  const handleFunctionForACButton = () => setDispValue(0);
  const handleFunctionForPlusMinusButton = () => setDispValue(dispValue * -1);
  const handleFunctionForPercentButton = () => {
    setDispValue(dispValue / 100);
    setOperator(null);
  };

  const handleFunctionForNumberButton = (content) => {
    if (operator !== null) {
      if (operator === "+") {
        setDispValue(+dispValue + +content);
      } else if (operator === "-") {
        setDispValue(+dispValue - +content);
      } else if (operator === "×") {
        setDispValue(+dispValue * +content);
      } else if (operator === "÷") {
        setDispValue(+dispValue / +content);
      }
    } else {
      setDispValue(parseFloat(dispValue + content));
    }
  };

  const handleFunctionForPlusButton = (content) => {
    setOperator(content);
  };

  const handleFunctionForMinusButton = (content) => {
    setOperator(content);
  };

  const handleFunctionForDivisionButton = (content) => {
    setOperator(content);
  };

  const handleFunctionForMultiplicationButton = (content) => {
    setOperator(content);
  };

  const handleFunctionForPointButton = (content) => {
    if (dispValue.toString().includes(".")) {
      return;
    } else {
      setDispValue(dispValue + content);
    }
  };

  const handleFunctionForDoorButton = (content) => {
    if (operator === "+") {
      setDispValue(memory);
    }
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
      handleFunction: handleFunctionForPlusMinusButton,
    },
    {
      content: "%",
      style: { background: "#A6A6A6" },
      handleFunction: handleFunctionForPercentButton,
    },
    {
      content: "÷",
      style: { background: "#FF9F00" },
      handleFunction: handleFunctionForDivisionButton,
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
      handleFunction: handleFunctionForMultiplicationButton,
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
      handleFunction: handleFunctionForMinusButton,
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
      handleFunction: handleFunctionForPlusButton,
    },
    {
      content: "0",
      style: { width: "122px", gridColumn: "1/span 2", borderRadius: "40px" },
      handleFunction: handleFunctionForNumberButton,
    },
    {
      content: ".",
      handleFunction: handleFunctionForPointButton,
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
      <div className="display">{dispValue}</div>
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
