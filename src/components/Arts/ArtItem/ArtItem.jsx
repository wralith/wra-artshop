import React, { useContext } from "react";
import ArtItemForm from "./ArtItemForm";
import CartContext from "../../../store/cart-context";

const ArtItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const handleAddToCart = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  //TODO Increase scale on hover
  return (
    <li className="card">
      <div className="flex flex-col gap-5">
        <h3 className="rounded-md bg-gray-800 text-xl text-white">
          {props.name}
        </h3>
        <div>
          <img
            className="rounded-md border-2 border-gray-800"
            src={props.imgURL}
            alt="art-img"
            width={200}
          />
        </div>
      </div>
      <div className="mt-5 flex justify-around">
        <div className="flex items-center">{price}</div>
        <ArtItemForm onAddToCart={handleAddToCart} />
      </div>
    </li>
  );
};

export default ArtItem;
