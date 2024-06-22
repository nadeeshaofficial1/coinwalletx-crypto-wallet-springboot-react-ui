import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AddCoin from './coins/AddCoin';
import EditCoin from './coins/EditCoin';
import ViewCoin from './coins/ViewCoin';
import AddPayments from './payments/AddPayments';
import ViewPayments from './payments/ViewPayments';
import './fonts.css';
import './pages/styles.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/addcoin' element={<AddCoin/>} />
        <Route exact path='/editcoin/:id' element={<EditCoin/>}/>
        <Route path='/viewcoin/:id' element={<ViewCoin/>} />
        <Route exact path='/addpayments' element={<AddPayments/>}/>
        <Route path='/view-payments' element={<ViewPayments/>} />
        <Route path="/" element={<Home />} />
      </Routes>
      </Router>


    </div>
  );
}

export default App;
