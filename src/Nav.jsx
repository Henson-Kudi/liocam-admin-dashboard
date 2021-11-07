import React from 'react'
import logo from './images/liocam-logo.jpg';

function Nav() {


    return (
        <div>
            <section className="nav-section">
                <div className="nav-logo-container">
                <img src={logo} alt="" className="nav-logo" />
                </div>
                <div className="header">
                <h1>LIOCAM ADMIN DASHBOARD</h1>
                </div>
                <div className="user-icon-cont">
                    <i className="fas fa-user fa-2x"></i>
                </div>
            </section>

            
        </div>
    )
}

export default Nav
