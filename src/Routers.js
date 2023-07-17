import React from 'react'
import { Route, Routes } from 'react-router-dom';
import App from "./App"
import Signup from './pages/signup/Signup';
import Signin from './pages/signin/Signin';
import Teachers from './Components/Teachers/Teachers';
import Ish from './Components/Teachers/ishstoli/Ish';
import Boshqaruv from './Components/Teachers/ishstoli/boshqaruv/Boshqaruv';
import People from './Components/Teachers/ishstoli/people/People';

function Routers() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/registratsiya' element={<Signup />} />
                <Route path='/kirish' element={<Signin />} />
                <Route path='/class' element={<Teachers />} />
                <Route path='/ish' element={<Ish />} />
                <Route path='/boshqaruv' element={<Boshqaruv />} />
                <Route path='/people' element={<People />} />
            </Routes>
        </div>
    )
}

export default Routers