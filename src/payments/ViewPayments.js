// ViewPayments.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QRCode from 'qrcode.react'; // Import the QRCode library
import './ViewPayments.css'; // Import the CSS file

export default function ViewPayments() {
  const [pays, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get('http://localhost:8084/allpayments');
        setPayments(response.data);
      } catch (error) {
        console.error('Error fetching payments', error);
      }
    };

    fetchPayments();
  }, []);

  return (
    <div className='container view-payments-container'>
      <h2 className='text-center m-4 view-payments-header text-white'>View Payments</h2>
      <a className="btn my-2 gradient-btn3" href="/">Back to Home</a>
      <ul className='payment-list'>
        {pays.map((payment) => (
          <li key={payment.id} className='payment-item'>
            <span className='user-id'>User ID: {payment.userid}</span>
            <span className='amount'>Amount: {payment.amount}</span>
            <span className='pay-coin'>Pay Coin: {payment.paycoin}</span>
            <div className='qrcode-container'>
              <QRCode value={`${payment.id},${payment.userid},${payment.amount},${payment.paycoin}`} />
            </div>
            
          </li>
        ))}
      </ul>
      
    </div>
  
  );
}
