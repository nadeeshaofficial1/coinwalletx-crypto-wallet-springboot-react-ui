import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AddCoin() {

    let navigate=useNavigate()

    const [coins,setCoins]=useState({
        coinname:'',
        coinvolume:'',
        blockchainid:''
    })

    const{coinname,coinvolume,blockchainid}=coins
    const onInputChange=(e)=>{
        setCoins({...coins, [e.target.name]:e.target.value});

    }
    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post('http://localhost:8083/coins', coins);
        navigate('/');

    }

  return (
    <div className='container'style={{ fontFamily: 'SFPRODISPLAYMEDIUM', fontSize: '15px' }}>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4 text-white'>Add Coin</h2>

                <form onSubmit={(e)=> onSubmit(e)}>

                <div className='mb-3'>
                    <label htmlFor='coinname' className='form-label text-white'>
                        Coin Name
                    </label>
                    <input
                    type={'text'}
                    className='form-control'
                    placeholder='Enter Coin Name'
                    name='coinname'
                    value={coinname}
                    onChange={(e)=>onInputChange(e)}
                    />

                </div>
                <div className='mb-3'>
                    <label htmlFor='coinvolume' className='form-label text-white'>
                        Coin Volume
                    </label>
                    <input
                    type={'text'}
                    className='form-control'
                    placeholder='Enter Coin Volume'
                    name='coinvolume'
                    value={coinvolume}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='blockchainid' className='form-label text-white'>
                        Block Chain ID
                    </label>
                    <input
                    type={'text'}
                    className='form-control'
                    placeholder='Enter Block Chain ID'
                    name='blockchainid'
                    value={blockchainid}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <button type='submit' className='btn gradient-btn4'>Submit</button>
                <Link className='btn mx-2 gradient-btn3' to='/'>Cancel</Link>
                </form>

            </div>
        </div>

    </div>
  )
}
