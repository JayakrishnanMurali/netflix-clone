import React, { useEffect, useState } from 'react'
import './Nav.css'


function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() =>{
        window.addEventListener("scroll", () =>{
            if (window.scrollY > 100){
                handleShow(true);
            } else handleShow(false);
        });
        return () =>{
             window.removeEventListener("scroll");
        };
    },[]);
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="NETFLIX Logo" className="nav__logo" />
      
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Profile" className="nav__avatar" />
        </div>
    )
}

export default Nav
