import React from 'react'
import '../../styles/service.css'

const serviceData = [
    {
        icon: 'ri-edit-box-line',
        title: 'Video Editing',
        desc: 'Professional video editing services to enhance your content, ensuring smooth transitions, perfect cuts, and engaging visual storytelling'
    },

    {
        icon: 'ri-landscape-line',
        title: 'Graphics Design',
        desc: 'Creative graphic design services to bring your ideas to life with stunning visuals, branding, and eye-catching designs for your Brand'
    },

    {
        icon: 'ri-bar-chart-2-line',
        title: 'Digital Marketing',
        desc: "Comprehensive Digital Marketing to grow your brand, drive traffic, and boost conversions through targeted strategies and campaigns"
    },

    {
        icon: 'ri-code-box-line',
        title: 'Web Development',
        desc: "To build responsive, user-friendly websites that enhance functionality, engagement, and brand presence online"
    },
]

const Service = () => {
  return <section className='service' id='service'>
    <div className='container'>
        <div className='service__top-content'>
            <h6 className='subtitle'>Our Services</h6>
            <h2>Save Time Managing Your Business With</h2>
            <h2 className='highlight'>Our Best Services</h2>
        </div>

        <div className='service__item-wrapper'>
            {
                serviceData.map((item, index) =>(

                    <div className='service__item' key={index}>
                        <span className='service__icon'><i class={item.icon}></i></span>
                        <h3 className='service__title'>{item.title}</h3>
                        <p className='description'>{item.desc}</p>
                    </div>
                ))
            }
        </div>
    </div>
  </section>
}

export default Service