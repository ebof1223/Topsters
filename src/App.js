import "./App.css";
import { allTimeFavorites } from "./Example.js";
import Toppings from "./Toppings";

function App() {
  return (
    <div className='App'>
      {
        <Toppings
          title={allTimeFavorites.title}
          albums={allTimeFavorites.albums}
        />
      }
    </div>
  );
}

export default App;
