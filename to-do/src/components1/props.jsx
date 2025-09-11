"use client";

import { useState } from "react";

export function GreedBut() {
  const [text1, setText1] = useState("1");
  const [text2, setText2] = useState("2");
  const [text3, setText3] = useState("3");
  const [text4, setText4] = useState("4");
  const [text5, setText5] = useState("5");
  const [active, setActive] = useState(null);
  const buttons = ["btn1", "btn2", "btn3", "btn4", "btn5"];

  return (
    <div className="flex">
      {buttons.map((text, index) => (
        <button
          key={index}
          onClick={() => setActive(index)}
          className="px-[10px] py-[3px] mr-[8px] rounded-[8px] cursor-pointer bg-green-800"
        >
          {text}
        </button>
      ))}
      <p>clicked button : {active}</p>
    </div>
  );
}

export function Sol1() {
  const [Name, setName] = useState("Badam-Ochir");
  const [Age, setAge] = useState("17");
  const [Gender, setGender] = useState("Male");
  const [output, setOutput] = useState("");

  return (
    <div>
      <div>
        <button
          className="px-[10px] py-[3px] mr-[8px] rounded-[8px] cursor-pointer bg-green-800"
          onClick={() => setOutput(Name)}
        >
          Name
        </button>
        <button
          className="px-[10px] py-[3px] mr-[8px] rounded-[8px] cursor-pointer bg-green-800"
          onClick={() => setOutput(Age)}
        >
          Age
        </button>
        <button
          className="px-[10px] py-[3px] mr-[8px] rounded-[8px] cursor-pointer bg-green-800"
          onClick={() => setOutput(Gender)}
        >
          Gender
        </button>
      </div>
      <p>Output : {output}</p>
    </div>
  );
}

export function Sol2() {
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
      <button
        onClick={handleDecrement}
        className="px-4 py-2 bg-blue-600 cursor-pointer rounded-[6px]"
      >
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

export function Sol3() {
  const [color, setColor] = useState("white");

  return (
    <div className="flex justify-center items-center ">
      <button
        className="px-[10px] py-[3px] mr-[8px] rounded-[8px] cursor-pointer bg-red-800"
        onClick={() => setColor("red")}
      >
        Red
      </button>
      <button
        className="px-[10px] py-[3px] mr-[8px] rounded-[8px] cursor-pointer bg-green-800"
        onClick={() => setColor("green")}
      >
        Green
      </button>

      <div
        className=" w-[500px] h-[500px] rounded-[10px] m-[100px]"
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
}

export function Sol4() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [textAge, setTextAge] = useState("");
  const [textName, setTextName] = useState("");

  return (
    <div>
      <div className="p-[30px]">
        <input
          value={textName}
          type="text"
          onChange={(e) => setTextName(e.target.value)}
        />
        <button
          onClick={() => setName(textName)}
          className="px-[10px] py-[3px] mr-[8px] rounded-[8px] cursor-pointer bg-green-800"
        >
          Name
        </button>
      </div>

      <div className="p-[30px]">
        <input
          value={textAge}
          type="text"
          onChange={(e) => setTextAge(e.target.value)}
        />
        <button
          onClick={() => setAge(textAge)}
          className="px-[10px] py-[3px] mr-[8px] rounded-[8px] cursor-pointer bg-green-800"
        >
          Age
        </button>
      </div>

      <p className="p-[30px]">
        Сурагчийн нэр: {name}, Нас: {age}
      </p>
    </div>
  );
}

export function sol5() {
  const [,] = useState();
  const [] = useState;
}

export const AddProduct = (props) => {
  const { prodAddHandler } = props;
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const priceChangeHandler = (e) => {
    setPrice(Number(e.target.value));
  };
  return (
    <div>
      <input
        value={name}
        onChange={nameChangeHandler}
        type="text"
        placeholder="name"
        className="border-2"
      />
      <input
        value={price}
        onChange={priceChangeHandler}
        type="number"
        placeholder="price"
        className="border-2"
      />
      <button onClick={() => prodAddHandler(name, price)} className="border-2">
        Add
      </button>
    </div>
  );
};
