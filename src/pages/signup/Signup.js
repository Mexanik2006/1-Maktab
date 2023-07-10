import React from 'react'
import "./Signup.css"
import { Link } from 'react-router-dom'
import axios from 'axios'

function Signup() {
    const sendlog = async (e) => {
        e.preventDefault()
        let select = e.target[0].value;
        let login = e.target[1].value;
        let password = e.target[2].value;
        let passwordl = e.target[3].value;
        // console.log(login)
        // console.log(password)
        // console.log(passwordl)
        console.log(select)

        if (password === passwordl) {
            window.alert("Ishladi")
        } else {
            window.alert("ishlamadi")
        }
        await axios.post("http://localhost:1000/user/create", {
            login,
            password,
            passwordl
        }).then(res => { console.log("ishladi") })
            .catch(() => console.log("error chiqdi"))
    }
    return (
        <div className='Signup'>
            <div className="signreg">
                <h2>Registratsiya</h2>
                <form action="" onSubmit={sendlog}>
                    <select name="" id="" required>
                        <option value="" selected>Darajangizni belgilang</option>
                        <option value="">O'qituvchi</option>
                        <option value="">O'quvchi</option>
                        <option value="">Ota-Ona</option>
                    </select>
                    <input type="text" required placeholder='Enter your login' />
                    <input type="password" required placeholder='Parolingizni kiriting' />
                    <input type="password" required placeholder='Parolingizni qaytatdan kiriting' />
                    <button onClick={sendlog}>Jo`natish</button>
                    <Link to={"/"}>Ortga qaytish</Link>
                </form>
            </div>
        </div>
    )
}

export default Signup