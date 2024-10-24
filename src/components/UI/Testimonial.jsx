import React from 'react'
import '../../styles/testimonial.css'

import Slider from 'react-slick'

import av01 from '../../images/ava-1.jpg'

const Testimonial = () => {

    const settings = {
        dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swapToSlide: true,
    };
  return <section>
      <div className='container'>
        <div className='slider__content-top'>
            <h6 className='subtitle'>Testimonials</h6>
            <h2>Trusted by More Than {" "} 
            <span className='highlight'>5 customers</span></h2>
        </div>

        <div className='slider__wrapper'>
            <Slider {...settings}>
                <div className='slider__item'>
                    <p className='description'>
                        Our fast turnaround time ensures that your projects are completed efficiently and on schedule, without compromising quality. We understand the importance of meeting deadlines, and our team works diligently to deliver high-quality results in the shortest possible time.
                    </p>

                    <div className='customer__details'>
                        <div className='customer__img'>
                            <img src={av01} alt='' />
                        </div>

                        <div>
                            <h5 className='customer__name'>Parash Dhakal</h5>
                            <p className='description'>YouTuber, Parash Dhakal</p>
                        </div>
                    </div>
                </div>

                <div className='slider__item'>
                    <p className='description'>
                        Our fast turnaround time ensures that your projects are completed efficiently and on schedule, without compromising quality. We understand the importance of meeting deadlines, and our team works diligently to deliver high-quality results in the shortest possible time.
                    </p>

                    <div className='customer__details'>
                        <div className='customer__img'>
                            <img src={av01} alt='' />
                        </div>

                        <div>
                            <h5 className='customer__name'>Parash Dhakal</h5>
                            <p className='description'>YouTuber, Parash Dhakal</p>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    </div>
  </section>
}

export default Testimonial