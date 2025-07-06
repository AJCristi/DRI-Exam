# 🛒 E-Commerce Cart App

A simple e-commerce cart app built with **Vite**, **JavaScript (ES6+)**, and **Jest** for testing.

## ✅ Features

- **Product Listing** from a mock API
- **Add to Cart** with quantity selection
- **Cart Summary** with subtotal and grand total
- **Coupon Code Support** with dynamic discount rules
- **Cart Persistence** via `localStorage`
- **Unit Testing** for cart logic with Jest

---

## 🛠️ Tech Stack

- Vite
- JavaScript (ES6+)
- HTML & CSS
- Jest (unit testing)

---

## Project Structure
```
.
├── public/
├── src/
│   ├── api/
│   │   └── api.js               
│   ├── cart/
│   │   ├── CartFunctions.js     
│   │   ├── Coupons.js           
│   ├── components/
│   │   ├── Cart.js              
│   │   └── ProductList.js       
│   ├── styles/
│   │   └── style.css            
│   ├── tests/
│   │   └── cartFunctions.test.js
│   └── main.js 
├── index.html                   
├── style.css                    
├── .gitignore
├── babel.config.js              
├── LICENSE
├── package.json
├── package-lock.json
└── README.md                    
```

---

## Getting Started

### 1. Clone the repository

```
git clone https://github.com/AJCristi/DRI-Exam.git
```

###2. Install dependencies

```
npm install
```

### 3. Run the app in development

```
npm run dev
```

### 4. Run unit tests

```
npm test
```

## Supported Coupons
| Code     | Description                               |
| -------- | ----------------------------------------- |
| `SAVE10` | 10% off items ≥ \$100, max \$50 per item  |

---

## Features Implemented

- Product list fetched from a mock API
- Grid-based product display with images, prices, quantity input, and "Add to Cart" button
- Fully functional shopping cart with:
  - Item quantity tracking
  - Remove item functionality
  - Subtotal per item
  - Grand total
- Coupon code support (`SAVE10`, `Easy-to-add via array`) with:
  - Minimum price conditions
  - Discount caps per item
- Dynamic coupon rule engine for easy expansion
- Cart state persisted using `localStorage`
- UI feedback on coupon success/error
- Unit tests for cart logic using Jest

---

## Assumptions

- Coupon codes are **case-insensitive** (e.g., `save10`, `SAVE10`, `Save10` all valid)
- Each product has a static price (no variants or dynamic pricing)
- Quantity input is validated to be `>= 1` before adding to cart
- Coupon discounts apply per item (not cart-wide)
- UI is kept minimal with a focus on functionality and testability
- Cart automatically refreshes on coupon changes or item updates

---

## Time Spent

- All in all 9-12 hours across 1 week due to prior commitments