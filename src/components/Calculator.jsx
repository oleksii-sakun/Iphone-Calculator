import React, { useState } from "react";
import CalculatorButton from "./CalculatorButton";
import "./styles.css";
import { buttonSettings, buttonSettingsLandscape } from "./Config";

function switchNumberSign(num) {
  if (num === "" || num === "0") {
    return num;
  }
  if (num[0] === "-") {
    return num.slice(1);
  }
  return "-" + num;
}

function addFloatPoint(num) {
  if (!num.includes(".") && num !== "") {
    return num + ".";
  }
  return num;
}

function parseBigNumber(num) {
  const parsedValue =
    num.toPrecision().length > 9 ? num.toExponential(3) : num.toString();
  return parsedValue;
}

export default function Calculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [operator, setOperator] = useState(null);

  const displayValue = (b ? b : a) || 0;

  const handleNumberButton = (content) => {
    if (operator) {
      if (b.length > 7) {
        return;
      }
      setB((b === "0" ? "" : b) + content);
    } else {
      if (a.length > 7) {
        return;
      }
      setA((a === "0" ? "" : a) + content);
    }
  };

  const calculateExpression = () => {
    const aNumber = Number(a);
    const bNumber = b ? Number(b) : Number(a);
    let result = "";
    if (operator === "+") {
      result = aNumber + bNumber;
    } else if (operator === "-") {
      result = aNumber - bNumber;
    } else if (operator === "×") {
      result = aNumber * bNumber;
    } else if (operator === "÷") {
      result = aNumber / bNumber;
    }
    if (!operator) {
      return;
    }

    const parsedValue = parseBigNumber(result);
    setA(parsedValue);
  };

  const handleArifmethicButton = (content) => {
    if (operator) {
      calculateExpression();
      setOperator(content);
      setB("");
    } else {
      setOperator(content);
    }
  };

  const handleOperatorButton = (content) => {
    if (content === ".") {
      return handleFunctionForPoinButton();
    }
    if (content === "±") {
      return handleFunctionForPlusMinusButton();
    }
    if (content === "%") {
      return handleFunctionForPercentButton();
    }
    if (content === "AC") {
      return handleFunctionForACButton();
    }
    if (content === "=") {
      return handleEquallyButton();
    }
    handleArifmethicButton(content);
  };

  const handleEquallyButton = () => {
    calculateExpression();
    setB("");
    setOperator(null);
  };

  const handleFunctionForACButton = () => {
    setA("");
    setB("");
    setOperator(null);
  };

  const handleFunctionForPlusMinusButton = () => {
    if (b) {
      setB(switchNumberSign(b));
    } else {
      setA(switchNumberSign(a));
    }
  };

  const handleFunctionForPoinButton = () => {
    if (b) {
      setB(addFloatPoint(b));
    } else {
      setA(addFloatPoint(a));
    }
  };

  const handleFunctionForPercentButton = () => {
    if (b) {
      setB(parseBigNumber(Number(b) / 100));
    } else {
      setA(parseBigNumber(Number(a) / 100));
    }
  };

  return (
    <div className="calculator">
      <div className="top"></div>
      <div className="display">{displayValue}</div>
      <div className="buttons-wrapper">
        <div className="buttons-landscape">
          {buttonSettingsLandscape.map((button) => (
            <CalculatorButton key={button.value} value={button.value} />
          ))}
        </div>
        <div className="buttons">
          {buttonSettings.map((button) => (
            <CalculatorButton
              className={button.className}
              key={button.value}
              value={button.value}
              onButtonClick={
                button.type === "numberBtn"
                  ? handleNumberButton
                  : handleOperatorButton
              }
              style={button.style}
            />
          ))}
        </div>
      </div>

      <div className="bottom"></div>
    </div>
  );
}
