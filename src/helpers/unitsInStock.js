import UnitsSold from "./unitsSold.js";
import UnitsBought from "./unitsBought.js";


function UnitsInStock() {

   console.log(UnitsBought() - UnitsSold());
   return (UnitsBought() - UnitsSold())
}

export default UnitsInStock