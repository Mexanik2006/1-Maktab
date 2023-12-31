import React, { useState } from 'react'
import "./Yaratish.css";
import axios from "../../../../api/Api"

function Yaratish() {
  const [classcode, setClasscode] = useState("")
  const createUser = async (e) => {
    e.preventDefault()
    let newClass = {
      classcode
    }
    await axios.post("/sinf/create", newClass)
      .then(res => console.log("Muvafaqqiyatli joylandi"))
      .catch(err => console.log(err))
  }
  return (
    <div>
      <form action="" onSubmit={createUser}>
        <div className="yaratish" >
          <div className="h1_uchun">
            <h1><a href="/yaratish">Yangi sinfni yaratish</a></h1>
          </div>
          <div className="yaratish_tartib">
            <div className="h3_1">
              <h3>Sinf kodi</h3>
              <div className="kodi">
                <input type="text" onChange={(e) => setClasscode(e.target.value)} />
                <p>Misol uchun 1-a yoki 10-b</p>
              </div>

            </div>

            <div className="h3_1">
              <h3>Nomi</h3>
              <div className="kodi">
                <input type="text" />
                <p>Kerak bo`lsa to`ldiriladi</p>
              </div>
            </div>

            <div className="h3_1">
              <h3>Smena</h3>
              <div className="kodi">
                <select name="" id="">
                  <option value="">-tanlang-</option>
                </select>
              </div>
            </div>

            <div className="h3_1">
              <h3>Maksimal toldirish</h3>
              <div className="kodi">
                <input type="" />
                <p>Joriy SAnPIN talablariga muvofiq</p>
              </div>
            </div>

            <div className="h3_1">
              <h3>Sinf turi</h3>
              <div className="kodi">
                <select name="" id="">
                  <option value="">-Sinf turini tanlang-</option>
                </select>
              </div>
            </div>

            <div className="h3_1">
              <h3>Parallel</h3>
              <div className="kodi">
                <select name="" id="">
                  <option value=""></option>
                </select>
                <input type="checkbox" name="" id="" />
              </div>
            </div>

            <div className="h3_1">
              <h3>O`quv yili</h3>
              <div className="kodi">
                <input type="date" name="" id="" />
              </div>
            </div>

            <div className="h3_1">
              <h3>Hisobot</h3>
              <div className="kodi">
                <select name="" id="">
                  <option value=""></option>
                </select>
              </div>
            </div>

            <div className="h3_1">
              <h3 >Qong`iroqlar j.</h3>
              <div className="kodi">
                <select name="" id="">
                  <option value=""></option>
                </select>
              </div>
            </div>


            <button>Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Yaratish