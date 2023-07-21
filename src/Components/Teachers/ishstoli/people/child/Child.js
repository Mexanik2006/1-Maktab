import React from 'react'
import { ImUser, ImUsers } from "react-icons/im"


function Child() {
    return (
        <div className="peopleUsers">
            <div className="findusers">
                <p><ImUsers /><button>Barchasi</button></p>
                <p><ImUsers /><button>Xodimlar</button></p>
                <div className="peopleleft">
                    <p><ImUser /><button>Direktor</button></p>
                    <p><ImUsers /><button>O'rinbosari</button></p>
                    <p><ImUsers /><button>O'qituvchilar</button></p>
                </div>
                <p><ImUsers /><button>O`quvchular</button></p>
                <p><ImUsers /><button>Ota-Onalar</button></p>
            </div>

            <div className="searchusers">
                <form action="" className='form'>
                    <div className="searchflex">
                        <p>
                            <span>FISH</span>
                            <input type="text" placeholder='Odamlarni topish...' />
                        </p>
                        <p>
                            <span>Sinf</span>
                            <input type="text" placeholder='Sinfi...' />
                        </p>
                        <p>
                            <span>Yosh</span>
                            <input type="text" placeholder='Yoshi...' />
                        </p>
                        <p>
                            <button>Topish</button>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Child