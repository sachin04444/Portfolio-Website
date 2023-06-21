import React from 'react'
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineMail, AiOutlineWhatsApp, AiOutlineLinkedin, AiFillGithub } from 'react-icons/ai';
const page = () => {
    return (
        <>
            <div className="section">
                <h3 className='header'>Contact Us</h3>
                <div className="flex">
                    <a className='flex' href="tel:+919974416299"><FiPhoneCall/>9974416299</a>
                    <a  href="https://www.linkedin.com/in/sachintrivedi04/" target="_blank"><AiOutlineLinkedin /></a>
                    <a  href="https://github.com/sachin04444" target="_blank"><AiFillGithub /></a>
                    {/* <a  href="https://www.instagram.com/sachin_trivedi_04/" target="_blank"><FiInstagram /></a> */}
                    <a  href=" https://wa.me/919974416299?text=send Hello " rel="nofollow noopener" target="_blank"><AiOutlineWhatsApp /> </a>
                    <a  href="mailto:sachintrivedi221@gmail.com"><AiOutlineMail /></a>
                </div>
            </div>
        </>
    )
}

export default page
