"use client";

import { useState } from "react";
import { Home } from "@/app/page";

export function CheckList({ task }) {
  return (
    <div>
      <div className="flex w-[345px] h-[62px] p-[16px] justify-between items-center bg-[#F9FAFB] rounded-[6px]">
        <div className="flex items-center gap-[10px]">
          <input
            type="checkbox"
            className="w-[20px] h-[20px] bg-[#FFF] rounded-[2px] border-[#767676]"
          />
          <p className="text-[#000]"></p>
        </div>
      </div>
    </div>
  );
}

export function CheckList1({ task, onDelete }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <div className="flex w-[345px] h-[62px] p-[16px] justify-between items-center bg-[#F9FAFB] rounded-[6px]">
        <div className="flex items-center gap-[10px]">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            className="w-[20px] h-[20px] bg-[#FFF] rounded-[2px] border-[#767676]"
          />
          <p className={isChecked ? "line-through text-black" : ""}>{task}</p>
        </div>

        <button
          onClick={onDelete}
          className="px-[10px] py-[3px] mr-[8px] rounded-[8px] cursor-pointer text-[#ef4444] bg-[#fef2f2] text-[]"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export function CheckList3(para) {
  return (
    <div>
      <div className="flex w-[345px] h-[62px] p-[16px] justify-between items-center bg-[#F3F4F6] rounded-[6px]">
        <div className="flex items-center gap-[10px]">
          <input
            type="checkbox"
            className="w-[20px] h-[20px] bg-[#FFF] rounded-[2px] border-[#767676]"
          />
          <p className="text-[#000]"></p>
        </div>

        <button className="px-[10px] py-[3px] mr-[8px] rounded-[8px] cursor-pointer text-[#ef4444] bg-[#fef2f2] text-[]">
          Delete
        </button>
      </div>
    </div>
  );
}

export function Button() {
  const [active, setActive] = useState(0);
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
