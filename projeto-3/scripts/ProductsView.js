import { doAction } from "./Actions.js";
import { doRemoveAction, value } from "./Actions.js";
export function showProducts(products) {
    let field = document.getElementById('searchInput')
    let icon = document.getElementById('searchIcon')
    icon.hidden = false
    field.hidden = false    
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
        updateValueLabel()
        return
    }
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = '<p>Nenhum produto encontrado...</p>';
    container.appendChild(card);
}

export function showKartProducts(products) {
    let field = document.getElementById('searchInput')
    field.hidden = true
    let icon = document.getElementById('searchIcon')
    icon.hidden = true
    let container = document.querySelector('.products');
    container.innerHTML = ''
    if (products.length > 0) {
        var existedProducts = []
        for (let p of products) {
            if (existedProducts.filter(item => item === p).length == 0) {
                let length = products.filter(item => item.nome === p.nome).length
                existedProducts.push(p)
                let card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                    <img src="${p.imagem}" alt="Produto 1" />
                    <h2>${p.nome}</h2>
                    <p>R$ ${p.preco}</p>
                    <p>Quantidade ${length}</p>
                    <button class="btn-with-action">Remover</button>                
                `;
                let btn = card.querySelector('.btn-with-action');
                btn.addEventListener('click', () => doRemoveAction(p));
                container.appendChild(card);   
            }         
        } 
        updateValueLabel()       
        return
    } 
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = '<p>Carrinho vazio...</p>';
    container.appendChild(card);
}

export function updateValueLabel() {
    let totalValue = document.getElementById('amount')
    totalValue.innerHTML = ''
    totalValue.textContent = value.toFixed(2)
}