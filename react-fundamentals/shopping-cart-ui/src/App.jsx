import { ProductContext, useProducts } from './context/ProductContext';
import ProductList from './components/ProductList';
import Header from './components/Header';

const App = () => {
  const { loading, error, products } = useProducts();

  return (
    <>
      <Header />
      <div className='min-h-screen bg-gray-100 p-6'>
        <h1 className='text-3xl font-bold mb-6'>🛍️ Product Catalog</h1>
        {loading && <p>Loading...</p>}
        {error && <div className='error'>❌ {error}</div>}

        <ProductList products={products} />
      </div>
    </>
  );
};

export default App;
