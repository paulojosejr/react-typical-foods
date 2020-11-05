import React from 'react'
import './Home.scss'
import homevideo from '../../homevideo.mp4'
import logoHome from '../../logoHome.png'

export default function Home() {
    const videoStyle ={
        position: "absolute",
        width: "100%",
        left: "50%",
        top: "50%",
        height: "100%",
        objectFit: "cover",
        transform: "translate(-50%, -50%)",
        zIndex: "-1"
    }
    return (
         
            <header className="entrance">

            <video autoPlay loop muted style={ videoStyle}>
                
                <source src={homevideo} type="video/mp4"/>
            </video>

                <div className="banner">
                <img className="logoHome" src={logoHome} alt='food tours logo' />
                    <h1 className="banner-title">Typical Foods</h1>
                    <h2>There is no sincerer love than the love of food.</h2>
                </div>
            </header>

    )
}