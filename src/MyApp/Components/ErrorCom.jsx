import React from 'react'
import { NavLink } from "react-router-dom";

const ErrorCom = () => {
    return (
        <>
            <section className='error-main-section'>
                <div className='container h-100 d-flex justify-content-center align-items-center'>
                    <div className='w-100'>
                        <div className="row d-flex justify-content-center">
                            <div className="col-8 col-md-6 col-lg-4">
                                <div className="error-centerdiv">
                                    <div className="error-in-div">
                                        <h1>404</h1>
                                        <h2>Page Not Found</h2>
                                        <p>The page you are looking for doesn't exist or has been moved.</p>
                                        <NavLink to="/gkeep-cool-app" className=' d-flex justify-content-center align-items-center'>
                                            <button type='submit' title='go-to-homepage' className='error-go-home-btn'>Go Home</button>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ErrorCom
