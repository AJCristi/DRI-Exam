import { Cart } from "../services/cartFunctions";
import { COUPONS } from "../services/Coupons";

export function renderCart(container) {
    const cart = new Cart();
    const userCoupon = localStorage.getItem('coupon') || '';

    const items = cart.applyCoupon(userCoupon);

    container.innerHTML = `
    <div class="cart-coupon">
      <input
        type="text"
        id="coupon-input"
        placeholder="Enter coupon code"
        value="${userCoupon}"
      />
      <button id="apply-coupon">Apply Coupon</button>
      <p id="coupon-message" class="coupon-message"></p>
    </div>

    <div class="cart-items">
      ${items.map(item => `
        <div class="cart-card" data-id="${item.id}">
          <img src="${item.image}" alt="${item.name}" class="cart-image" />
          <div class="cart-info">
            <h4>${item.name}</h4>
            <p>
              Price: 
              ${item.discount > 0
            ? `<span class="strikethrough">$${item.price.toFixed(2)}</span> 
                   <span class="discounted">$${(item.price - item.discount).toFixed(2)}</span>`
            : `$${item.price.toFixed(2)}`
        }
            </p>
            <p>Quantity: ${item.quantity}</p>
            ${item.discount > 0 ? `<p class="discount">Discount: -$${item.discount.toFixed(2)}</p>` : ''}
            <p><strong>Subtotal:</strong> $${(item.discountedPrice || item.price * item.quantity).toFixed(2)}</p>
            <button data-id="${item.id}" class="remove-btn">Remove</button>
          </div>
        </div>
      `).join('')}
    </div>

    <div class="cart-total">
      <h3>Grand Total: $${cart.getTotal(userCoupon).toFixed(2)}</h3>
    </div>
  `;

    container.addEventListener('click', e => {
        if (e.target.matches('.remove-btn')) {
            const id = parseInt(e.target.dataset.id);
            const card = container.querySelector(`.cart-card[data-id="${id}"]`);
            if (card) {
                card.classList.add('fade-out');
                setTimeout(() => {
                    cart.removeItem(id);
                    renderCart(container);
                }, 300);
            }
        }
    });

    const applyBtn = container.querySelector('#apply-coupon');
    const input = container.querySelector('#coupon-input');
    const messageEl = container.querySelector('#coupon-message');

    input?.addEventListener('input', () => {
        applyBtn.disabled = input.value.trim() === '';
    });

    function showMessage(text, type = 'success') {
        messageEl.textContent = text;
        messageEl.className = `coupon-message ${type}`;
    }

    applyBtn?.addEventListener('click', () => {
        const code = input.value.trim().toUpperCase();
        if (COUPONS.hasOwnProperty(code)) {
            localStorage.setItem('coupon', code);
            showMessage('✅ Coupon applied successfully!', 'success');

            setTimeout(() => {
                renderCart(container);
            }, 600);
        } else {
            localStorage.removeItem('coupon');
            showMessage('❌ Invalid coupon code.', 'error');

            setTimeout(() => {
                renderCart(container);
            }, 1000);
        }
    });

}
