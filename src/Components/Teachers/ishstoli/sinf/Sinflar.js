import React from 'react'
import { Buttonroyhat, Buttonsinf, Sinftartib } from '../../../../data/static_data'
import "./Sinflar.css"

function Sinflar() {
  return (
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
                  <button>{royhat.btn}</button>
                  <button>{royhat.btn}</button>
                  <button>{royhat.btn}</button>
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
      </div>
    </div>
  )
}

export default Sinflar