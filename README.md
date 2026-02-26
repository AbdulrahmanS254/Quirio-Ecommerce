# Quirio — Redux Toolkit Practice Project

A small e-commerce-style React app built to **practice and learn Redux Toolkit**. The app focuses on core RTK concepts: slices, async thunks, store setup, and using state in components—without auth or admin features.

---

## What This Project Covers

### Redux Toolkit concepts used

- **`createSlice`** — Cart and products state with reducers and generated actions.
- **`createAsyncThunk`** — Fetching products list and single product from the [DummyJSON](https://dummyjson.com) API; handles loading, success, and error.
- **`configureStore`** — Single store with multiple slice reducers (`products`, `cart`).
- **`useSelector`** — Reading from the store (cart items, cart count, products, single product, loading/error).
- **`useDispatch`** — Dispatching actions (add to cart, remove, change quantity, fetch products).
- **Persistence** — Cart slice syncs to `localStorage` so the cart survives refresh.

### App flow

1. **Home** — Landing with links into the app.
2. **Products** — Paginated list from API; each product can be added to cart. Uses `fetchProducts` and async state (`status`, `error`).
3. **Product details** — Single product by ID via `fetchProductById`; add to cart with quantity.
4. **Cart** — List from Redux cart slice; update quantity, remove items; order summary (subtotal, tax). Navbar shows cart item count from the same slice.

---

## Tech stack

- **React** (Vite)
- **Redux Toolkit** — state management
- **React Router** — routing
- **Tailwind CSS** — styling
- **Motion** — animations
- **Axios** — API calls (inside async thunks)
- **React Icons** — UI icons

---

## Project structure (Redux-related)

```
src/
├── app/
│   └── store.js              # configureStore, root reducer (products + cart)
├── features/
│   ├── productsSlice.js       # createSlice + createAsyncThunk (fetch list, fetch by id)
│   └── cartSlice.js          # createSlice, localStorage persistence
├── pages/
│   ├── Home/
│   ├── Products/             # uses fetchProducts, useSelector for items/status/error
│   ├── ProductDetails/       # uses fetchProductById, addToCart
│   └── Cart/                 # uses cart slice (items, add/remove/quantity)
└── components/
    └── layout/Navbar/        # useSelector for cart count
```

---

## Running the project

```bash
npm install
npm run dev
```

Open the app, browse products, add to cart, and open the Cart page to see Redux state and persistence in action.

---

## Learning takeaways

- **Slices** define state shape, reducers, and actions in one place.
- **Async thunks** keep API logic and pending/fulfilled/rejected handling in the slice.
- **Single store** with multiple reducers keeps products and cart separate but in one tree.
- **Selectors** (`useSelector`) and **dispatch** (`useDispatch`) connect components to the store without prop drilling.
- **Persistence** (e.g. cart in `localStorage`) can live inside reducers for a simple, predictable flow.

Use this repo as a reference for how to structure a small RTK-based React app (slices, async data, and cart with persistence).
