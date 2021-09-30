import { ShowItem } from "../../components/ShowItem/showItem";

export const Cart = ({ cart }) => {
  console.log(cart);
  return (
    <>
      <h5>Sou o carrinho</h5>
      {cart.map((i) => (
        <ShowItem promotion={i} key={i.id} />
      ))}
    </>
  );
};
