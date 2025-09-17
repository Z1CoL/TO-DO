"use client";
import { useState } from "react";

export function TaskItems({ task, completed, onToggle, onDelete }) {
  return (
    <div className="flex w-[345px] h-[62px] p-[16px] justify-between items-center bg-[#F9FAFB] rounded-[6px]">
      <div className="flex items-center gap-[10px]">
        <input
          type="checkbox"
          checked={completed}
          onChange={onToggle}
          className="w-[20px] h-[20px] bg-[#FFF] rounded-[2px] border-[#767676]"
        />
        <p className={completed ? "line-through text-black" : ""}>{task}</p>
      </div>

      <button
        onClick={onDelete}
        className="px-[10px] py-[3px] mr-[8px] rounded-[8px] cursor-pointer text-[#ef4444] bg-[#fef2f2]"
      >
        Delete
      </button>
    </div>
  );
}

export function Button({ filter, setFilter }) {
  const buttons = ["All", "Active", "Completed"];

  return (
    <div className="flex">
      {buttons.map((text) => (
        <button
          key={text}
          onClick={() => setFilter(text)}
          className="px-[10px] py-[3px] mr-[8px] rounded-[8px] cursor-pointer"
          style={{
            backgroundColor: filter === text ? "#3c82f6" : "#e5e7eb",
            color: filter === text ? "white" : "black",
            border: "none",
          }}
        >
          {text}
        </button>
      ))}
    </div>
  );
}
