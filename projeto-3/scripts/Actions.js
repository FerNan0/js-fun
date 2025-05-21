import { showKartProducts, updateValueLabel } from "./ProductsView.js";

var productsAdded = []
export var value = 0 
export function doAction(p) {  
    productsAdded.push(p)
    value += p.preco
    updateValueLabel()
    alert("Produto " + p.nome + " \nAdicionado ao carrinho")
}

export function getAddedProducts() {
    return productsAdded
}

export function doRemoveAction(p) {
    let count = productsAdded.filter(item => item === p).length;
    productsAdded = productsAdded.filter(item => item !== p);
    value -= p.preco * count;
    updateValueLabel()
    showKartProducts(productsAdded);
}
