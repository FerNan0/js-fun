export async function fetchProductsData() {
    let response = await fetch('data/data.json')
    let products = await response.json()
    return products
}