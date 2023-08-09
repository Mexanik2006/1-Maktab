import React, { useEffect, useState } from 'react'
import { ImUser, ImUsers } from "react-icons/im"
import axios from "../../../../../api/Api"
import { Link } from 'react-router-dom'
import { GrEdit } from "react-icons/gr"

function Child() {
    const [data, setData] = useState([])
    useEffect(() => {
        const getApi = async () => {
            await axios.get("/users/get")
                .then(res => setData(res.data))
                .catch(err => console.log(err))
        }
        getApi()

    }, [])
    console.log(data)
    return (
        <div className="">
            <div className="peopleUsers">
                <div className="findusers">
                    <p><ImUsers /><button>Barchasi</button></p>
                    <p><ImUsers /><button>Xodimlar</button></p>
                    <div className="peopleleft">
                        <p><ImUser /><button>Direktor</button></p>
                        <p><ImUsers /><button>O'rinbosari</button></p>
                        <p><ImUsers /><button>O'qituvchilar</button></p>
                    </div>
                    <p><ImUsers /><button>O`quvchular</button></p>
                    <p><ImUsers /><button>Ota-Onalar</button></p>
                </div>

                <div className="searchusers">
                    <form action="" className='form'>
                        <div className="searchflex">
                            <p>
                                <span>FISH</span>
                                <input type="text" placeholder='Odamlarni topish...' />
                            </p>
                            <p>
                                <span>Sinf</span>
                                <input type="text" placeholder='Sinfi...' />
                            </p>
                            <p>
                                <span>Yosh</span>
                                <input type="text" placeholder='Yoshi...' />
                            </p>
                            <p>
                                <button>Topish</button>
                            </p>
                        </div>
                    </form>
                </div>
            </div>

            <div className="mapuserchild">
                <div className="mapuserchildtop">
                    <span>Topilgan odamlar soni: 0</span>
                </div>

                <div className="mapuserchildtitle">
                    <span>FISH</span>
                    <span>Lavozimi</span>
                </div>

                <div className="mapuserchildmap">
                    {
                        data.map((users, index) => (
                            <div className="df" key={index}>
                                <div className="link">
                                    <Link to={`/class/ish/updateuser/${users._id}`}>
                                        <span>{users.lastname}</span>
                                        <span>{users.name}</span>
                                        <span>{users.parentname}</span>
                                    </Link>
                                </div>

                                <div className="gender">
                                    <span>{users.schoolgen}</span>
                                </div>

                                <div className="button">
                                    <Link to={`/updateuser/${users._id}`}><GrEdit /></Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Child