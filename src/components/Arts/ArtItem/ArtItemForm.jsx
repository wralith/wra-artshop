import React, { useState, useRef } from "react";

const ArtItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-row items-center justify-end gap-2"
    >
      <input
      defaultValue={1}
        ref={amountInputRef}
        min={1}
        max={5}
        type="number"
        className="flex p-1 w-12 pl-3 items-center justify-center rounded-xl bg-orange-400 text-white"
      ></input>
      <button className="w-8 rounded-xl bg-gray-800 p-1 text-white hover:bg-gray-600">
        +
      </button>
      {!amountIsValid && (
        <p className="text-red-700">Please enter a valid amount (1-5).</p>
      )}
    </form>
  );
};

export default ArtItemForm;
