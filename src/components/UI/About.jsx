import React from 'react'
import '../../styles/about.css'
import aboutImg from '../../images/about-us.jpg'


const chooseData = [
    {
        icon: "ri-wifi-line",
        title: "First Working Process",
        desc: "Our process begins with understanding your goals, conducting research, and crafting a tailored strategy"
    },

    {
        icon: "ri-team-line", 
        title: "Dedicated Team",
        desc: "Our dedicated team provides personalized attention, ensuring consistent communication, focused expertise, and tailored solutions"
    },

    {
        icon: "ri-customer-service-2-line",
        title: "24/7 Hours Support",
        desc: "We offer 24/7 support to ensure continuous assistance, promptly addressing any issues or queries, no matter the time or location"
    },

    {
        icon: "ri-timer-line",
        title: "Fast Turnround Time",
        desc: "Our fast turnaround time guarantees efficient project completion, allowing you to meet deadlines and achieve your goals"
    },
]

const About = () => {
  return <section id='about'>
    <div className='container'>
        <div className='about__wrapper'>
            <div className='about__content'>
                <h6 className='subtitle'>Why Choose us</h6>
                <h2>Specialist in Aviding Clients on</h2>
                <h2 className='highlight'>Financial Challenge</h2>
                <p className='description about__content-desc'>
                We are a dedicated digital agency specializing in web development, SEO, graphic design, and digital marketing. Our mission is to help businesses grow through innovative, results-driven strategies and creative solutions.
                </p>

                  <div className='choose__item-wrapper'>
                      {
                          chooseData.map((item, index) => (
                              <div className='choose__us-item' key={index}>
                                  <span className='choose__us-icon'><i class={item.icon}></i></span>
                                  <div>
                                      <h4 className='choose__us-title'>{item.title}</h4>
                                      <p className='description'>
                                          {item.desc}
                                      </p>
                                  </div>
                              </div>
                          ))
                      }
                  </div>
            </div>

            <div className='about__img'>
                <img src={aboutImg} alt='about-us' />
            </div>
        </div>
    </div>
  </section>
}

export default About