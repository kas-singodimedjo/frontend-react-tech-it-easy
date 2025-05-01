import {inventory} from "../constants/inventory.js";

function OriginalStock() {
    console.log(inventory.reduce((acc, inventory) => acc + inventory.originalStock, 0));
    return inventory.reduce((acc, inventory) => acc + inventory.originalStock, 0);

}


export default OriginalStock