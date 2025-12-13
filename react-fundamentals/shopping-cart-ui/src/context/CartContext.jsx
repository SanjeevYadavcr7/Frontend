import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const cartItems = JSON.parse(localStorage.getItem('cart'));
  const [cart, setCart] = useState(cartItems ?? []);

  const addToCart = (product) => {
    setCart((prev) => {
      const alreadyInCart = prev.find((item) => item.id === product.id);
      let updatedCartItems = [];
      if (alreadyInCart) {
        updatedCartItems = prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      updatedCartItems = [...prev, { ...product, qty: 1 }];
      localStorage.setItem('cart', JSON.stringify(updatedCartItems));
      return updatedCartItems;
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) => {
      const updatedCartItems = prev
        .map((item) =>
          item.id === productId ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0);
      localStorage.setItem('cart', JSON.stringify(updatedCartItems));
      return updatedCartItems;
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  return useContext(CartContext);
};
