import React from 'react';
import "./Myschool.css"
import Teachers from '../Teachers';
import { Link, Outlet } from 'react-router-dom';

function Myschool() {
    return (
        <div>
            <div className="">
                <Teachers />
            </div>

            <div className="schooltop">
                <div className="poepleBtns">
                    <div className="cards">
                        <button>
                            <Link to={"/meningmaktabim/o`qituvchilar"}>O'qituvchilar</Link>
                        </button>
                    </div>
                    <div className="cards">
                        <button>
                            <Link to={"/meningmaktabim/sinflar"}>Sinflar</Link>
                        </button>
                    </div>
                    <div className="cards">
                        <button>
                            <Link>Odamlar</Link>
                        </button>
                    </div>
                    <div className="cards">
                        <button>
                            <Link>Profil</Link>
                        </button>
                    </div>
                </div>

                <Outlet />
            </div>
        </div>
    )
}

export default Myschool