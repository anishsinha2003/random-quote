import React, { useState } from 'react';
import "./App.css";
const App = () => {



const [displayValue, setDisplayValue] = useState('0');
const [operator, setOperator] = useState(null);
const [waitingForOperand, setWaitingForOperand] = useState(false);
const [decimalUsed, setDecimalUsed] = useState(false);

const handleNumberClick = (num) => {
  if (waitingForOperand) {
    setDisplayValue(String(num));
    setWaitingForOperand(false);
  } else {
    setDisplayValue((prevValue) =>
      prevValue === '0' ? String(num) : prevValue + num
    );
  }
};

const handleOperatorClick = (op) => {
  if (!waitingForOperand) {
    handleEquals();
    setOperator(op);
    setWaitingForOperand(true);
    setDecimalUsed(false);
  } else {
    setOperator(op);
    setDecimalUsed(false);
  }
};

const handleEquals = () => {
  if (!waitingForOperand) {
    const inputValue = parseFloat(displayValue);
    if (!isNaN(inputValue)) {
      switch (operator) {
        case '+':
          setDisplayValue((prevValue) =>
            (parseFloat(prevValue) + inputValue).toString()
          );
          break;
        case '-':
          setDisplayValue((prevValue) =>
            (parseFloat(prevValue) - inputValue).toString()
          );
          break;
        case '*':
          setDisplayValue((prevValue) =>
            (parseFloat(prevValue) * inputValue).toString()
          );
          break;
        case '/':
          setDisplayValue((prevValue) =>
            (parseFloat(prevValue) / inputValue).toString()
          );
          break;
        default:
          break;
      }
      setOperator(null);
      setWaitingForOperand(false);
      setDecimalUsed(false);
    }
  }
};

const handleDecimalClick = () => {
  if (!decimalUsed) {
    setDisplayValue((prevValue) => prevValue + '.');
    setDecimalUsed(true);
    setWaitingForOperand(false);
  }
};

const handleClear = () => {
  setDisplayValue('0');
  setOperator(null);
  setWaitingForOperand(false);
  setDecimalUsed(false);
};

return (
  <div id="calculator" className="calculator">
    <div id="display" className="display">
      {displayValue}
    </div>
    <div className="buttons">
      <button id="zero" onClick={() => handleNumberClick(0)}>
        0
      </button>
      <button id="one" onClick={() => handleNumberClick(1)}>
        1
      </button>
      <button id="two" onClick={() => handleNumberClick(2)}>
        2
      </button>
      <button id="three" onClick={() => handleNumberClick(3)}>
        3
      </button>
      <button id="four" onClick={() => handleNumberClick(4)}>
        4
      </button>
      <button id="five" onClick={() => handleNumberClick(5)}>
        5
      </button>
      <button id="six" onClick={() => handleNumberClick(6)}>
        6
      </button>
      <button id="seven" onClick={() => handleNumberClick(7)}>
        7
      </button>
      <button id="eight" onClick={() => handleNumberClick(8)}>
        8
      </button>
      <button id="nine" onClick={() => handleNumberClick(9)}>
        9
      </button>
      <button id="add" onClick={() => handleOperatorClick('+')}>
        +
      </button>
      <button id="subtract" onClick={() => handleOperatorClick('-')}>
        -
      </button>
      <button id="multiply" onClick={() => handleOperatorClick('*')}>
        *
      </button>
      <button id="divide" onClick={() => handleOperatorClick('/')}>
        /
      </button>
      <button id="decimal" onClick={handleDecimalClick}>
        .
      </button>
      <button id="clear" onClick={handleClear}>
        C
      </button>
      <button id="equals" onClick={handleEquals}>
        =
      </button>
    </div>
  </div>
);
};

export default App;