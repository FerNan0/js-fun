import { showProducts } from "./ProductsView.js"

export function search(products) {
    let field = document.getElementById('searchInput')

    field.addEventListener('input', (event) => {
        let text = event.target.value.toLowerCase()
        console.log(text)
        let filtered = products.filter((p) => {
            return p.nome.toLowerCase().includes(text)
        })

        showProducts(filtered)
    })

}