import { COUPONS } from "./Coupons";

export class Cart {
  constructor() {
    this.items = JSON.parse(localStorage.getItem('cart')) || [];
  }

  save() {
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  addItem(product, quantity) {
    this.items = JSON.parse(localStorage.getItem('cart')) || []; // 🔐 force fresh
    const existing = this.items.find(item => item.id === product.id);
    console.log('existing', existing);

    if (existing) {
      existing.quantity += quantity;
    } else {
      this.items.push({ ...product, quantity });
    }
    this.save();
  }

  removeItem(id) {
    this.items = this.items.filter(item => item.id !== id);
    this.save();
    this.items = JSON.parse(localStorage.getItem('cart')) || [];
  }

  applyCoupon(couponCode) {
    const coupon = COUPONS[couponCode];

    return this.items.map(item => {
      let discount = 0;

      if (coupon && item.price >= coupon.minPrice) {
        const rawDiscount = item.price * (coupon.discountPercent / 100);
        discount = Math.min(rawDiscount, coupon.maxDiscount);
      }

      const discountedPrice = (item.price - discount) * item.quantity;

      return {
        ...item,
        discount,
        discountedPrice
      };
    });
  }

  getTotal(couponCode) {
    const discountedItems = this.applyCoupon(couponCode);
    return discountedItems.reduce((sum, item) => sum + item.discountedPrice, 0);
  }
}
