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
import NewUser from './Components/Teachers/ishstoli/yangiOdam/NewUser';
import Child from './Components/Teachers/ishstoli/people/child/Child';
import Arxiv from './Components/Teachers/ishstoli/people/arxiv/Arxiv';
import Myschool from "./Components/Teachers/myschool/Myschool"
import Odamlar from './Components/Teachers/myschool/teacher/Odamlar';
import Yaratish from './Components/Teachers/ishstoli/yaratish/Yaratish';
import Updateuser from './pages/updateuser/Updateuser';
import Showdata from './pages/updateuser/show/Showdata';
import Edituser from './pages/edit/Edituser';
import Loader from './pages/loader/Loader';

function Routers() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/registratsiya' element={<Signup />} />
                <Route path='/kirish' element={<Signin />} />
                <Route path='/class' element={<Teachers />} >
                    <Route path='ish' element={<Ish />} >
                        <Route path='boshqaruv' element={<Boshqaruv />} />
                        <Route path='people' element={<People />} >
                            <Route path='hozir' element={<Child />} />
                            <Route path='arxiv' element={<Arxiv />} />
                        </Route>
                        <Route path='updateuser/:id' element={<Updateuser />}>
                            <Route path='show' element={<Showdata />} />
                            <Route path='edit' element={<Edituser />} />
                        </Route>
                        <Route path='newuser' element={<NewUser />} />
                        <Route path='sinflar' element={<Sinflar />} />
                    </Route>
                    <Route path='meningmaktabim' element={<Myschool />}>
                        <Route path='o`qituvchilar' element={<Odamlar />} />
                        <Route path='sinflar' element={<Sinflar />} />
                    </Route>
                </Route>



                <Route path='/people' element={<People />} />
                <Route path='/yaratish' element={<Yaratish />} />

                <Route path='/lod' element={<Loader />} />
            </Routes>
        </div>
    )
}

export default Routers