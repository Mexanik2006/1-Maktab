import React from 'react'
import "./Main.css"
import { Maincard } from "./static_data"

function Main() {
    return (
        <div className='Main'>
            <div className="maincard">
                {
                    Maincard.map(cards => (
                        <div className="card">
                            <div className="">
                                <img src={cards.Image} alt="" />
                            </div>
                            <div className="cardtitle">
                                <h1>{cards.name}</h1>
                            </div>
                            <div className="cardtext">
                                <p>{`Bu web saytdan foydalanish uchun quyidagi ${cards.name} dan ro'yhatdan o'ting.`}</p>
                            </div>
                            <div className="">
                                <button className='btn'>{cards.kirish}</button>
                                <button>{cards.button}</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Main