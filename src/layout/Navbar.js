import React from 'react'
import { Link } from 'react-router-dom'


export default function 
() {
  return (
<div className="d-flex justify-content-center mt-4" style={{ fontFamily: 'SFPRODISPLAYMEDIUM', fontSize: '15px' }}>
  <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark" style={{ width: '22%' }}>
    <div className="container-fluid mx-auto">
      <Link className="navbar-brand" to={'/'}>
        CoinWalletX
      </Link>
      <Link className='btn btn-outline-ligh gradient-btn' to='/addcoin'>
      🔼 ADD COIN
      </Link>
    </div>
  </nav>
</div>

  )
}
