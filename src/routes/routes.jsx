import { useState } from "react";
import { Route, Switch } from "react-router";
import { GeneratePromotion } from "../pages/GeneratePromotion/generatePromotion";
import { GenerateProtomotionCSS } from "../styles/style";
import { Cart } from "../pages/Cart/cart";
import { Link } from "react-router-dom";

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
  const [promotion, setPromotion] = useState("");

  return (
    <>
      <h4>
        Cabeçalho com: Home e <Link to="/cart"> Carrinho</Link>
      </h4>
      <Switch>
        <Route exact path="/">
          <GenerateProtomotionCSS>
            <GeneratePromotion
              products={products}
              cart={cart}
              setCart={setCart}
              setPromotion={setPromotion}
              promotion={promotion}
            />
          </GenerateProtomotionCSS>
        </Route>
        <Route path="/cart">
          <Cart cart={cart} />
        </Route>
      </Switch>
    </>
  );
};
