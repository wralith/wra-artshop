import { useState, useEffect } from "react";
import ArtItem from "./ArtItem/ArtItem";
import useHttp from "../Hooks/useHttp";

const API = import.meta.env.VITE_API_KEY;

const AvailableArts = () => {
  const [availablePieces, setAvailablePieces] = useState([]);

  const { isLoading, error, sendRequest: fetchPieces } = useHttp();

  useEffect(() => {
    const transformAvailablePieces = (piecesObj) => {
      const loadedPieces = [];

      for (const pieceKey in piecesObj) {
        loadedPieces.push({
          id: pieceKey,
          name: piecesObj[pieceKey].name,
          description: piecesObj[pieceKey].description,
          price: piecesObj[pieceKey].price,
        });
      }
      console.log(loadedPieces);
      setAvailablePieces(loadedPieces);
    };

    fetchPieces({ url: API }, transformAvailablePieces);
  }, [fetchPieces]);

  let content = <p>No equipments are in stocks... </p>

  if (availablePieces.length > 0) {
    content = availablePieces.map((art) => (
      <ArtItem
        key={art.id}
        id={art.id}
        name={art.name}
        description={art.description}
        price={art.price}
      />
    ));
  }

  if (error) {
    content = <p className="text-red-600">⚠ {error} ⚠</p>;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }

  

  return (
    <section className="m-auto">
      <ul className="flex gap-3 m-auto justify-center w-[90%] ">{content}</ul>
    </section>
  );
};

export default AvailableArts;
