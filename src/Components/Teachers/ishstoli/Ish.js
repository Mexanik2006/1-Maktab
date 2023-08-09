import React from 'react'
import Teachers from '../Teachers'
import "./Ish.css"
import { Roboto } from '../../../data/static_data'
import { Outlet } from 'react-router-dom'

function Ish() {
    return (
        <div className=''>
            <div className="">
                {/* <Teachers /> */}
            </div>
            <div className="robota">
                <div className="ishmap">
                    {
                        Roboto.map((ish, index) => (
                            <a key={index} href={ish.route} title={ish.title}>
                                <span>{ish.Icon}</span>
                                <span>{ish.title}</span>
                            </a>
                        ))
                    }
                </div>
                <Outlet />
            </div>
        </div>
    )
}

export default Ish