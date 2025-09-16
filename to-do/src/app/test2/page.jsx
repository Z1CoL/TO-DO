"use client";

import { Button } from "@/components2/props2";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleOnClick = () => {
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="type here ..."
        onChange={handleOnChange}
        value={inputValue}
      />
        
      {todos.map((el, index) => {
        return <p key={index}>{el}</p>;
      })}

      {/*  */}
      <button
        className="p-2 rounded-[8px] bg-[#3c82f6]"
        onClick={handleOnClick}
      >
        Add
      </button>
    </div>
  );
}
