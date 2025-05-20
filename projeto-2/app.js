let container = document.querySelector('.produtos');

for (let a of array) {    
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${ a.img }" alt="${ a.name }" />
      <h2>${ a.name }</h2>
      <p>R$ ${ a.price }</p>
      <button>Comprar</button>
    `;
    container.appendChild(card);
}
