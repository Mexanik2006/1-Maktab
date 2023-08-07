import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from "../../api/Api";
import "./Edituser.css"
import { UserContext } from '../../context/UserContext';
import Loader from '../loader/Loader';

function Edituser() {
    const { isLoading, setIsLoading } = useContext(UserContext)

    const [userData, setUserData] = useState(null)

    const [date, setDate] = useState("")
    const [lastname, setLastname] = useState("")
    const [name, setName] = useState("")
    const [parentname, setParentname] = useState("")
    const [birthday, setBirthday] = useState("")
    const [gender, setGender] = useState("")
    const [parentphone, setParentphone] = useState(null)
    const [youphone, setYouphone] = useState(null)
    const [age, setAge] = useState(null)
    const [email, setEmail] = useState("")
    const [homephone, setHomephone] = useState(null)


    let paramId = useParams()?.id

    let updateuser = {
        name
    }
    useEffect(() => {
        setIsLoading(true)
        let getSingle = async () => {
            await axios.get("/users/get")
                .then(res => {
                    let newuser = res?.data.find(user => user._id === paramId)
                    setUserData(newuser)
                })
                .catch(err => console.log(err))
        }

        getSingle()
        setIsLoading(false)
    }, [])



    const updateUser = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        console.log(updateuser)
        await axios.put(`/users/update/${paramId}`, updateuser).then(res => { console.log("first") }).catch(err => console.log(err))

        setIsLoading(false)
    }

    return (
        <div>
            {/* <Loader boolean={isLoading} /> */}
            <form action="" className='editform' onSubmit={updateUser}>
                <div className="edituserflex">
                    <h4>Familiyasi</h4>
                    <input type="text" placeholder={userData?.lastname} onChange={(e) => setLastname(e.target.value)} />
                </div>
                <div className="edituserflex">
                    <h4>Ismi</h4>
                    <input type="text" placeholder={userData?.name} />
                </div>
                <div className="edituserflex">
                    <h4>Otasini ismi</h4>
                    <input type="text" value={userData?.parentname} />
                </div>
                <div className="edituserflex">
                    <h4>Tugulgan sanasi</h4>
                    <input type="text" value={userData?.birthday} />
                </div>
                <div className="edituserflex">
                    <h4>Maktabga kirish sanasi</h4>
                    <input type="text" value={userData?.date} />
                </div>
                <div className="edituserflex">
                    <h4>Elektron pochta</h4>
                    <input type="text" value={userData?.email} />
                </div>
                <div className="edituserflex">
                    <h4>Ota-onasini telefon raqami</h4>
                    <input type="text" value={userData?.parentphone} />
                </div>
                <div className="edituserflex">
                    <h4>Uzini telefon raqami</h4>
                    <input type="text" value={userData?.youphone} />
                </div>

                <button>Saqlash</button>
            </form>
        </div>
    )
}

export default Edituser