import React from 'react';
import "./Footer.css";
import { ImFacebook, ImYoutube } from "react-icons/im";
import { FaInstagram, FaSchool } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs"

function Footer() {
    return (
        <div className='Footer'>
            <div className="footertop">
                <div className="footertitle">
                    <h3>Ijtimoiy tarmoqlarda biz bilan bog'laning:</h3>
                </div>
                <div className="footerconnect">
                    <a href="" title='Facebook'>
                        <ImFacebook />
                    </a>
                    <a href="" title='Instagram'>
                        <FaInstagram />
                    </a>
                    <a href="" title='Telegram'>
                        <BsTelegram />
                    </a>
                    <a href="" title='Youtube'>
                        <ImYoutube />
                    </a>
                </div>
            </div>
            <div className="footerbottom">
                <div className="footerleft">
                    <div className="lefttitle">
                        <FaSchool />
                        <h3>1-Maktab</h3>
                    </div>
                    <div className="lefttitletext">
                        <p>Our school is located in Yangikurgan district of Namangan region. You can see our school on the next pages.</p>
                    </div>
                </div>
                <div className="footercenter">
                    <div className="centertitle">
                        <h3>Bizning sahifalarimmiz:</h3>
                    </div>
                    <div className="centerlink">
                        <ul>
                            <a href="/home">
                                <li>Home</li>
                            </a>
                            <a href="/class">
                                <li>Class</li>
                            </a>
                            <a href="/work">
                                <li>Work</li>
                            </a>
                            <a href="/contact">
                                <li>Contact</li>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer