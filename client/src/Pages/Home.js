import React from 'react'
import Header from '../Component/Header'
import CardSection from '../Component/CardSection'
import InfoSection from '../Component/InfoSection'
import Accordion from '../Component/Accordian'
import Testimonial from '../Component/Testimonial'
import Footer from '../Component/Footer'
import Plans from '../Component/Plans'
import Carousel1 from '../Component/Carousel1'
import Header1 from '../Component/Header1'
import Plans1 from '../Component/Plans1'
import Carousel2 from '../Component/Carousel2'


function Home() {
  return (
    <div>
        {/* <Header/> */}
        <Header1/>
        <Carousel2/>
        {/* <Carousel1/> */}
        <CardSection/>
        <Plans1/>
        <InfoSection/>
        <Testimonial/>
        <Accordion/>
        <Footer/>

    </div>
  )
}

export default Home;