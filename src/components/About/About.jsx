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
                        <button type="button" className="btn btn-dark mt-2 mb-2 button d-block mx-auto" data-bs-toggle="modal" data-bs-target=".bd-example-modal2-lg">Meet The Team</button>
                            <div className="modal fade bd-example-modal2-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                <div className="modal-header justify-content-center">
                                    <h5 className="modal-title" id="myLargeModalLabel">Meet The Team</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="row">
                                    <div className="col-md-6">
                                        <div className="card">
                                        <img src="path/to/image1.jpg" className="card-img-top rounded-circle" alt="Team Member 1" style={{ width: '150px', height: '150px', margin: '20px auto' }} />
                                        <div className="card-body text-center">
                                            <h5 className="card-title">Sphe</h5>
                                            <p className="card-text"><strong>Phone Number:</strong> +123456789</p>
                                            <p className="card-text"><strong>Email:</strong> Sphe@gmial.com</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card">
                                        <img src="path/to/image2.jpg" className="card-img-top rounded-circle" alt="Team Member 2" style={{ width: '150px', height: '150px', margin: '20px auto' }} />
                                        <div className="card-body text-center">
                                            <h5 className="card-title">Jane Smith</h5>
                                            <p className="card-text"><strong>Phone Number:</strong> +987654321</p>
                                            <p className="card-text"><strong>Email:</strong> jane.smith@example.com</p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About