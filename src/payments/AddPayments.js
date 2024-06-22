import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AddPayments() {

    let navigate=useNavigate()

    const [pays,setPayments]=useState({
        userid:'',
        amount:'',
        paycoin:''
    })

    const{userid,amount,paycoin}=pays
    const onInputChange=(e)=>{
        setPayments({...pays, [e.target.name]:e.target.value});

    }
    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post('http://localhost:8084/payments', pays);
        navigate('/');

    }

  return (
    <div className='container'style={{ fontFamily: 'SFPRODISPLAYMEDIUM', fontSize: '15px' }}>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4 text-white'>Send Payment</h2>

                <form onSubmit={(e)=> onSubmit(e)}>

                <div className='mb-3'>
                    <label htmlFor='userid' className='form-label text-white'>
                        User ID
                    </label>
                    <input
                    type={'text'}
                    className='form-control'
                    placeholder='Enter User ID'
                    name='userid'
                    value={userid}
                    onChange={(e)=>onInputChange(e)}
                    />

                </div>
                <div className='mb-3'>
                    <label htmlFor='amount' className='form-label text-white'>
                        Coin Amount
                    </label>
                    <input
                    type={'text'}
                    className='form-control'
                    placeholder='Enter Amount'
                    name='amount'
                    value={amount}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className='mb-3'>
    <label htmlFor='paycoin' className='form-label text-white'>
        Pay Coin
    </label>
    <select
        className='form-control'
        name='paycoin'
        value={paycoin}
        onChange={(e) => onInputChange(e)}
    >
        <option value='' disabled>Select Coin Name</option>
        <option value='bitcoin'>Bitcoin</option>
        <option value='ethereum'>Ethereum</option>
        <option value='litecoin'>Litecoin</option>
        <option value='usdt'>USDt</option>
        {/* Add more options as needed */}
    </select>
</div>

                <button type='submit' className='btn gradient-btn4'>Send</button>
                <Link className='btn mx-2 gradient-btn3' to='/'>Cancel Payment</Link>
                </form>

            </div>
        </div>

    </div>
  )
}
