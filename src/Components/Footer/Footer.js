import React from 'react';
import "./Footer.css";
import { ImFacebook, ImYoutube } from "react-icons/im";
import { FaInstagram, FaSchool } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { IoIosHome } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi"

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
                    <div className="footertitlee">
                        <h3 style={{ marginLeft: "-20px" }}>Bizning sahifalarimmiz:</h3>
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

                <div className="footerrightl">
                    <div className="footertitlee">
                        <h3>Bizning manzilimmiz:</h3>
                    </div>
                    <div className="location">
                        <ul>
                            <li><IoIosHome /> Yangiqo'rg'on tumani Toskent ko'cha 4-uy.</li>
                            <li><MdEmail /> 1-Maktab@gmail.com</li>
                            <li><FiPhoneCall /> +998 99 999 9999</li>
                        </ul>
                    </div>
                </div>

                <div className="footerright">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1501.1671242049713!2d71.72144298858919!3d41.19268588603301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38a4b1bd71e9bdd7%3A0xaa0f5121af27b00c!2z0KjQutC-0LvQsCDihJYx!5e0!3m2!1suz!2s!4v1688557952091!5m2!1suz!2s" width="300" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

            <div className="corpiriter">
                <p>ccccccccccccccccccccccccccccc</p>
            </div>
        </div>
    )
}

export default Footer