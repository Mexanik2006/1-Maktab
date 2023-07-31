import React, { useEffect, useState } from 'react';
import "./Odamlar.css"
import { Link } from 'react-router-dom';
import axios from "../../../../api/Api"

function Odamlar() {
    const [data, setData] = useState([])
    useEffect(() => {
        const getApi = async () => {
            await axios.get("/users/get")
                .then(res => setData(res.data))
                .catch(err => console.log(err))
        }
        getApi()

    }, [])

    return (
        <div>
            <div className="odamlar">
                <div className="" style={{ border: "1px solid red" }}>
                    <h3>Hodimlar</h3>

                    {
                        data.map((user, index) => (
                            <div className="odamlarbgcolor">
                                <div className="ogamlaruserflex">
                                    <div className="odmalarimage"></div>
                                    <div className="nameodamlar">
                                        <Link>
                                            <span>{user.lastname}</span>
                                            <span>{user.name}</span>
                                            <span>{user.parentname}</span>
                                        </Link>
                                        <span>{user.schoolgen}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Odamlar