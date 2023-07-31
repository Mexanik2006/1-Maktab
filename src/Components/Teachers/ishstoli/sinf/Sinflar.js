import React, { useEffect, useState } from 'react'
import "./Sinflar.css"
import Ish from "../Ish"
import { Buttonroyhat, Buttonsinf } from '../../../../data/static_data';
import axios from "../../../../api/Api"
import { Link } from 'react-router-dom';
function Sinflar() {
  const [data, setData] = useState([])
  useEffect(() => {
    const getApi = async () => {
      await axios.get("/sinf/get")
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }
    getApi()

  }, [])
  return (
    <div className="">
      <div className="">
        <Ish />
      </div>


      <div className='sinflar_1'>
        <div className="sinflar">
          <div className="ichkari">
            <h1><a href="/sinflar">Sinflar</a></h1>
            <span><a href="/yaratish">+</a></span>
          </div>
          <div className="year_23">
            {
              Buttonsinf.map(sinf => (
                <div className="check">
                  <div className="SinfBtn">
                    <span>{sinf.Icon}</span>
                    <h2>{sinf.year}</h2>
                    <h2>{sinf.text}</h2>
                  </div>
                  <div className="btn_1">
                    <button>{sinf.btn}</button>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="year_24">
            {
              Buttonroyhat.map(royhat => (
                <div className="btn_royhat">
                  <div className="royhat">
                    <button>{royhat.btn}</button>
                    <button>{royhat.btn1}</button>
                    <button>{royhat.btn2}</button>
                    <button>{royhat.btn3}</button>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="Sinf_tartib">
            <div className="tartib_1">
              <h1>1</h1>
              <h1>2</h1>
              <h1>3</h1>
              <h1>4</h1>
              <h1>5</h1>
              <h1>6</h1>
              <h1>7</h1>
              <h1>8</h1>
              <h1>9</h1>
              <h1>10</h1>
              <h1>11</h1>
            </div>
          </div>

          <div className="classmap">
            {
              data.map((classs, index) => (
                <div className="" key={index}>
                  <Link>{classs.classcode}</Link>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sinflar