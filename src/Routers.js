import React from 'react'
import { Route, Routes } from 'react-router-dom';
import App from "./App"
import Signup from './pages/signup/Signup';
import Signin from './pages/signin/Signin';

function Routers() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/registratsiya' element={<Signup />} />
                <Route path='/kirish' element={<Signin />} />
            </Routes>
        </div>
    )
}

export default Routers