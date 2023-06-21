import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineMail, AiOutlineWhatsApp, AiOutlineLinkedin, AiFillGithub } from 'react-icons/ai';

const page = () => {
    return (
        <>
            <div className='flex'>
                <div className="main flex">
                    <div className="leftside">
                        <div className="imgcontiner">
                            <img src="./me.jpg" alt="" srcset="" />
                        </div>
                        <div className="header flex direction">
                            <h3>Hello ,</h3>
                            <h1 className='headingleft' >sachin trivedi</h1>
                            <h3>Full stack devloper</h3>
                        </div>
                        <div className="contact">
                            <div className="headingC">
                                <h1>Contact us</h1>
                            </div>
                            <div className="contacchild flex wrap">
                                <a href="tel:+"><FiPhoneCall /></a>
                                <a href="http://" target="_blank" rel="noopener noreferrer"><AiOutlineLinkedin /></a>
                                <a href="http://" target="_blank" rel="noopener noreferrer"><AiOutlineWhatsApp /></a>
                                <a href="mailto:"><AiOutlineMail /></a>
                                <a href="http://" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
                            </div>
                        </div>
                        <div className="skil">
                            <div className="headingC">
                                <h1>Contact us</h1>
                            </div>
                            <div className="skillchild">
                                <p>HTML |</p>
                                <p>CSS |</p>
                                <p>javascript |</p>
                                <p>React js |</p>
                                <p>Next js |</p>
                                <p>python |</p>
                                <p>Django |</p>
                                <p>node js |</p>
                                <p>Mongo DB |</p>
                                <p>Autocad</p>
                            </div>
                        </div>
                    </div>


                    <div className="rightside">



                    </div>
                </div>
            </div>


        </>
    )
}

export default page
