import React from 'react'
import './Home.scss'
import homevideo from '../../homevideo.mp4'

export default function Home() {
    return (
         
            <header className="entrance">

            <video autoPlay loop muted style={{
                      position: "absolute",
                      width: "100%",
                      left: "50%",
                      top: "50%",
                      height: "100%",
                      objectFit: "cover",
                      transform: "translate(-50%, -50%)",
                      zIndex: "-1"
            }}
            >
                
                <source src={homevideo} type="video/mp4"/>
            </video>

                <div className="banner">
                    <h1 className="banner-title">Typical Foods</h1>
                    <h2>There is sincerer love than the love of food.</h2>
                    <h2>See places and foods wherever you go.</h2>
                </div>
            </header>

    )
}