import React from "react";
import backOfAWoman from "../../assets/images/back-of-a-woman.jpg";
import flowerCat from "../../assets/images/flower-cat.jpg";

const STATIC_ARTS = [
  {
    id: "a1",
    name: "Back of a Woman",
    imageURL: backOfAWoman,
    price: 45.5,
  },
  {
    id: "a2",
    name: "Flower Cat",
    imageURL: flowerCat,
    price: 45.5,
  },
];

const AvailableArts = () => {
  const artList = STATIC_ARTS.map((art) => (
    <li className="card flex flex-col gap-5">
      <span>{art.name}</span>
      <img src={art.imageURL} alt="art-img" width={300} />
    </li>
  ));

  return (
    <section>
      <ul className="m-3 flex gap-5 ">{artList}</ul>
    </section>
  );
};

export default AvailableArts;
