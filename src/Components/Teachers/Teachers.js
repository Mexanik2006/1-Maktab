import React from 'react';
import "./Teachers.css";
import Navbar from "../Navbar/Navbar"
import { Link, Outlet } from 'react-router-dom';
import { UserTeacher } from '../../data/static_data';

function Teachers() {
    return (<>
        <div className="">
            <Navbar />
        </div>
        <div className='teachers'>
            <header>
                <div className="linksheader">
                    <div className="topheader">
                        <h3>Ta'lim</h3>
                    </div>
                    <div className="buttomheader">
                        <ul>
                            <li>
                                <Link>Ish stoli</Link>
                            </li>
                            <li><Link>Mening maktabim</Link></li>
                            <li><Link>Mening sinflarim</Link></li>
                            <li><Link>Jurnallar</Link></li>
                            <li><Link>Dars jadvali</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="linksheader">
                    <div className="topheader">
                        <h3>Profil</h3>
                    </div>
                    <div className="buttomheader">
                        <ul>
                            <li>
                                <Link>Xabarlar</Link>
                            </li>
                            <li><Link>Do`stlar</Link></li>
                            <li><Link>Blog</Link></li>
                            <li><Link>Fayllar</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="linksheader">
                    <div className="topheader">
                        <h3>Muloqot</h3>
                    </div>
                </div>

                <div className="linksheader">
                    <div className="topheader">
                        <h3>Ilovalar</h3>
                    </div>
                </div>
            </header>
        </div>


        <div className="teacherbuttom">
            <ul>
                {
                    UserTeacher.map((teacher, index) => (
                        <li key={index}>
                            <a href={teacher.router}>{teacher.title}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
        <Outlet />
    </>
    )
}

export default Teachers