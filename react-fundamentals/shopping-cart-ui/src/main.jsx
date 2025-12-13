import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ProductProvider } from './context/ProductContext.jsx';
import { StrictMode } from 'react';
import { CartProvider } from './context/CartContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductProvider>
  </StrictMode>
);
