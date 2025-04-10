"use client";
import React, { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Contador</h1>
      <p data-testid="counter-value">Valor: {count}</p>
      <button onClick={() => setCount(count + 1)} data-testid="increment">
        +
      </button>
      <button onClick={() => setCount(count - 1)} data-testid="decrement">
        -
      </button>
    </main>
  );
}
