# Veloura

A premium, modern clothing brand demo website built with React, Vite, Tailwind CSS, and Framer Motion.

This project showcases a luxury fashion storefront experience with animated sections, product browsing, cart interactions, checkout flow, payment page, toast notifications, and an order success screen. It is a frontend-only demo with no backend integration.

## Preview

Veloura is designed as a polished fashion brand landing and shopping experience with:

- a sticky luxury-style navigation bar
- a premium hero section
- three featured clothing products
- animated product cards and size selectors
- cart sidebar with subtotal calculation
- checkout details form
- separate payment page
- order success confirmation page
- responsive layout for desktop and mobile

## Features

### UI and Design

- Modern, minimal, premium fashion brand aesthetic
- Fully responsive layout
- Sticky top navigation bar
- Clean spacing and luxury-inspired typography
- Smooth scrolling between sections
- Footer with project branding

### Navigation

- Brand logo button in the navbar
- `About`, `Shop`, and `Contact` navigation links
- Cart button with live cart count badge
- React Router based page navigation

### Product Experience

- Three product cards with image, name, price, and description
- Size selection for each product
- Visual active state for selected size
- Animated hover effects on cards and buttons
- Add to cart interaction per product

### Cart Functionality

- Cart sidebar opens from the right
- Smooth animated cart drawer
- Product image, selected size, quantity, and price display
- Remove item from cart
- Automatic subtotal calculation
- Cart badge updates in real time

### Checkout and Payment Flow

- Delivery details form for checkout
- Continue to a separate payment page
- Real-world style payment UI
- Multiple payment method buttons
- Flexible demo inputs that accept user-entered values
- Order success confirmation page after payment

### Notifications and Animation

- Toast notifications using `react-toastify`
- Section and page animations using `framer-motion`
- Animated hero content
- Animated product grid and cards
- Animated cart overlay and drawer
- Animated payment and success page transitions

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- React Toastify

## Project Structure

```bash
src/
├── components/
│   ├── AboutSection.jsx
│   ├── CartSidebar.jsx
│   ├── CheckoutSection.jsx
│   ├── ContactSection.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   └── ProductGrid.jsx
├── data/
│   └── products.js
├── lib/
│   └── motion.js
├── pages/
│   ├── OrderSuccessPage.jsx
│   └── PaymentPage.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd my-react-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

### 5. Preview the production build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` starts the Vite development server
- `npm run build` creates a production build
- `npm run preview` previews the production build locally
- `npm run lint` runs ESLint

## Demo Flow

1. Browse the homepage and featured products.
2. Select a size for any product.
3. Add products to the cart.
4. Open the cart sidebar and review subtotal.
5. Proceed to checkout and fill in delivery details.
6. Continue to the payment page.
7. Submit the payment form.
8. View the order success confirmation page.

## Notes

- This is a frontend-only demo project.
- No real payment gateway or backend is connected.
- Form submission and payment are simulated for UI/UX demonstration.

## Future Improvements

- Backend integration for real orders
- Real authentication flow
- Product detail pages
- Category filters and search
- Coupon and discount system
- Real payment gateway integration

## Author

Built as a modern clothing brand demo website using React and Tailwind CSS.
