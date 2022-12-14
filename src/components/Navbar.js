import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-sm navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}TextUtils</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link active" to="/about">{props.about}</Link>
                            </li> */}
                        </ul>


                    </div>
                    <div className={`form-check form-switch color-light text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckChecked" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{props.mode === 'light' ? 'LightMode' : 'DarkMode'}</label>
                    </div>
                </div>

            </nav>

        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string,
    about: PropTypes.string
}

Navbar.defaultprop = {
    title: 'ENTER THE TITLE HERE',
    about: 'ENTER ABOUT US'
}