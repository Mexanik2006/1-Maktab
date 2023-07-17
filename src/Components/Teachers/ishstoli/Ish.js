import React from 'react'
import Teachers from '../Teachers'
import "./Ish.css"
import { Roboto } from '../../../data/static_data'

function Ish() {
    return (
        <div className=''>
            <div className="">
                <Teachers />
            </div>
            <div className="robota">
                <div className="ishmap">
                    {
                        Roboto.map(ish => (
                            <a href={ish.route} title={ish.title}>
                                <span>{ish.Icon}</span>
                                <span>{ish.title}</span>
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Ish