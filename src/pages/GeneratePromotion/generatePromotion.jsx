import { useState } from "react";
import { ListPromotion } from "../../components/ListPromotion/listPromotion";

export const GeneratePromotion = ({
  products,
  cart,
  setCart,
  promotion,
  setPromotion,
}) => {
  const [percentil, setPercentil] = useState();

  const getRandomArbitrary = (min, max) => {
    return (Math.random() * (max - min) + min).toFixed(0);
  };

  const handleButton = () => {
    let numberRandon = Number(getRandomArbitrary(1, 6));
    let percentual = Number(getRandomArbitrary(40, 90));

    const search = products.find((i) => {
      return i.id === numberRandon;
    });

    let desc = (Number(search.price) * Number(percentual)) / 100;
    let pay = (Number(search.price) * (100 - Number(percentual))) / 100;

    setPromotion({
      id: search.id,
      name: search.name,
      price: search.price,
      percentil: percentual,
      vlrDesc: (search.price * percentual) / 100,
      vlrPay: (search.price * (100 - percentual)) / 100,
    });
  };

  return (
    <>
      <h2>Sorteie seu desconto</h2>
      <button onClick={handleButton}>Sorteio!</button>
      {promotion && (
        <ListPromotion cart={cart} setCart={setCart} promotion={promotion} />
      )}
    </>
  );
};
