import { useEffect, useState } from "react";
import { ListPromotion } from "../../components/ListPromotion/listPromotion";

export const GeneratePromotion = ({ products }) => {
  const [promotion, setPromotion] = useState("");
  const [percentil, setPercentil] = useState();

  const getRandomArbitrary = (min, max) => {
    return (Math.random() * (max - min) + min).toFixed(0);
  };
  const handleButton = () => {
    let numberRandon = Number(getRandomArbitrary(1, 6));

    setPromotion(
      products.find((i) => {
        return i.id === numberRandon;
      })
    );
    setPercentil(Number(getRandomArbitrary(40, 90)));
  };

  return (
    <>
      <h2>Participe de nosso sorteio</h2>
      <button onClick={handleButton}>Sorteio!</button>
      {promotion && (
        <ListPromotion promotion={promotion} percentil={percentil} />
      )}
    </>
  );
};
