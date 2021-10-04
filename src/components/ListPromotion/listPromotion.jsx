import { ShowItem } from "../ShowItem/showItem";

export const ListPromotion = ({ cart, setCart, promotion }) => {
  // const desconto = (promotion.price * percentil) / 100;
  const handleClick = () => {
    setCart([...cart, promotion]);
  };
  console.log(cart);
  return (
    <>
      <h2>Parabéns!</h2>
      <ShowItem promotion={promotion} />
      <button onClick={handleClick}>Adicionar ao carrinho</button>
    </>
  );
};
