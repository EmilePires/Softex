import React, { useState } from "react";

export default function ContadorIncremento() {
  const [incremento, setIncremento] = useState(1);
  const [contador, setContador] = useState(0);

  const handleIncrementoChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setIncremento(value === "" ? "" : parseInt(value));
    }
  };

  const somar = () => {
    setContador((prev) => prev + (incremento || 0));
  };

  const subtrair = () => {
    setContador((prev) => prev - (incremento || 0));
  };

  const zerar = () => {
    setContador(0);
  };

  return (
    <div style={{ fontFamily: "Arial", maxWidth: 300, margin: "2rem auto", textAlign: "center" }}>
      <h2>Contador com Incremento</h2>
      <div style={{ marginBottom: "1rem" }}>
        <label>
          Incremento:{" "}
          <input
            type="number"
            min="0"
            value={incremento}
            onChange={handleIncrementoChange}
            style={{ width: 60, textAlign: "center" }}
          />
        </label>
      </div>
      <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{contador}</div>
      <button onClick={somar} style={{ marginRight: 8 }}>
        Somar
      </button>
      <button onClick={subtrair} style={{ marginRight: 8 }}>
        Subtrair
      </button>
      <button onClick={zerar}>Zerar</button>
    </div>
  );
}

