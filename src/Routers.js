import React from 'react'
import { Route, Routes } from 'react-router-dom';
import App from "./App"
import Signup from './pages/signup/Signup';
import Signin from './pages/signin/Signin';
import Teachers from './Components/Teachers/Teachers';
import Ish from './Components/Teachers/ishstoli/Ish';
import Boshqaruv from './Components/Teachers/ishstoli/boshqaruv/Boshqaruv';
import People from './Components/Teachers/ishstoli/people/People';
import Sinflar from './Components/Teachers/ishstoli/sinf/Sinflar';
import Yaratish from './Components/Teachers/ishstoli/yaratish/Yaratish';

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
                <Route path='/sinflar' element={<Sinflar />} />
                <Route path='/yaratish' element={<Yaratish />} />
            </Routes>
        </div>
    )
}

export default Routers