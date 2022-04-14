import "./App.css";
import Arts from "./components/Arts/Arts";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
    <div className="App min-h-screen bg-gray-900 items-center">
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <main>
          <Arts />
        </main>
      </div>
      </CartProvider>
  );
}

export default App;
