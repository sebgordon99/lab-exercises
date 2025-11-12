import { useState } from "react";
import "./App.css";
import "./calcstyles.css";

function App() {
  const [displayValue, setDisplayValue] = useState("");
  const [operation, setOperation] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);

  const handleNumberClick = (num) => {
    setDisplayValue((prev) => prev + num);
  };

  const handleOperationClick = (op) => {
    if (displayValue === "") return;
    setOperation(op);
    setPreviousValue(displayValue);
    setDisplayValue("");
  };

  const handleReset = () => {
    setDisplayValue("");
    setOperation(null);
    setPreviousValue(null);
  };

  const handleEquals = () => {
    if (!operation || previousValue === null) return;

    const current = parseFloat(displayValue);
    const previous = parseFloat(previousValue);
    let result = 0;

    switch (operation) {
      case "+":
        result = previous + current;
        break;
      case "-":
        result = previous - current;
        break;
      case "x":
        result = previous * current;
        break;
      case "/":
        result = previous / current;
        break;
      default:
        return;
    }

    setDisplayValue(result.toString());
    setOperation(null);
    setPreviousValue(null);
  };

  return (
    <div className="container">
      <div className="calculator">
        <div className="display-container">
          <div className="operation-display">
            {operation && previousValue ? `${previousValue} ${operation}` : ""}
          </div>
          <div className="display">{displayValue || "0"}</div>
        </div>

        <div className="button-grid">
          <button className="btn btn-reset" onClick={handleReset}>
            Reset
          </button>

          <button
            className="btn btn-number"
            onClick={() => handleNumberClick("7")}
          >
            7
          </button>
          <button
            className="btn btn-number"
            onClick={() => handleNumberClick("8")}
          >
            8
          </button>
          <button
            className="btn btn-number"
            onClick={() => handleNumberClick("9")}
          >
            9
          </button>
          <button
            className="btn btn-operation"
            onClick={() => handleOperationClick("/")}
          >
            /
          </button>

          <button
            className="btn btn-number"
            onClick={() => handleNumberClick("4")}
          >
            4
          </button>
          <button
            className="btn btn-number"
            onClick={() => handleNumberClick("5")}
          >
            5
          </button>
          <button
            className="btn btn-number"
            onClick={() => handleNumberClick("6")}
          >
            6
          </button>
          <button
            className="btn btn-operation"
            onClick={() => handleOperationClick("x")}
          >
            x
          </button>

          <button
            className="btn btn-number"
            onClick={() => handleNumberClick("1")}
          >
            1
          </button>
          <button
            className="btn btn-number"
            onClick={() => handleNumberClick("2")}
          >
            2
          </button>
          <button
            className="btn btn-number"
            onClick={() => handleNumberClick("3")}
          >
            3
          </button>
          <button
            className="btn btn-operation"
            onClick={() => handleOperationClick("-")}
          >
            -
          </button>

          <button
            className="btn btn-number btn-zero"
            onClick={() => handleNumberClick("0")}
          >
            0
          </button>
          <button
            className="btn btn-operation"
            onClick={() => handleOperationClick("+")}
          >
            +
          </button>

          <button className="btn btn-equals" onClick={handleEquals}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
