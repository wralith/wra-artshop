import "./App.css";
import Arts from "./components/Arts/Arts";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="App bg-gray-900 min-h-screen">
      <Cart />
      <Header />
      <main>
        <Arts/>
      </main>
    </div>
  );
}

export default App;
