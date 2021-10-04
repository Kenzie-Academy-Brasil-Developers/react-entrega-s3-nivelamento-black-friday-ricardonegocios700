import { ShowItemCss } from "../../styles/style";
import { ShowItem } from "../ShowItem/showItem";

export const ListProducts = ({ products, setCart, cart }) => {
  const handleClick = (item) => {
    setCart([...cart, item]);
  };
  return (
    <>
      <h3>Lista de produtos</h3>
      <ShowItemCss>
        {products.map((item, index) => (
          <div key={index}>
            <ShowItem item={item} />
            <button onClick={() => handleClick(item)}>To cart</button>
          </div>
        ))}
      </ShowItemCss>
    </>
  );
};
