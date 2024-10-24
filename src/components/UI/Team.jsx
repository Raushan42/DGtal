import React from 'react'
import '../../styles/team.css'
import team01 from '../../images/my_img.png'
import team02 from '../../images/bishal.jpg'
import team03 from '../../images/prachand.jpg'


const teamMembers = [
    {
        imgUrl : team01,
        name: 'Raushan Sharma',
        position: 'Video Editor'
    },

    {
        imgUrl : team01,
        name: 'Samsher Bist',
        position: 'Graphics Designer'
    },

    {
        imgUrl : team02,
        name: 'Bishal Puri',
        position: 'Front-End Developer'
    },

    {
        imgUrl : team03,
        name: 'Prachand Bist',
        position: 'SEO Expert'
    },
]

const Team = () => {
  return <section className='our__team'>
    <div className='container'>
        <div className='team__content'>
            <h6 className='subtitle'>Our Team</h6>
            <h2>
                Meet With <span className='highlight'>Our Team</span>
            </h2>
        </div>

        <div className='team__wrapper'>
              {
                  teamMembers.map((item, index) => (
                      <div className='team__item' key={index}>
                          <div className='team__img'>
                              <img src={item.imgUrl} alt='' />
                          </div>
                          <div className='team__details'>
                              <h4>{item.name}</h4>
                              <p className='description'>{item.position}</p>

                              <div className='team__member-social'>
                                  <span><i class="ri-linkedin-line"></i></span>
                                  <span><i class="ri-instagram-line"></i></span>
                              </div>
                          </div>
                      </div>
                  ))
              }
        </div>
    </div>
  </section>
}

export default Team