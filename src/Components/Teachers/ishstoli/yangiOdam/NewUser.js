import React from 'react'
import "./NewUser.css";
import Ish from "../Ish"

function NewUser() {
    return (
        <div className='newUser'>
            <div className="">
                <Ish />
            </div>


            <div className="newUsers">
                <h3>Yangi shaxs yaratish</h3>
                <form action="">
                    <div className="newuserflex">
                        <div className="newUserleft">
                            <div className="">
                                <h4>Maktabdagi o'rni</h4>
                            </div>
                        </div>
                        <div className="newUserright">
                            <div className="inputtop">
                                <input type="radio" name='radio' /> <span>Xodim</span>
                                <div className="newuserxodim">
                                    <p>
                                        <input type="checkbox" name='checkbox' /> <span>Direktor</span>
                                    </p>
                                    <p>
                                        <input type="checkbox" name='checkbox' /> <span>Direktor o'rinbosari</span>
                                    </p>
                                    <p>
                                        <input type="checkbox" name='checkbox' /> <span>Oquvchi</span>
                                    </p>
                                </div>
                                <div className="" style={{ display: "flex", flexDirection: "column" }}>
                                    <p>
                                        <input type="radio" name='radio' /> <span>O'quvchi</span>
                                    </p>
                                    <p>
                                        <input type="radio" name='radio' /> <span>Ota-ona</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="newuserflex">
                        <div className="">
                            <h4>Maktabga kirish sanasi</h4>
                        </div>
                        <div className="">
                            <input type="date" required />
                        </div>
                    </div>

                    <div className="newuserflex">
                        <div className="newssss">
                            <div className="ddddd">
                                <h4>Familiyasi</h4>
                                <input type="text" placeholder='Familiyani kiriting...' required />
                            </div>
                            <div className="ddddd">
                                <h4>Ismi</h4>
                                <input type="text" placeholder='Ismni kiriting...' required />
                            </div>
                            <div className="ddddd">
                                <h4>Otasining ismi</h4>
                                <input type="text" placeholder='Otasini ismini kiriting...' required />
                            </div>
                            <div className="ddddd">
                                <h4>Tug'ilgan sana</h4>
                                <input type="date" required />
                            </div>
                            <div className="ddddd">
                                <h4>Jinsi</h4>
                                <div className="ssaa">
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
                                <input type="number" placeholder='Ota-onasini telefon raq...' required />
                            </div>
                            <div className="ddddd">
                                <h4>Uyali telefon raqami</h4>
                                <input type="number" placeholder='Uyali telefon raqami...' />
                            </div>
                            <div className="ddddd">
                                <h4>Uzini telefon raqami</h4>
                                <input type="number" placeholder='Telefon raqami...' required />
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