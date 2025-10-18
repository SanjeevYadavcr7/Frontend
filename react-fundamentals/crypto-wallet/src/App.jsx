import { useEffect, useState } from 'react';
import HomePage from './pages/home';
import { Route, Routes } from 'react-router';
import AboutPage from './pages/about';
import Header from './components/Header';
import NotFoundPage from './pages/not-found';
import CoinDetails from './pages/coin-details';

const API_URL = import.meta.env.VITE_APP_URL;

const App = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('market_cap_desc');

  useEffect(() => {
    const fetchCoinsData = async () => {
      try {
        const coinsData = await (await fetch(`${API_URL}&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`)).json();
        setCoins(coinsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCoinsData();
  }, [limit]);


  return (
    <>
    <Header />
    <Routes>
      <Route 
        path='/' 
        element={
          <HomePage 
            coins={coins}
            loading={loading}
            error={error}
            limit={limit}
            searchTerm={searchTerm}
            sortBy={sortBy}
            setLimit={setLimit}
            setSearchTerm={setSearchTerm}
            setSortBy={setSortBy}  
          />
        } 
      />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/coin/:id' element={<CoinDetails />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
    </>
  );
};

export default App;
