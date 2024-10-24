import React from 'react'
import '../../styles/blog.css'

import videoImg from '../../images/video.png'
import articleImg from '../../images/article.png'
import caseImg from '../../images/case-study.png'


const blogData =[
    {
        imgUrl : videoImg,
        title : 'Video',
        desc : 'To Know About Work. Watch Some Video F...',
        link : "#"
    },

    {
        imgUrl : articleImg,
        title : 'Articles',
        desc : 'Do You Want To Improve The Way Your Brand Interacts With Customers? Lets Talk...',
        link : "#"
    },

    {
        imgUrl : caseImg,
        title : 'Case Study',
        desc : 'Boost Your Conversation Rate With Us...',
        link : "#"
    },
]

const Blog = () => {
  return <section id='blog' className='blog'>
      <div className='container'>
          <div className='blog__top-content'>
              <h6 className='subtitle'>Our Blog</h6>
              <h2>Let's have a Look From Our
                  <span className='highlight'> Recent blog</span></h2>
          </div>

          <div className='blog__wrapper'>
              {
                  blogData.map((item, index) => (
                      <div className='blog__item' key={index}>
                          <h3>{item.title}</h3>
                          <div className='blog__img'>
                              <img src={item.imgUrl} alt='' />
                          </div>
                          <p className='description blog__desc'>{item.desc}</p>
                          <div>
                              <a href={item.link} className="learn__more">
                                  <i class="ri-arrow-right-line"></i>
                              </a>
                          </div>
                      </div>
                  ))
              }
          </div>
      </div>
  </section>
}

export default Blog