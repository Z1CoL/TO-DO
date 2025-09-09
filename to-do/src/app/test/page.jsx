"use client";

import { useState } from "react";

export default function Home() {
  const [number, setNumber] = useState(200);

  let [kk, setKk] = useState();

  const handleIncrement = () => {
    setNumber(number + 1);
  };

  const handleDecrement = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <button onClick={handleDecrement} className="px-4 py-2 bg-blue-600 cursor-pointer rounded-[6px]">
        decrease
      </button>
      <p> Click Button - {number}</p>
      <button
        className="px-4 py-2 bg-blue-600 cursor-pointer rounded-[6px]"
        onClick={handleIncrement}
      >
        Increase
      </button>
    </div>
  );

}

export default function App(props) {
  const [color, setColor] = useState("gray");

  return (
    <button
      onClick={() => setColor("#3c82f6")}
      style={{
        backgroundColor: color,
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
      }}
    >
      Click me
    </button>
  );
}

