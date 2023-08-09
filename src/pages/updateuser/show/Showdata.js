import React, { useEffect, useState } from 'react';
import "./Showdata.css"
import axios from "../../../api/Api"
import { Link, useParams } from 'react-router-dom';

function Showdata() {
    const [userData, setUserData] = useState(null)
    let paramId = useParams()?.id
    useEffect(() => {
        let getSingle = async () => {
            await axios.get("/users/get")
                .then(res => {
                    let newuser = res?.data.find(user => user._id === paramId)
                    setUserData(newuser)
                })
                .catch(err => console.log(err))
        }

        getSingle()
    }, [])

    let Year = new Date()
    // window.alert(Year)
    return (
        <div>
            <div className="showdata">
                <h3>Shaxsiy ma'lumotlar</h3>
                <div className="flexx">
                    <div className="">
                        <table>
                            <tr>
                                <td>FSHO</td>
                                <th>{userData?.lastname} {userData?.name}  {userData?.parentname}</th>
                            </tr>
                            <tr>
                                <td>Jinsi</td>
                                <th>{userData?.gender}</th>
                            </tr>
                            <tr>
                                <td>Yoshi</td>
                                <th>{userData?.age}</th>
                            </tr>
                            <tr>
                                <td>Tug'ulgan sana</td>
                                <th>{userData?.birthday}</th>
                            </tr>
                            <tr>
                                <td>Maktabga kirish sanasi</td>
                                <th>{userData?.date}</th>
                            </tr>
                            <tr>
                                <td>Elektron Pochta</td>
                                <th>{userData?.email}</th>
                            </tr>
                            <tr>
                                <td>Ota-onasini telefon raqami</td>
                                <th>{userData?.parentphone}</th>
                            </tr>
                            <tr>
                                <td>Uyali telefon raqam</td>
                                <th>{userData?.homephone}</th>
                            </tr>
                            <tr>
                                <td>Uzini telefon raqami</td>
                                <th>{userData?.youphone}</th>
                            </tr>
                        </table>
                    </div>
                    <div className="">
                        <Link to={`/class/ish/updateuser/${paramId}/edit`}>Taxrirlash</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Showdata