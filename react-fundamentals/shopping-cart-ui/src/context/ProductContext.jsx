import { createContext, useState, useEffect, useContext } from 'react';

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const isProductInit = localStorage.getItem('products');
        if (!isProductInit) {
          const productsResp = await fetch('/api/products');
          if (!productsResp.ok) {
            throw new Error('Failed to fetch products.');
          }
          const products = await productsResp.json();
          localStorage.setItem('products', JSON.stringify(products));
          setProducts(products);
        } else {
          const products = JSON.parse(localStorage.getItem('products'));
          setProducts(products);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductContext);
}
