import React, { useState } from 'react'
import "./NewUser.css";
import Ish from "../Ish"
import axios from "../../../../api/Api"
function NewUser() {
    const [schoolgen, setSchoolgen] = useState("")
    const [date, setDate] = useState("")
    const [lastname, setLastname] = useState("")
    const [name, setName] = useState("")
    const [parentname, setParentname] = useState("")
    const [birthday, setBirthday] = useState("")
    const [gender, setGender] = useState("")
    const [parentphone, setParentphone] = useState(null)
    const [youphone, setYouphone] = useState(null)
    // console.log(schoolgen)
    // console.log(date)
    // console.log(lastname)
    // console.log(parentname)
    // console.log(birthday)
    // console.log(gender)
    // console.log(parentphone)
    // console.log(youphone)

    const createUser = async (e) => {
        e.preventDefault()
        let newUser = {
            schoolgen,
            date,
            lastname,
            name,
            parentname,
            birthday,
            gender,
            parentphone: Number(parentphone),
            youphone: Number(youphone)
        }

        console.log(newUser)
        await axios.post("/users/create", newUser)
            .then(res => console.log("Muvafaqqiyatli joylandi"))
            .catch(err => console.log(err))
    }
    return (
        <div className='newUser'>
            <div className="">
                <Ish />
            </div>


            <div className="newUsers">
                <h3>Yangi shaxs yaratish</h3>
                <form action="" onSubmit={createUser}>
                    <div className="newuserflex">
                        <div className="newUserleft">
                            <div className="">
                                <h4>Maktabdagi o'rni</h4>
                            </div>
                        </div>
                        <div className="newUserright">
                            <select className="inputtop" onChange={(e) => setSchoolgen(e.target.value)}>
                                <option value="Direktor">Direktor</option>
                                <option value="Direktor o'rinbosari">Direktor o'rinbosari</option>
                                <option value="O'qituvchi">O'qituvchi</option>
                                <option value="O'quvchi">O'quvchi</option>
                                <option value="Ota-ona">Ota-ona</option>
                            </select>
                        </div>
                    </div>

                    <div className="newuserflex">
                        <div className="">
                            <h4>Maktabga kirish sanasi</h4>
                        </div>
                        <div className="">
                            <input type="date" required onChange={(e) => setDate(e.target.value)} />
                        </div>
                    </div>

                    <div className="newuserflex">
                        <div className="newssss">
                            <div className="ddddd">
                                <h4>Familiyasi</h4>
                                <input type="text" placeholder='Familiyani kiriting...' required onChange={(e) => setLastname(e.target.value)} />
                            </div>
                            <div className="ddddd">
                                <h4>Ismi</h4>
                                <input type="text" placeholder='Ismni kiriting...' required onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="ddddd">
                                <h4>Otasining ismi</h4>
                                <input type="text" placeholder='Otasini ismini kiriting...' required onChange={(e) => setParentname(e.target.value)} />
                            </div>
                            <div className="ddddd">
                                <h4>Tug'ilgan sana</h4>
                                <input type="date" required onChange={(e) => setBirthday(e.target.value)} />
                            </div>
                            <div className="ddddd">
                                <h4>Jinsi</h4>
                                <div className="ssaa" onChange={(e) => setGender(e.target.value)}>
                                    <div className="inputradio">
                                        <input type="radio" value={"Erkak"} name='mentor' required /> <span>Erkak</span>
                                    </div>
                                    <div className="inputradio">
                                        <input type="radio" value={"Ayol"} name='mentor' required /> <span>Ayol</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="newuserflex">
                        <div className="newssss">
                            <div className="ddddd">
                                <h4>Ota-onasini telefon raqami</h4>
                                <input type="number" placeholder='Ota-onasini telefon raq...' required onChange={(e) => setParentphone(e.target.value)} />
                            </div>
                            <div className="ddddd">
                                <h4>Uyali telefon raqami</h4>
                                <input type="number" placeholder='Uyali telefon raqami...' />
                            </div>
                            <div className="ddddd">
                                <h4>Uzini telefon raqami</h4>
                                <input type="number" placeholder='Telefon raqami...' required onChange={(e) => setYouphone(e.target.value)} />
                            </div>
                            <div className="ddddd">
                                <h4>Email</h4>
                                <input type="email" placeholder='Email' />
                            </div>
                        </div>
                    </div>

                    <div className="newuserBtn">
                        <button>Saqlash</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewUser