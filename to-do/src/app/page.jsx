"use client";
import { Button } from "@/components/Tasks";
import { TaskItems } from "@/components/Tasks";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("All");

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleOnClick = () => {
    if (inputValue === "") return;
    setTodos([...todos, { text: inputValue, completed: false }]);
    setInputValue("");
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleToggle = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const incrementCount = () => {
    setCount + 1;
  };

  const decrementCount = () => {
    setCount - 1;
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "Active") return !todo.completed;
    if (filter === "Completed") return todo.completed;
    return true;
  });

  const twoInOne = () => {
    handleOnClick();
    incrementCount();
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

            <button
              onClick={twoInOne}
              className="bg-[#3c82f6] ml-[6px] text-[#f9f9f9] text-sm rounded-[6px] cursor-pointer w-[59px] h-[40px] border-none text-[14px]"
            >
              Add
            </button>
          </div>

          <div className=" w-[345px] h-[32px] my-[20px] flex md:gap-[6px]">
            <Button filter={filter} setFilter={setFilter} />
          </div>

          <div className="mt-4 w-full flex flex-col gap-2">
            {filteredTodos.map((todo, index) => (
              <TaskItems
                key={index}
                task={todo.text}
                completed={todo.completed}
                onToggle={() => handleToggle(index)}
                onDelete={() => handleDelete(index)}
              />
            ))}
          </div>

          {todos.length === 0 && (
            <p className="text-[14px] text-[#6b7280] items-center pt-[12px] pb-[40px] font-[550]">
              No tasks yet. Add one above!
            </p>
          )}

          <div className=" flex place-content-between w-full text-[#6B7280]">
            <p>{count} of tasks completed</p>

            <button className="border-none text-[#ef4444] ">
              Clear completed
            </button>
          </div>
          <p className="">
            Powered by <a href="https://pinecone.mn/">Pinecone Academy</a>
          </p>
        </div>
      </section>
    </div>
  );
}
