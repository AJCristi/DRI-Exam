import { renderProductList } from './components/ProductList.js';
import { renderCart } from './components/Cart.js';

document.addEventListener('DOMContentLoaded', () => {
  const productListEl = document.querySelector('#product-list');
  const cartEl = document.querySelector('#cart');

  if (productListEl && cartEl) {
    renderProductList(productListEl);
    renderCart(cartEl);
  } else {
    console.error('Missing required DOM elements: #product-list or #cart');
  }
}); 