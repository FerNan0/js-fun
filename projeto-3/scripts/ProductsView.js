import { doAction } from "./Actions.js";

export function showProducts(products) {
    console.log('Loading products...')
    let container = document.querySelector('.products');
    container.innerHTML = ''
    if (products.length > 0) {
        for (let p of products) {
            let card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src="${p.imagem}" alt="Produto 1" />
                <h2>${p.nome}</h2>
                <p>R$ ${p.preco}</p>
                <button class="btn-with-action">Comprar</button>                
            `;
            let btn = card.querySelector('.btn-with-action');
            btn.addEventListener('click', () => doAction(p));
            container.appendChild(card);            
        }
        return
    } 
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = '<p>Nenhum produto encontrado...</p>';
    container.appendChild(card);
}