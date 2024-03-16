import React from 'react';

const Footer = () => {
    const currYear = new Date().getFullYear();

    return (
        <section className='footer-section'>
            <div className='container h-100'>

                <div className='row'>
                    <div className=' col-12'> </div>
                </div>

                <div className=' mt-4 mb-3 text-center'>
                    <br />
                    <p>A project by <span className='para-span'>Sachin Kumar</span></p>
                </div>
                <div className='mt-3 d-flex justify-content-center'>
                    <div className=' w-50'>
                        <div className='row'>
                            <div className='col-12 d-flex justify-content-center'>
                                <div className='w-50 d-flex justify-content-between'>
                                    <div className='footer-icon-maindiv'>
                                        <div className='footer-icons'>
                                            <a href="https://twitter.com/SachinK45099263" target="_sachin" aria-label="SachinK45099263">
                                                <i className=" fab fa-twitter"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className='footer-icon-maindiv'>
                                        <div className='footer-icons'>
                                            <a href="https://www.facebook.com/sachin.fandan.146" target="_sachin" aria-label="sachin.fandan.146">
                                                <i className=" fab fa-facebook"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className='footer-icon-maindiv'>
                                        <div className='footer-icons'>
                                            <a href="https://www.instagram.com/sachin.kumar_1905_/" target="_sachin" aria-label="sachin.kumar_1905_">
                                                <i className=" fab fa-instagram"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className='footer-icon-maindiv'>
                                        <div className='footer-icons'>
                                            <a href="https://www.linkedin.com/in/sachin-kumar-7606742a7/" target="_sachin" aria-label="sachin.kumar_1905_">
                                                <i className="fa-brands fa-linkedin"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className=' mt-3 footer-hr' />
                <div className='footer-copyrightdiv'>
                    <p className=' text-center footer-copyright'>copyright © {currYear}</p>
                </div>

            </div>
        </section>
    )
}

export default Footer
