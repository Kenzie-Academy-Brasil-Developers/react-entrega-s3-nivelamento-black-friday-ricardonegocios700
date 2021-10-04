import { useState, useEffect } from "react";
import { Cart } from "../pages/Cart/cart";
import { ListProducts } from "../components/ListProducts/listProducts";

export const Routes = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Smart TV LED 50", price: 1999.0 },
    { id: 2, name: "PlayStation 5", price: 12000.0 },
    { id: 3, name: "Notebook Acer Nitro 5", price: 5109.72 },
    { id: 4, name: "Headset s fio Logitech G935", price: 1359.0 },
    { id: 5, name: "Tablet Samsung Galaxy Tab S7", price: 4844.05 },
    { id: 6, name: "Cadeira Gamer Cruiser Preta FORTREK", price: 1215.16 },
  ]);
  const [cart, setCart] = useState([]);
  const [seeProducts, setSeeProducts] = useState(false);
  const [seeCart, setSeeCart] = useState(false);
  const [seeBFriday, setBFriday] = useState(true);
  const [totCart, setTotCart] = useState();
  const [desc, setDesc] = useState(0);
  // const [pay, setPay] = useState();
  // const [percentual, setPercentual] = useState();
  let pay, percentual;

  const getRandomArbitrary = (min, max) => {
    return (Math.random() * (max - min) + min).toFixed(0);
  };

  const handleClick = () => {
    setBFriday(false);
    let numberRandon = Number(getRandomArbitrary(1, cart.length));
    percentual = Number(getRandomArbitrary(40, 90));

    const search = cart[numberRandon];
    setDesc((Number(search.price) * Number(percentual)) / 100);
    pay = (Number(search.price) * (100 - Number(percentual))) / 100;

    cart[numberRandon] = {
      id: search.id,
      name: search.name,
      price: search.price,
      vlrDesc: desc,
      percentil: percentual,
      vlrPay: pay,
    };
    setCart([...cart]);
  };

  useEffect(() => {
    setTotCart(
      cart.reduce((acc, item) => {
        return acc + item.price;
      }, 0) - desc
    );
  }, [cart]);

  return (
    <>
      {seeBFriday && (
        <button class="btn-see" onClick={handleClick}>
          Black Friday
        </button>
      )}
      <button class="btn-see" onClick={() => setSeeProducts(!seeProducts)}>
        {seeProducts ? "Ocultar produtos" : "Exibir produtos"}
      </button>
      <button class="btn-see" onClick={() => setSeeCart(!seeCart)}>
        {seeCart ? "Ocultar carrinho" : "Exibir carrinho"}
      </button>
      <p>
        <div>Total do carrinho: {Number(totCart).toFixed(2)}</div>
        <div>Total do desconto: {Number(desc).toFixed(2)}</div>
        <div>Total a pagar: {(Number(totCart) - Number(desc)).toFixed(2)}</div>
      </p>
      {seeProducts && (
        <ListProducts products={products} setCart={setCart} cart={cart} />
      )}
      {seeCart && <Cart cart={cart} />}
    </>
  );
};
