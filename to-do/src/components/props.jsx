"use client";

import { useState } from "react";

export function checkList(para) {
  return (
    <div>
      <div className="flex gap-[10px] p-[16px] cursor-pointer rounded-[6px] items-center mb-[20px] justify-center bg-[#f9fafb] w-[345px] h-[62px]">
        <input type="checkbox" />
        <p></p>
        <button className="px-[10px] py-[3px] mr-[8px] rounded-[8px] cursor-pointer text-[#ef4444] bg-[#fef2f2] text-[]">Delete</button>
      </div>
    </div>
  );
}

export function Button() {
  const [active, setActive] = useState(null);
  const buttons = ["All", "Active", "Completed"];

  return (
    <div className="flex">
      {buttons.map((text, index) => (
        <button
          key={index}
          onClick={() => setActive(index)}
          className="px-[10px] py-[3px] mr-[8px] rounded-[8px] cursor-pointer"
          style={{
            backgroundColor: active === index ? "#3c82f6" : "#e5e7eb",
            color: active === index ? "white" : "black",
            border: "none",
          }}
        >
          {text}
        </button>
      ))}
    </div>
  );
}



