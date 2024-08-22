import React from 'react'
import log from '../Assets/logo no background.png'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
        <div className='container'>
          <h2 className='center '>Contact Us</h2>
            <div className='container'>
              <div className="row">
              <div className="col-md-4">
                <div className="card-body">
                  <img src={log} className="card-img-top" alt="Side Image 1" />
                  
                </div>
              </div>

              <div className="col-md-4">
    
                  <div className="card-body">
                    <p className='card-text'><i class='bx bxl-gmail'></i><span className='wh'><a href=''>barbie@gmail.com</a></span></p>
                    <p className="card-text"><i class='bx bxs-phone'></i><span className='wh'>0713638636</span></p>
                    <p className="card-text"><i class='bx bxl-whatsapp'></i><span className='wh'>0713638636</span></p>
                    <p className="card-text"><i class='bx bxl-instagram'></i><span className='wh'> 0713638636 </span></p>
                    <p className="card-text"><i class='bx bxl-tiktok'></i><span className='wh'> 0713638636</span></p>
                  </div>             

              </div>

              <div className="col-md-4">
              <div className="card-body">
                    <h5 className="card-title center-text">Working hours</h5>
                    <p className="card-text">Mon- Fri  <span className='wh'>07: 00 - 18:00</span></p>
                    <p className="card-text">Sat- Sun  <span className='wh'>07: 00 - 18:00</span></p>
                    <p className="card-text">Holidays  <span className='wh'>07: 00 - 18:00</span></p>
                  </div>
              </div>
            </div>
            <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target=".bd-example-modal-lg">Large modal</button>
              <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="myLargeModalLabel">Reservation Form</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="name" className="form-label">Name</label>
                          <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="surname" className="form-label">Surname</label>
                          <input type="text" className="form-control" id="surname" placeholder="Enter your surname" />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">Email</label>
                          <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="phone" className="form-label">Phone Number</label>
                          <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="datetime" className="form-label">Date & Time</label>
                          <input type="datetime-local" className="form-control" id="datetime" />
                        </div>
                        <button type="submit" className="btn btn-dark">Reserve</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>


          </div>

        </div>
      </div>
  )
}

export default Contact