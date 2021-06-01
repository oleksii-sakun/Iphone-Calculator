import React, { useState } from "react";
import CalculatorButton from "./CalculatorButton";
import "./styles.css";

export default function Calculator() {
  const [dispValue, setDispValue] = useState(0);
  const [memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleButtonClick = (content) => () => {
    if (content === "AC") {
      setDispValue(0);
      setMemory(null);
      return;
    }

    if (content === "±") {
      return setDispValue(dispValue * -1);
    }

    if (content === "%") {
      setDispValue(dispValue / 100);
      setMemory(null);
      setOperator(null);
      return;
    }

    const operatorChecker = () => {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + dispValue);
        } else if (operator === "-") {
          setMemory(memory - dispValue);
        } else if (operator === "×") {
          setMemory(memory * dispValue);
        } else if (operator === "÷") {
          setMemory(memory / dispValue);
        }
      } else {
        setMemory(dispValue);
      }
      setDispValue(" ");
    };

    if (content === "+") {
      operatorChecker();
      setOperator("+");
      return;
    }

    if (content === "-") {
      operatorChecker();
      setOperator("-");
      return;
    }
    if (content === "×") {
      operatorChecker();
      setOperator("×");
      return;
    }
    if (content === "÷") {
      operatorChecker();
      setOperator("÷");
      return;
    }

    if (content === "=") {
      if (operator === "+") {
        setDispValue(memory + dispValue);
      } else if (operator === "-") {
        setDispValue(memory - dispValue);
      } else if (operator === "×") {
        setDispValue(memory * dispValue);
      } else if (operator === "÷") {
        setDispValue(memory / dispValue);
      }
      setMemory(null);
      setOperator(null);
      return;
    }

    if (content === ".") {
      if (dispValue.toString().includes(".")) return;

      setDispValue(dispValue + ".");
      return;
    }

    setDispValue(parseFloat(dispValue + content));
  };
  return (
    <div className="calculator">
      <div className="top"></div>
      <div className="display">{dispValue}</div>
      <div className="buttons">
        <CalculatorButton
          onButtonClick={handleButtonClick}
          style={{ background: "#A6A6A6" }}
          content="AC"
        ></CalculatorButton>
        <CalculatorButton
          onButtonClick={handleButtonClick}
          style={{ background: "#A6A6A6" }}
          content="±"
        ></CalculatorButton>
        <CalculatorButton
          onButtonClick={handleButtonClick}
          style={{ background: "#A6A6A6" }}
          content="%"
        ></CalculatorButton>
        <CalculatorButton
          onButtonClick={handleButtonClick}
          style={{ background: "#FF9F00" }}
          content="÷"
        ></CalculatorButton>
        <CalculatorButton
          onButtonClick={handleButtonClick}
          content="7"
        ></CalculatorButton>
        <CalculatorButton
          onButtonClick={handleButtonClick}
          content="8"
        ></CalculatorButton>
        <CalculatorButton
          onButtonClick={handleButtonClick}
          content="9"
        ></CalculatorButton>
        <CalculatorButton
          onButtonClick={handleButtonClick}
          style={{ background: "#FF9F00" }}
          content="×"
        ></CalculatorButton>
        <CalculatorButton
          onButtonClick={handleButtonClick}
          content="4"
        ></CalculatorButton>
        <CalculatorButton
          onButtonClick={handleButtonClick}
          content="5"
        ></CalculatorButton>
        <CalculatorButton
          onButtonClick={handleButtonClick}
          content="6"
        ></CalculatorButton>
        <CalculatorButton
          onButtonClick={handleButtonClick}
          style={{ background: "#FF9F00" }}
          content="-"
        ></CalculatorButton>
        <CalculatorButton
          onButtonClick={handleButtonClick}
          content="1"
        ></CalculatorButton>
        <CalculatorButton
          onButtonClick={handleButtonClick}
          content="2"
        ></CalculatorButton>
        <CalculatorButton
          onButtonClick={handleButtonClick}
          content="3"
        ></CalculatorButton>
        <CalculatorButton
          onButtonClick={handleButtonClick}
          style={{ background: "#FF9F00" }}
          content="+"
        ></CalculatorButton>
        <CalculatorButton
          onButtonClick={handleButtonClick}
          style={{
            width: "122px",
            gridColumn: "1/span 2",
            borderRadius: "40px",
          }}
          content="0"
        ></CalculatorButton>
        <CalculatorButton
          onButtonClick={handleButtonClick}
          content="."
        ></CalculatorButton>
        <CalculatorButton
          onButtonClick={handleButtonClick}
          style={{ background: "#FF9F00" }}
          content="="
        ></CalculatorButton>
      </div>
      <div className="bottom"></div>
    </div>
  );
}
