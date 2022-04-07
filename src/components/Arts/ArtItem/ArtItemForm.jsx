import React, { useState, useEffect } from "react";

const ArtItemForm = () => {
  const [amount, setAmount] = useState(0);
  const handleIncrease = (e) => {
    e.preventDefault();
    if (amount <= 4) {
      setAmount(amount + 1)
    }
  };

  return (
    <form className="flex flex-row items-center justify-end gap-2">
      {/* <label htmlFor={props.item.id}></label> */}
      {/* <input id={props} className='flex'/> */}
      <p className="bg-orange-400 text-white rounded-full w-7 h-7 flex justify-center items-center">{amount}</p>
      <button
        className="rounded-xl bg-gray-800 p-2 text-white"
        onClick={handleIncrease}
      >
        Add
      </button>
    </form>
  );
};

export default ArtItemForm;
