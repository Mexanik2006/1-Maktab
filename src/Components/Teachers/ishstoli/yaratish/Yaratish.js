import React from 'react'
import "./Yaratish.css"

function Yaratish() {
  return (
    <div>
      <div className="yaratish">
        <div className="h1_uchun">
          <h1><a href="/yaratish">Yangi sinfni yaratish</a></h1>
        </div>
        <div className="yaratish_tartib">
          <div className="h3_1">
            <h3>Sinf kodi</h3>
            <div className="kodi">
              <input type="text" />
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
            <div className="kodi2">
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

        </div>
      </div>
      <a href="/sinflar">ortga</a>
    </div>
  )
}

export default Yaratish