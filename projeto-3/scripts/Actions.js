var productsAdded = []
export function doAction(p) {  
    productsAdded.push(p)  
    alert("Produto " + p.nome + " \nAdicionado ao carrinho")
}

export function getAddedProducts() {
    return productsAdded
}