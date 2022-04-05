import "./App.css";
import Header from "./components/Layout/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <button className="border-2 border-black bg-blue-400 p-5">Hey</button>
      </div>
    </div>
  );
}

export default App;
