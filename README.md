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

## 📂 Project Structure

.
├── index.html
├── main.js
├── /src
│ ├── /cart
│ │ ├── cartFunctions.js
│ │ └── couponRules.js
│ ├── /components
│ │ ├── productRenderer.js
│ │ └── cartRenderer.js
│ └── /api
│ └── mockProducts.js
├── /tests
│ └── cartFunctions.test.js
├── /styles
│ └── main.css
└── README.md


---

## 🚀 Getting Started

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
