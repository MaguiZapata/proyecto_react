import React from 'react'
import { NavLink } from 'react-router-dom'
import './About.css'


function About() {
  return (
    <>
    <h2>About</h2>
    <div className='about-container'>
      <img src={require('./../../assets/images/about.png')} alt="" />
      <div className='text'>
        <p>Sed lobortis orci in ligula molestie convallis. Aliquam imperdiet id est in viverra. Nunc ac gravida elit. Vestibulum mattis cursus libero, sed vehicula ex efficitur quis. In tristique enim eu hendrerit volutpat. Cras malesuada sed urna vitae vehicula. Aenean ligula urna, maximus vitae volutpat bibendum, egestas quis arcu. Proin luctus sodales nisi. Ut dignissim diam nunc, ut tincidunt leo faucibus ut. Nulla vitae urna tincidunt, sodales felis a, hendrerit magna. Phasellus viverra iaculis arcu a imperdiet. Cras cursus accumsan gravida. Donec commodo posuere eros sit amet consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum non ligula id magna ornare aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        <button className='btn '><NavLink to="/">Go to HomePage</NavLink></button>
      </div>
    </div>
    </>
    
  )
}

export default About