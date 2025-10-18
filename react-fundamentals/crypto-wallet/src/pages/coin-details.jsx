import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import Spinner from "../components/Spinner";
import CoinChart from "../components/CoinChart";

const APP_URL = import.meta.env.VITE_COIN_URL;

const CoinDetails = () => {
    const {id} = useParams();
    const [coinData, setCoinData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCoinData = async () => {
            try {
                const coinJSON = await(await fetch(`${APP_URL}/${id}`)).json();
                if(!coinJSON) throw new Error('Failed to fetch coin data');
                setCoinData(coinJSON); 
            } catch(err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchCoinData();
    }, [])

    return (
        <div className="coin-details-container">
            <Link to='/'>← Back To Home</Link>
            <h1 className="coin-details-title">
                {coinData && coinData.symbol ? `${coinData.name} (${coinData.symbol.toUpperCase()})` : 'Coin Data'}
            </h1>

            {loading && <Spinner />}
            {error && <div className="error">❌ {error}</div>}

            {
                !loading && !error && (
                <>
                    <img
                     src={coinData.image.large} 
                     alt={coinData.name} 
                     className="coin-details-image"
                    />

                    <p>{coinData.description.en.split('. ')[0] + '.'}</p>
                    <div className="coin-details-info">
                        <h3>Rank: {coinData.market_cap_rank}</h3>
                        <h3>Current Price: ${coinData.market_data.current_price.usd.toLocaleString()}</h3>
                    </div>

                    <CoinChart coinId={coinData.id} />

                    <div className="coin-details-links">
                        { coinData.links.homepage[0] && (
                            <p>
                                🌐{' '}
                                <a 
                                    href={coinData.links.homepage[0]}
                                    target="_blank"
                                    rel='noopener noreferrer'
                                >
                                    Website
                                </a>
                            </p>
                        )}
                    </div>
                </>
            )}

            {!loading && !error && !coinData && <p>⚠️ No Data Found!</p>}

        </div>
    );
}
 
export default CoinDetails;