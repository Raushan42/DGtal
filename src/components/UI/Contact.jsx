import React from 'react'
import '../../styles/contact.css'

import contactImg from '../../images/contact.svg'

const Contact = () => {
  return <section className='contact__form'>
    <div className='container'>
        <div className='contact__top-content'>
            <h6 className='subtitle'>Contact</h6>
            <h2>Let's Connect and 
                <span className='highlight'> Grow Together</span>
            </h2>
        </div>

        <div className='contact_content'>
            <div className='item'>
                <div className='contact'>
                    <div className='first-text'>Get in Touch</div>
                    <img src={contactImg} alt='contact' className='Contact__img' />
                    <div className='social-links'>
                        <span className='second-text'>Connect With us:</span>
                        <ul className='social-media'>
                            <li><a href='#'><i class="ri-facebook-fill"></i></a></li>
                            <li><a href='#'><i class="ri-youtube-fill"></i></a></li>
                            <li><a href='#'><i class="ri-linkedin-fill"></i></a></li>
                            <li><a href='#'><i class="ri-instagram-fill"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className='submit-form'>
                    <h4 className='third-text text'>Contact Us</h4>
                    <form action=''>
                        <div className='input-box'>
                            <input type='text' className='input' placeholder='Name' required />
                            {/* <label for=''>Name</label> */}
                        </div>

                        <div className='input-box'>
                            <input type='email' className='input' placeholder='Email' required />
                            {/* <label for=''>Email</label> */}
                        </div>

                        <div className='input-box'>
                            <input type='tel' className='input' placeholder='Phone' required />
                            {/* <label for=''>Phone</label> */}
                        </div>

                        <div className='input-box'>
                            <textarea name='' id='message' className='input' placeholder='Write your message' required></textarea>
                            {/* <label for=''>Name</label> */}
                        </div>
                        <div className='submit__btn'>
                            <button className='secondary__btn'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  </section>
}

export default Contact