import React, { useRef, useState } from 'react'

import Modal from './Modal';

import "./contact.css"
import emailjs from 'emailjs-com'

import fb from "../img/fb.png"
import insta from "../img/insta.png"
import yt from "../img/yt.png"
import linkedin from "../img/linkedin.png"


const Contact = () => {

    const formRef = useRef();
    const [openModal, setOpenModal] = useState(false);

    const handleSubmit = (e)=>{
        e.preventDefault();

        emailjs.sendForm('service_zx20hdh', 'template_42653dd', formRef.current, 'user_PjStWfbukuOioJgEcFMkf')
      .then((t) => {
          setOpenModal(true);
      }, (error) => {
          console.log(error.text);
      });
    }

    return (
        <div className="contact">
            <div className="contact-bg">
              
            </div>
            <div className="contact-left">
                <h2 className="contact-title">Come, let's get in touch</h2>
                <div className="contact-icons-wrapper">
                    <a href="https://www.facebook.com/vijay.krishna.37625/"><img className="contact-icon"  src={fb} alt="" /></a>
                    <a href="https://www.instagram.com/das_vjkrishna/"><img className="contact-icon" src={insta} alt="" /></a>
                    <a href="https://www.youtube.com/channel/UCNctz2ZBVWzGhzhUkvUGorA/videos"><img className="contact-icon" src={yt} alt="" /></a>
                    <a href="https://www.linkedin.com/in/vijay-krishna-4360a421b/"><img className="contact-icon" src={linkedin} alt="" /></a>
                </div>
            </div>
            <div className="contact-right">
                <form ref={formRef} onSubmit={handleSubmit}>
                    <h2>To say Hi...</h2>
                    <h1 className="contact-subtitle">Kindly fill up this form</h1>
                    <input required type="text" placeholder="Enter Name" name="user_name" />
                    <input required type="text" placeholder="Enter Subject" name="user_subject" />
                    <input required type="text" placeholder="Enter Email ID" name="user_email" />
                    <textarea required placeholder="Enter Message...." name="user_message" id="" cols="30" rows="10"></textarea>
                    <button>Send Message</button>
                </form>
            </div>
            {openModal && <Modal closeModal={setOpenModal} />}
        </div>
    )
}

export default Contact
