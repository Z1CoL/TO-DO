"use client";
import Image from "next/image";
import { Button } from "@/components/props";
import { CheckList } from "@/components/props";
import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    if ((inputValue, setInputValue.trim() !== "")) {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div>
      <section className="flex justify-center w-screen h-screen bg-[#f3f5f7]">
        <div className="w-[377px] h-[291px] bg-white mt-[60px] px-[16px] py-[24px] rounded-[8px] shadow-[0 0 12px] shadow-lg flex justify-center items-center flex-col">
          <header className="mb-[20px] text-[#000] font-semibold text-[20px]">
            To-Do List
          </header>

          <div className="flex md:gap-[6px]">
            <input
              placeholder="Add a new task..."
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="border-[1px] rounded-[6px] text-black border-solid border-[#e4e4e7] outline-none bg-[#ffff] px-[16px] w-[280px] h-[40px]"
            ></input>

            <button
              onClick={addTask}
              className="bg-[#3c82f6] text-[#f9f9f9] text-sm rounded-[6px] cursor-pointer color-[#f9f9f9] w-[59px] h-[40px] border-none text-[14px]"
            >
              Add
            </button>
          </div>

          <div className=" w-[345px] h-[32px] my-[20px] flex md:gap-[6px]">
            <Button></Button>
          </div>

          <p className="text-[14px] text-[#6b7280] items-center pt-[12px] pb-[40px] font-[550]">
            No tasks yet. Add one above!
          </p>

          <p className="text-[12px] text-[#6b7280] font-[550]">
            Powered by{" "}
            <a
              href="https://pinecone.mn/"
              className="font-[550] text-[#3b73ed] text-[12px]"
            >
              Pinecone academy
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
