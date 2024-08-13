import React from 'react'
import './About.css'
import aboutimg from '../Assets/About image.jpeg'

const About = () => {
  return (
    <>
        <div>
            <h2 className='text-center'>About</h2>
            <div className='about-info'>
                <div className='about'>
                    <img src={aboutimg}/>
                </div>
                <div>
                    <p> Welcome to Barbie Hair, the premium hair and nail salon in Durban, proudly owned by Sphe Sithole.
                        At Barbie Hair, we specialize in providing top-notch hair and nail services that leave our clients
                        feeling beautiful and confident. Whether you're looking for a fresh and stunning new hairstyle,
                        or perfectly manicured nails, our talented and experienced team is here to bring your beauty vision
                        to life. Join us at Barbie Hair and experience the ultimate in salon luxury and personalized care. </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default About