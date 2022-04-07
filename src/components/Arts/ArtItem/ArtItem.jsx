import React from "react";
import ArtItemForm from "./ArtItemForm";

const ArtItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  //TODO Increase scale on hover
  return (
    <li className="card">
      <div className="flex flex-col gap-5">
        <h3 className="rounded-md bg-gray-800 text-xl text-white">
          {props.name}
        </h3>
        <div>
          <img className='rounded-md border-gray-800 border-2' src={props.imgURL} alt="art-img" width={200} />
        </div>
      </div>
      <div className="mt-5 flex justify-around">
        <div className="flex items-center">{price}</div>
        <ArtItemForm />
      </div>
    </li>
  );
};

export default ArtItem;
