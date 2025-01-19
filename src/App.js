import {Routes, Route} from 'react-router-dom'
import {Home} from './components/Home'
import {AvailBooks} from './components/AvailBooks'
import {UnavailBooks} from './components/UnavailBooks'
import {CheckIn} from './components/CheckIn'
import {CheckOut} from './components/CheckOut'
import { Navbar } from './components/Navbar'


import './App.css';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/books/avail' element={<AvailBooks />}></Route>
      <Route path='/books/unavail' element={<UnavailBooks />}></Route>
      <Route path='/books/unavail/check-in' element={<CheckIn />}></Route>
      <Route path='/books/avail/check-out' element={<CheckOut />}></Route>
    </Routes>
    </>
  );
}



export default App;
