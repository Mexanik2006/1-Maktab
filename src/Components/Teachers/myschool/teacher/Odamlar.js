import React from 'react';
import "./Odamlar.css"
import { Link } from 'react-router-dom';

function Odamlar() {
    return (
        <div>
            <div className="odamlar">
                <div className="odamlarbgcolor">
                    <h3>Hodimlar</h3>
                    <div className="ogamlaruserflex">
                        <div className="odmalarimage"></div>
                        <div className="nameodamlar">
                            <Link>
                                <span>Axmadullayev</span>
                                <span>Sadriddin</span>
                                <span>Botirjon o'g'li</span>
                            </Link>
                            <span>O'qituvchi</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Odamlar