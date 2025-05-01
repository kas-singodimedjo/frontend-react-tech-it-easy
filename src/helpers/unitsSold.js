import {inventory} from "../constants/inventory.js";

function UnitsSold() {
    console.log(inventory.reduce((acc, inventory) => acc + inventory.sold, 0));
    return inventory.reduce((acc, inventory) => acc + inventory.sold, 0);
}

export default UnitsSold