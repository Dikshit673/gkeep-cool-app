import React from 'react';
import { NavLink } from "react-router-dom";


const NavbarCom = () => {
    const [state, setState] = React.useState(false);

    return (
        <>
            <section className='navbar-section'>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">

                        <NavLink className="navbar-brand" to="/gkeep-cool-app">Cool-Google-Keep</NavLink>

                        <button className="navbar-toggler" type="button" title='toggle-button' onClick={() => setState(!state)}>
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className={`collapse navbar-collapse nav-content-media ${state ? "show" : ""}`} id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/gkeep-cool-app" onClick={() => setState(!state)}>
                                        <i className="fa-solid fa-house" />
                                        Home
                                    </NavLink>
                                </li>
                                {/* <li className="nav-item">
                                    <NavLink className="nav-link" to="/about" onClick={() => setState(!state)}>
                                        <i className="fa-solid fa-address-card" />
                                        About
                                    </NavLink>
                                </li> */}
                                {/* <li className="nav-item">
                                    <NavLink className="nav-link" to="/mytodolist" onClick={() => setState(!state)}>

                                        <i className="fa-solid fa-list" />
                                        To-Do-List
                                    </NavLink>
                                </li> */}
                                {/* <li className="nav-item">
                                    <NavLink className="nav-link" to="/mygooglekeep" onClick={() => setState(!state)}>
                                        <i className="fa-brands fa-blogger-b"></i>
                                        My Gooogle Keep
                                    </NavLink>
                                </li> */}
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/gkeep-cool-app/contact" onClick={() => setState(!state)}>
                                        <i className="fa-solid fa-phone" />
                                        Contact us
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                    </div>
                </nav>
            </section>
        </>

    )
}

export default NavbarCom;
