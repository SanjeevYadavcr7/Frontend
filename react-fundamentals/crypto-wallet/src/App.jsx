import { useEffect, useState } from 'react';
import CoinCard from './components/CoinCard';
import LimitSelector from './components/LimitSelector';
import FilterCoins from './components/FilterCoins';
import SortSelector from './components/SortSelector';

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

  const filteredCoins = coins
    .filter((coin) => (coin.name.toLowerCase()).includes(searchTerm) || (coin.symbol.toLowerCase().includes(searchTerm)))
    .slice()
    .sort((a, b) => {
      switch(sortBy) {
        case 'market_cap_desc': 
          return b.market_cap - a.market_cap;
        case 'market_cap_asc':
          return a.market_cap - b.market_cap;
        case 'price_desc': 
          return b.current_price - a.current_price;
        case 'price_asc': 
          return a.current_price - b.current_price;
        case 'change_desc': 
          return b.price_change_percentage_24h - a.price_change_percentage_24h;
        case 'change_asc':
          return a.price_change_percentage_24h - b.price_change_percentage_24h;
      }
    })

  return (
    <div>
      <h1>🚀 Crypto Dash</h1>
      {loading && <p>Loading...</p>}
      {error && <div className='error'>{error}</div>}

      <div className='top-controls'>
        <FilterCoins searchTerm={searchTerm} onFilterCoins={setSearchTerm} />
        <LimitSelector limit={limit} onLimitChange={setLimit} />
        <SortSelector sortBy={sortBy} onSortChange={setSortBy} />
      </div>

      {!loading && !error && (
        <main className='grid'>
          {
            filteredCoins.length 
            ? filteredCoins.map((coin) => (<CoinCard coin={coin} key={coin.id} />)) 
            : <p>No coins matched</p>
          }
        </main>
      )}
    </div>
  );
};

export default App;
