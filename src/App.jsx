import "./App.css";
import Arts from "./components/Arts/Arts";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import { useState } from 'react'

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  return (
    <div className="App bg-gray-900 min-h-screen">
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Arts/>
      </main>
    </div>
  );
}

export default App;
