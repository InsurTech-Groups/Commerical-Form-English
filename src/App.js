import React, {useEffect} from 'react';

import { Routes, Route } from 'react-router-dom';
import { ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { userData } from './data/userData';

import { ipAddress } from './apis/ipCollection';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import LandingPage from './pages/LandingPage';
import BusinessName from './questions/BusinessName';
import Coverage from './questions/Coverage';
import BusinessType from './questions/BusinessType';
import BusinessProfession from './questions/BusinessProfession';
import BusinessFounded from './questions/BusinessFounded';
import BusinessRevenue from './questions/BusinessRevenue';
import Employees from './questions/Employees';
import Address from './questions/Address';
import Name from './questions/Name';
import EmailPhone from './questions/EmailPhone';


export default function App() {

  //store userData in a session storage 
  useEffect(() => {
    sessionStorage.setItem('userData local', userData)
    ipAddress();
 
}, [])

  return (
    <div>
      <NavBar />
      <ToastContainer limit={1} position='bottom-left' theme='colored' />
      
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/business-name' element={<BusinessName />} />
        <Route path='/coverage' element={<Coverage />} />
        <Route path='/business-type' element={<BusinessType />} />
        <Route path='/business-profession' element={<BusinessProfession />} />
        <Route path='/founded' element={<BusinessFounded />} />
        <Route path='/revenue' element={<BusinessRevenue />} />
        <Route path='/employees' element={<Employees />} />
        <Route path='/address' element={<Address />} />
        <Route path='/name' element={<Name />} />
        <Route path='/email-phone' element={<EmailPhone />} />
      </Routes>

      <Footer/>
    </div>
  )

}