"use client";
import Image from "next/image";
import { useState } from "react";
import { GreedBut } from "@/components1/props";
import { Sol1 } from "@/components1/props";
import { Sol2 } from "@/components1/props";
import { Sol3 } from "@/components1/props";
import { Sol4 } from "@/components1/props";
import { Sol5 } from "@/components1/props";
import { AddProduct } from "@/components1/props";
import { ProductCard } from "@/components1/props2";

// export default function Greed() {
//   return (
//     <div>
//       <Sol4></Sol4>
//     </div>
//   );
// }

// const Page = () => {
//   const [inputVal, setInputVal] = useState("");
//   const [displayText, setDisplayText] = useState("");

//   const inputChangeHandler = (e) => {
//     setInputVal(e.target.value);
//   };

//   const clickHandler = () => {
//     setDisplayText(inputVal);
//   };

//   return (
//     <ControlledInput
//       inputVal={inputVal}
//       inputChangeHandler={inputChangeHandler}
//       clickHandler={clickHandler}
//       displayText={displayText}
//     />
//   );
// };

// export default Page;

const data = [
  {
    name: "iphone17",
    price: 18999,
  },
  {
    name: "MacBook",
    price: 15999,
  },
  {
    name: "car",
    price: 111111,
  },
];

const Page = () => {
  const [products, setProducts] = useState(data);
  return (
    <div className="p-4 flex gap-2 flex-wrap">
      {products.map((product) => {
        return <ProductCard key={product.name} product={product} />;
      })}
    </div>
  );
};

export default Page;
