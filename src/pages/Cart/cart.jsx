import { ShowItem } from "../../components/ShowItem/showItem";
import { ShowItemCss } from "../../styles/style";

export const Cart = ({ cart }) => {
  return (
    <>
      <h3>Carrinho</h3>
      <ShowItemCss>
        {cart.map((item, index) => (
          <div key={index}>
            <ShowItem item={item} />
          </div>
        ))}
      </ShowItemCss>
    </>
  );
};
