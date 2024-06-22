import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import QRCode from 'qrcode.react'; // Import the QRCode library

export default function ViewCoin() {
    const [coins, setCoins] = useState({
        coinname: '',
        coinvolume: '',
        blockchainid: '',
    });
    const { id } = useParams();

    useEffect(() => {
        loadCoins();
    }, []);

    const loadCoins = async () => {
        const result = await axios.get(`http://localhost:8083/coins/${id}`);
        setCoins(result.data);
    };

    const qrCodeData = `${coins.coinname}\n${coins.coinvolume}\n${coins.blockchainid}`;

    return (
        <div className="container" style={{ fontFamily: 'SFPRODISPLAYMEDIUM', fontSize: '15px' }}>
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4 text-white">Coin Details</h2>
                    <div className="card">
                        <div className="card-header">
                            Details of coin id : {coins.id}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Coin Name:</b>
                                    {coins.coinname}
                                </li>
                                <li className="list-group-item">
                                    <b>Coin Volume:</b>
                                    {coins.coinvolume}
                                </li>
                                <li className="list-group-item">
                                    <b>Block Chain ID:</b>
                                    {coins.blockchainid}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-3">
                        {/* Add QRCode with all details */}
                        <QRCode value={qrCodeData} />
                    </div>
                    <Link className="btn my-2 gradient-btn3" to={'/'}>
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
