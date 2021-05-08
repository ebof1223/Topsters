import "./App.css";
import { allAlbums } from "./Example.js";
import Toppings from "./Toppings";

function App() {
  return (
    <div className='App'>
      <Toppings albums={allAlbums} />
    </div>
  );
}

export default App;
