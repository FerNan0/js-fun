import { getAddedProducts } from "./Actions.js"
import { fetchProductsData } from "./ProductsService.js"
import { showProducts } from "./ProductsView.js"
import { search } from "./SearchProducts.js"

export async function main() {
    console.log('No main.js eu to mesmo')    
    let products = await fetchProductsData()
    
    showProducts(products)
    search(products)
}

export function loadKart() {
    let products = getAddedProducts()
    showProducts(products)
}
window.loadKart = loadKart;
window.main = main;

main()