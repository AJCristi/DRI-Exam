import { Cart } from "../cart/cartFunctions";

beforeAll(() => {
    global.localStorage = {
        store: {},
        getItem(key) {
            return this.store[key] || null;
        },
        setItem(key, value) {
            this.store[key] = value.toString();
        },
        removeItem(key) {
            delete this.store[key];
        },
        clear() {
            this.store = {};
        }
    };
});


describe('Cart logic', () => {
    let cart;

    beforeEach(() => {
        cart = new Cart();
        cart.items = [
            { id: 1, name: 'Monitor', price: 400, quantity: 1 },
            { id: 2, name: 'Laptop', price: 800, quantity: 1 },
            { id: 3, name: 'Mouse', price: 50, quantity: 2 },
        ];
    });

    test('applies SAVE10 only to items >= $100 and caps discount at $50', () => {
        const result = cart.applyCoupon('SAVE10');

        expect(result[0].discount).toBe(40); // Monitor: 10% of 400
        expect(result[1].discount).toBe(50); // Laptop: 10% of 800 = 80 but capped
        expect(result[2].discount).toBe(0);  // Mouse: not eligible

        expect(result[0].discountedPrice).toBe((400 - 40) * 1);
        expect(result[1].discountedPrice).toBe((800 - 50) * 1);
        expect(result[2].discountedPrice).toBe(50 * 2);
    });

    test('total reflects applied discounts', () => {
        const total = cart.getTotal('SAVE10');
        // (400 - 40) + (800 - 50) + (50 * 2)
        expect(total).toBeCloseTo(360 + 750 + 100);
    });

    test('invalid coupon applies no discounts', () => {
        const result = cart.applyCoupon('INVALID');
        expect(result.every(i => i.discount === 0)).toBe(true);
    });

    test('removing an item updates cart correctly', () => {
        cart.removeItem(2); // Remove Laptop
        expect(cart.items.find(i => i.id === 2)).toBeUndefined();
        expect(cart.items.length).toBe(2);
    });
});
