import { useState, useEffect } from "react";
import { Cart } from "../pages/Cart/cart";
import { ListProducts } from "../components/ListProducts/listProducts";

export const Routes = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Smart TV LED 50", price: 1999.0, vlrDesc: 0 },
    { id: 2, name: "PlayStation 5", price: 12000.0, vlrDesc: 0 },
    { id: 3, name: "Notebook Acer Nitro 5", price: 5109.72, vlrDesc: 0 },
    { id: 4, name: "Headset s fio Logitech G935", price: 1359.0, vlrDesc: 0 },
    { id: 5, name: "Tablet Samsung Galaxy Tab S7", price: 4844.05, vlrDesc: 0 },
    {
      id: 6,
      name: "Cadeira Gamer Cruiser Preta FORTREK",
      price: 1215.16,
      vlrDesc: 0,
    },
  ]);
  const [cart, setCart] = useState([]);
  const [seeProducts, setSeeProducts] = useState(false);
  const [seeCart, setSeeCart] = useState(false);
  const [seeBFriday, setBFriday] = useState(true);
  const [totCart, setTotCart] = useState(0);
  const [desc, setDesc] = useState(0);

  const getRandomArbitrary = (min, max) => {
    return (Math.random() * (max - min) + min).toFixed(0);
  };

  const handleClick = () => {
    setBFriday(false);
    const numberRandon = Number(getRandomArbitrary(1, 6));
    const percentual = Number(getRandomArbitrary(40, 90));

    const search = products.find((item) => {
      return item.id === numberRandon;
    });

    const descTemp = (Number(search.price) * Number(percentual)) / 100;

    products[numberRandon] = {
      id: search.id,
      name: search.name,
      price: search.price,
      vlrDesc: descTemp,
      percentil: percentual,
      vlrPay: (Number(search.price) * (100 - Number(percentual))) / 100,
    };
    setProducts([...products]);
  };

  useEffect(() => {
    if (cart[0] !== undefined) {
      setTotCart(
        cart.reduce((acc, item) => {
          return acc + item.price;
        }, 0)
      );
      setDesc(
        cart.reduce((acc, item) => {
          return acc + item.vlrDesc;
        }, 0)
      );
    }
  }, [cart]);
  console.log("desc: ", desc);
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
        <div>Total bruto do carrinho: {Number(totCart).toFixed(2)}</div>
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
