import React from "react";
import ArtItemForm from "./ArtItemForm";

const ArtItem = (props) => {
  const price = `$${props.price.toFixed(2)}`


  //TODO Increase scale on hover
  return (
    <li className='card'>
      <div className='flex flex-col gap-5'>
        <h3 className="text-xl">{props.name}</h3>
        <div><img src={props.imgURL} alt="art-img" width={200} /></div>
        <div>{price}</div>
      </div>
      <div>
        <ArtItemForm/>
      </div>
    </li>
  );
};

export default ArtItem;
