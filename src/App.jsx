import './App.css';
import OriginalStock from "./helpers/unitsBought.js";
import UnitsSold from "./helpers/unitsSold.js";
import UnitsInStock from "./helpers/unitsInStock.js";

function App() {
  return (
      <>
        <h1>Tech it easy dashboard</h1>
        <h2 id="originalStock">Ingekocht: <OriginalStock /></h2>
          <h2 id="unitsSold">Verkocht: <UnitsSold/></h2>
        <h2 id="unitsInStock">Voorraad: <UnitsInStock/></h2>
      </>
  )
}

export default App
