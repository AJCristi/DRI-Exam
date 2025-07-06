
import { fetchProducts } from '../api/api.js';
import { Cart } from '../services/cartFunctions.js';

import { renderCart } from './Cart.js';

export async function renderProductList(container) {
  const cart = new Cart();
  const products = await fetchProducts();

  container.innerHTML = `
  <div class="product-grid">
    ${products.map(p => `
      <div class="product">
        <img src="${p.image}" alt="${p.name}" width="100" />
        <h3>${p.name}</h3>
        <p>$${p.price}</p>
        <input type="number" min="1" value="1" id="qty-${p.id}" />
        <button data-id="${p.id}">Add to Cart</button>
      </div>
    `).join('')}
  </div>
  `;


  container.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      const id = parseInt(e.target.dataset.id);
      const product = products.find(p => p.id === id);
      const qty = parseInt(document.getElementById(`qty-${id}`).value);
      cart.addItem(product, qty);
      renderCart(document.getElementById('cart'));
    }
  });
}
