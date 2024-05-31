import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {
  const [ShowCart, setShowCart] = useState(false);

  const ShowCartHandler = () => {
    setShowCart(true);
  };

  const HideCartHandler = () => {
    setShowCart(false);
  };
  return (
    // <div>
    //   <h2>Let's get started!</h2>
    // </div>
    <CartProvider>
      {ShowCart && <Cart onClose={HideCartHandler} />}
      <Header onShow={ShowCartHandler} />
      <Meals />
    </CartProvider>
  );
}

export default App;
