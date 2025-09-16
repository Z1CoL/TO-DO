"use client";
import Image from "next/image";
import { Button } from "@/components/props";
import { CheckList } from "@/components/props";
import { CheckList1 } from "@/components/props";
import { CheckList2 } from "@/components/props";
import { CheckList3 } from "@/components/props";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleOnClick = () => {
    if (inputValue === "") return;
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <section className="flex justify-center">
        <div className=" bg-white mt-[60px] px-[16px] py-[24px] rounded-[8px] shadow-[0 0 12px] shadow-lg flex justify-center items-center flex-col ">
          <header className="mb-[20px] text-[#000] font-semibold text-[20px]">
            To-Do List
          </header>

          <div className="flex md:gap-[6px]">
            <input
              placeholder="Add a new task..."
              type="text"
              onChange={handleOnChange}
              value={inputValue}
              className="border-[1px] rounded-[6px] text-black border-solid border-[#e4e4e7] outline-none bg-[#ffff] px-[16px] w-[280px] h-[40px]"
            />
            {/* 
            {todos.map((el, index) => {
              return <p key={index}>{el}</p>;
            })} */}

            <button
              onClick={handleOnClick}
              className="bg-[#3c82f6] ml-[6px] text-[#f9f9f9] text-sm rounded-[6px] cursor-pointer color-[#f9f9f9] w-[59px] h-[40px] border-none text-[14px]"
            >
              Add
            </button>
          </div>

          <div className=" w-[345px] h-[32px] my-[20px] flex md:gap-[6px]">
            <Button></Button>
          </div>

          <div className="mt-4 w-full flex flex-col gap-2">
            {todos.map((todo, index) => (
              <CheckList1
                key={index}
                task={todo}
                onDelete={() => handleDelete(index)}
              />
            ))}
          </div>

          {todos.length === 0 && (
            <p className="text-[14px] text-[#6b7280] items-center pt-[12px] pb-[40px] font-[550]">
              No tasks yet. Add one above!
            </p>
          )}

          <p className="text-[12px] text-[#6b7280] pt-[10px] font-[550]">
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
