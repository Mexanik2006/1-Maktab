import React from 'react'
import "./People.css"
import Ish from '../Ish'
import { searchPeople } from '../../../../data/static_data'
import { Link, Outlet } from 'react-router-dom'

function People() {
    return (
        <div>
            {/* <div className="">
                <Ish />
            </div> */}
            <div className="serchPeople">
                <div className="peopleTop">
                    {
                        searchPeople.map(people => (
                            <div className="peopleTitle">
                                <h3>{people.title}</h3>
                            </div>
                        ))
                    }
                </div>

                <div className="peopleButtom">
                    <div className="poepleBtns">
                        <div className="cards">
                            <button>
                                <Link to={"/people/hozir"}>Hozir maktabda</Link>
                            </button>
                        </div>
                        <div className="cards">
                            <button>
                                <Link to={"/people/arxiv"}>Arxivlar</Link>
                            </button>
                        </div>
                    </div>

                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default People