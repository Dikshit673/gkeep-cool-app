import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';

const ContactCom = () => {

    const form = useRef();

    const [userData, setUserdata] = useState({
        fullName: "",
        email: "",
        message: "",
    });

    const inputUserdata = (e) => {
        const { name, value } = e.target;
        setUserdata((preValue) => {
            return { ...preValue, [name]: value };
        })
    };

    const submitUserData = async (e) => {
        e.preventDefault();
        if (!userData.fullName) {
            alert("Plzz fill your full-name");
        }
        else if (!userData.email) {
            alert("Plzz fill your email");
        }
        else if (!userData.message) {
            alert("Plzz fill your message");
        }
        else {
            emailjs.sendForm('service_uzuzpnh', 'template_z2i3d4n',
                form.current, { publicKey: 'TF7ODsiFd15yEI2iv', }
            ).then(() => {
                alert('SUCCESS!');
            },
                (error) => {
                    alert('FAILED...', error.text);
                },
            );
            setUserdata({
                fullName: "",
                email: "",
                message: "",
            });
        }


    }

    return (
        <>
            <section className='contact-section' id='contact'>
                <div className=' container h-100 '>

                    <div className='row d-flex justify-content-center'>
                        <div className=' col-12 col-lg-6 text-center'>
                            <h1 className='contact-main-h1 mt-5 mb-2'>Contact</h1>
                        </div>
                    </div>

                    <div className='row h-100 d-flex justify-content-center'>
                        <div className=' co-12 col-lg-6 h-100 d-flex align-items-center'>
                            <div className='w-100'>
                                <form ref={form} onSubmit={submitUserData}>
                                    <div>
                                        <div>
                                            <input type='text' name='fullName' id='' placeholder='First Name' autoComplete='nope' className=' input-fields ' maxLength={50} onChange={inputUserdata} value={userData.fullName} />
                                        </div>
                                        <div>
                                            <input type='text' name='email' id='' placeholder='Email' autoComplete='nope' className='input-fields ' maxLength={50} onChange={inputUserdata} value={userData.email} />
                                        </div>
                                        <div>
                                            <textarea type='text' name='message' id='' placeholder='Write your message...' autoComplete='off' className=' input-fields textarea-my' onChange={inputUserdata} value={userData.message} />
                                        </div>
                                        <div>
                                            <button type='submit' title='submit' className=' w-100 contact-submit-btn'>Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactCom;
