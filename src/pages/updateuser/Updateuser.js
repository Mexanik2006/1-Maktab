import React, { useEffect, useState } from 'react'
import "./Updateuser.css"
import Teachers from '../../Components/Teachers/Teachers'
import { Link, Outlet, useParams } from 'react-router-dom'
import axios from '../../api/Api'

function Updateuser() {
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


    return (
        <div>
            {/* <div className="">
                <Teachers />
            </div> */}

            <div className="updateusermain">
                <div className="updatetoptitle">
                    <h2>{userData?.lastname} {userData?.name}  {userData?.parentname}</h2>
                    <p>{userData?.schoolgen}</p>
                </div>

                <div className="schooltop">
                    <div className="poepleBtns">
                        <div className="cards">
                            <button>
                                <Link to={`/class/ish/updateuser/${paramId}/show`}>Ko'rib chiqish</Link>
                            </button>
                        </div>
                        <div className="cards">
                            <button>
                                <Link to={`/class/ish/updateuser/${paramId}/edit`}>Shaxsiy ma'lumotlar</Link>
                            </button>
                        </div>
                        <div className="cards">
                            <button>
                                <Link>Login va parol</Link>
                            </button>
                        </div>
                        <div className="cards">
                            <button>
                                <Link>Bolalar</Link>
                            </button>
                        </div>
                    </div>

                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Updateuser