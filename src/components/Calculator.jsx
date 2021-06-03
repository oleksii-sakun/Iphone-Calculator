import React, { useState } from "react";
import CalculatorButton from "./CalculatorButton";
import "./styles.css";

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

  const handleOperatorButton = (content) => {
    if (operator) {
      calculateExpression();
      setOperator(content);
      setB("");
    } else {
      setOperator(content);
    }
  };

  const handleEquallyButton = (content) => {
    calculateExpression();
    setB("");
    setOperator(null);
  };

  const handleFunctionForACButton = (content) => {
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
      handleFunction: handleOperatorButton,
    },
    {
      content: "7",
      handleFunction: handleNumberButton,
    },
    {
      content: "8",
      handleFunction: handleNumberButton,
    },
    {
      content: "9",
      handleFunction: handleNumberButton,
    },
    {
      content: "×",
      style: { background: "#FF9F00" },
      handleFunction: handleOperatorButton,
    },
    {
      content: "4",
      handleFunction: handleNumberButton,
    },
    {
      content: "5",
      handleFunction: handleNumberButton,
    },
    {
      content: "6",
      handleFunction: handleNumberButton,
    },
    {
      content: "-",
      style: { background: "#FF9F00" },
      handleFunction: handleOperatorButton,
    },
    {
      content: "1",
      handleFunction: handleNumberButton,
    },
    {
      content: "2",
      handleFunction: handleNumberButton,
    },
    {
      content: "3",
      handleFunction: handleNumberButton,
    },
    {
      content: "+",
      style: { background: "#FF9F00" },
      handleFunction: handleOperatorButton,
    },
    {
      content: "0",
      style: { width: "122px", gridColumn: "1/span 2", borderRadius: "40px" },
      handleFunction: handleNumberButton,
    },
    {
      content: ".",
      handleFunction: handleFunctionForPoinButton,
    },
    {
      content: "=",
      style: { background: "#FF9F00" },
      handleFunction: handleEquallyButton,
    },
  ];
  return (
    <div className="calculator">
      <div className="top"></div>
      <div className="display">{displayValue}</div>
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
