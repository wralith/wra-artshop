import "./App.css";
import Arts from "./components/Arts/Arts";
import Header from "./components/Layout/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Arts/>
      </main>
    </div>
  );
}

export default App;
