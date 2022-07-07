import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">{props.first}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.second}</Link>
                        </li>
                    </ul>
                    <div className={`form-check form-switch text-${(props.mode==="light")?"dark":"light"}`}>
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`Enable ${(props.mode==="light")?"dark":"light"} mode`}</label>
                    </div>
                    {/* <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-primary" type="submit">Search</button>
            </form> */}
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    first: PropTypes.string.isRequired,
    second: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Enter title",
    first: "Enter first title",
    second: "Enter second title"
}