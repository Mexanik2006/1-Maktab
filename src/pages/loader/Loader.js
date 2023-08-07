import React, { useContext } from 'react'
import { RotatingLines } from 'react-loader-spinner';
import "./Loader.css"
import { UserContext } from '../../context/UserContext';

function Loader() {
    const { isLoading, setIsLoading } = useContext(UserContext)

    return (isLoading ?
        <div className="mainloader">
            <div className='RotatingLines'>
                <RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="180"
                    visible={true}
                />
            </div>
            <div className="bgcolor"></div>
        </div> : <></>
    )
}

export default Loader