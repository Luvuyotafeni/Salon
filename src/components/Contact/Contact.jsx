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
            <button className='btn btn-dark'>Make Reservation</button>
          </div>

        </div>
      </div>
  )
}

export default Contact