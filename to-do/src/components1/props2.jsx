import React from "react";

export const ProductCard = (props) => {
  const { product, handleRemoveProd } = props;
  return (
    <div className="relative w-[100px] h-[200px] border-2 border-amber-400 rounded">
      <p
        onClick={() => handleRemoveProd(product.id)}
        className="absolute cursor-pointer hover:opacity-50 right-2 text-red-400"
      >
        X
      </p>
      <h2>{product.name}</h2>
      <p>${product.price}</p>
    </div>
  );
};
