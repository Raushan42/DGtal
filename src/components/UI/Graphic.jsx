import React from 'react'
import '../../styles/graphic.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'




const Graphic = () => {
  return <div id='graphics'>
  <Header />
  <main style={{ minHeight: '80vh' }}>
    <h2>About Us</h2>
    <p>This is the about page where you can learn more about us.</p>
  </main>
  <Footer />
</div>
}

export default Graphic