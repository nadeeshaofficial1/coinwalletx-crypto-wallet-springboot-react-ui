import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import './styles.css';

export default function Home() {
    
    const [coins, setCoins] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        loadCoins();
    }, []);

    const loadCoins = async () => {
        const result = await axios.get("http://localhost:8083/allcoins");
        setCoins(result.data);
    }

    const deleteCoin = async (id) => {
        try {
            await axios.delete(`http://localhost:8083/coins/${id}`);
            loadCoins();
        } catch (error) {
            console.error("Error deleting coin:", error);
        }
    }

    return (
        
        
        <div className='container' style={{ fontFamily: 'SFPRODISPLAYMEDIUM', fontSize: '15px' }}>
            <h1><b>Buy, Store, Send Crypto</b></h1>
            <h4>Cryptocurrency Platform</h4>
            <p>🔥Trending Coins</p>
            <div className='py-4'>
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">🔑 Coin ID</th>
                            <th scope="col">₿ Cryptocurrency</th>
                            <th scope="col">📈 Crypto Volume</th>
                            <th scope="col">🌐 Block Chain ID</th>
                            <th scope="col">🖥️ Control</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coins.map((coin, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{coin.coinname}</td>
                                <td>{coin.coinvolume}</td>
                                <td>{coin.blockchainid}</td>
                                <td>
                                    <Link 
                                    className='btn mx-2 gradient-btn2'
                                    to={`/viewcoin/${coin.id}`}
                                    >View</Link>
                                    <Link
                                        className='btn mx-2 gradient-btn4'
                                        to={`/editcoin/${coin.id}`}
                                    >Edit</Link>
                                    <button
                                        className='btn mx-2 gradient-btn3'
                                        onClick={() => deleteCoin(coin.id)}
                                    >
                                        🗑️ Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Link
             className='btn mx-2 gradient-btn4'
            to={`/`}>📤 Send Crypto </Link>

        </div>
        
        
        
    );
}
