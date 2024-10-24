import React from 'react'
import '../../styles/counter.css'

const counterData = [
    {
        number: 5,
        text: 'Clients'
    },

    {
        number: 5,
        text: 'Running Projects'
    },

    {
        number: 5,
        text: 'Projects Completed'
    }
]

const Counter = () => {
  return <section className='counter' id='projects'>
    <div className='container'>
        <div className='counter__wrapper'>
        {
            counterData.map((item, index)=>(
                <div className='counter__item' key={index}>
                <h3 className='counter__number'>{item.number}</h3>
                <h3 className='counter__title'>{item.text}</h3>
            </div>
            ))
        }
            
        </div>
    </div>
  </section>
}

export default Counter