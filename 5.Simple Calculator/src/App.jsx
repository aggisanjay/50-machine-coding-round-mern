import React, { useState } from "react";

export default function ExpressionCalculator() {
  const [expression, setExpression] = useState("");
  const [display, setDisplay] = useState("0");
  const [reset, setReset] = useState(false);

  const inputNumber = (num) => {
    if (reset) {
      setExpression(num);
      setDisplay(num);
      setReset(false);
      return;
    }

    const newExp = display === "0" ? num : expression + num;
    setExpression(newExp);
    setDisplay(newExp);
  };

  const inputDot = () => {
    if (reset) return;

    const parts = expression.split(/[\+\-\×\÷]/);
    if (parts[parts.length - 1].includes(".")) return;

    setExpression(expression + ".");
    setDisplay(expression + ".");
  };

  const inputOperator = (op) => {
    if (!expression || /[\+\-\×\÷]$/.test(expression)) return;

    const newExp = expression + " " + op + " ";
    setExpression(newExp);
    setDisplay(newExp);
  };

  const evaluate = () => {
    if (!expression) return;

    try {
      const sanitized = expression
        .replace(/×/g, "*")
        .replace(/÷/g, "/");

      const result = eval(sanitized);
      setDisplay(String(result));
      setExpression("");
      setReset(true);
    } catch {
      setDisplay("Error");
      setExpression("");
      setReset(true);
    }
  };

  const clear = () => {
    setExpression("");
    setDisplay("0");
    setReset(false);
  };

  return (
    <div style={styles.page}>
     

      <div style={styles.calculator}>
        <h1 style={styles.heading}>Calculator</h1>
        <div style={styles.screen}>
          {display}
        </div>

        <div style={styles.grid}>
          <Btn label="C" onClick={clear} action />
          <Btn label="÷" onClick={() => inputOperator("÷")} />
          <Btn label="×" onClick={() => inputOperator("×")} />
          <Btn label="-" onClick={() => inputOperator("-")} />

          <Btn label="7" onClick={() => inputNumber("7")} />
          <Btn label="8" onClick={() => inputNumber("8")} />
          <Btn label="9" onClick={() => inputNumber("9")} />
          <Btn label="+" onClick={() => inputOperator("+")} />

          <Btn label="4" onClick={() => inputNumber("4")} />
          <Btn label="5" onClick={() => inputNumber("5")} />
          <Btn label="6" onClick={() => inputNumber("6")} />
          <Btn label="=" onClick={evaluate} equal />

          <Btn label="1" onClick={() => inputNumber("1")} />
          <Btn label="2" onClick={() => inputNumber("2")} />
          <Btn label="3" onClick={() => inputNumber("3")} />

          <Btn label="0" onClick={() => inputNumber("0")} wide />
          <Btn label="." onClick={inputDot} />
        </div>
      </div>
    </div>
  );
}

const Btn = ({ label, onClick, wide, equal, action }) => {
  return (
    <button
      onClick={onClick}
      style={{
        ...styles.btn,
        ...(wide && { gridColumn: "span 2" }),
        ...(equal && styles.equal),
        ...(action && styles.action),
      }}
    >
      {label}
    </button>
  );
};

const styles = {
  page: {
    height: "100vh",
    background: "linear-gradient(135deg,#0f2027,#203a43,#2c5364)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "system-ui",
  },
     heading: {
  textAlign: "center",
  color: "#ffffff",
  marginBottom: "12px",
  fontSize: "22px",
  letterSpacing: "1px",
},



  calculator: {
    background: "#121212",
    padding: "18px",
    borderRadius: "18px",
    width: "310px",
    boxShadow: "0 15px 30px rgba(0,0,0,0.4)",
  },

  screen: {
    background: "#000",
    color: "#00ff99",
    fontSize: "28px",
    padding: "18px",
    borderRadius: "12px",
    textAlign: "right",
    marginBottom: "12px",
    minHeight: "60px",
    overflow: "hidden",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: "10px",
  },

  btn: {
    background: "#2e2e2e",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    padding: "16px",
    fontSize: "18px",
    fontWeight: 600,
    cursor: "pointer",
  },

  equal: {
    background: "#00c853",
  },

  action: {
    background: "#ff5252",
  },
};
