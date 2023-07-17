import React from 'react'
import "./Boshqaruv.css"
import Ish from '../Ish'
import { edit, editbottom } from '../../../../data/static_data'

function Boshqaruv() {
    return (
        <div className='border'>
            <div className="">
                <Ish />
            </div>
            <div className="texth1">
                <h1>Maktab boshqaruvi</h1>
            </div>

            <div className="edit">
                {
                    edit.map(boshqaruv => (
                        <div className="edittop">
                            <div className="">
                                <h3>{boshqaruv.title}</h3>
                                <div className="editbuttom">
                                    <p>
                                        <a href="">{boshqaruv.link}</a>
                                    </p>
                                    <p>
                                        <a href="">{boshqaruv.linkone}</a>
                                    </p>
                                    <p>
                                        <a href="">{boshqaruv.link2}</a>
                                    </p>
                                    <p>
                                        <a href="">{boshqaruv.link3}</a>
                                    </p>
                                    <p>
                                        <a href="">{boshqaruv.link4}</a>
                                    </p>
                                    <p>
                                        <a href="">{boshqaruv.class}</a>
                                    </p>
                                    <p>
                                        <a href="">{boshqaruv.class2}</a>
                                    </p>
                                </div>
                            </div>

                        </div>

                    ))
                }
            </div>


            <div className="edit">
                {
                    editbottom.map(boshqaruvv => (
                        <div className="edittop">
                            <h3>{boshqaruvv.title}</h3>
                            <div className="editbuttom">
                                <p>
                                    <a href="">{boshqaruvv.link1}</a>
                                </p>
                                <p>
                                    <a href="">{boshqaruvv.link2}</a>
                                </p>
                                <p>
                                    <a href="">{boshqaruvv.link3}</a>
                                </p>
                                <p>
                                    <a href="">{boshqaruvv.link4}</a>
                                </p>
                                <p>
                                    <a href="">{boshqaruvv.link5}</a>
                                </p>
                                <p>
                                    <a href="">{boshqaruvv.link6}</a>
                                </p>
                                <p>
                                    <a href="">{boshqaruvv.link7}</a>
                                </p>
                                <p>
                                    <a href="">{boshqaruvv.link8}</a>
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Boshqaruv