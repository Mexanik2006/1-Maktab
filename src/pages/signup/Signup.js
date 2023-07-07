import React from 'react'
import "./Signup.css"
import { Link } from 'react-router-dom'

function Signup() {
    return (
        <div className='Signup'>
            <div className="signreg">
                <h2>Registratsiya</h2>
                <form action="">
                    <select name="" id="" required>
                        <option value="" selected>Darajangizni belgilang</option>
                        <option value="">O'qituvchi</option>
                        <option value="">O'quvchi</option>
                        <option value="">Ota-Ona</option>
                    </select>
                    <input type="text" required placeholder='Enter your login' />
                    <input type="password" required placeholder='Parolingizni kiriting' />
                    <input type="password" required placeholder='Parolingizni qaytatdan kiriting' />
                    <button>Jo`natish</button>
                    <Link to={"/"}>Ortga qaytish</Link>
                </form>
            </div>
        </div>
    )
}

export default Signup