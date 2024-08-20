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
                    <p className='card-text'> <a href=''>barbie@gmail.com</a></p>
                    <p className="card-text">0713638636</p>
                    <p className="card-text">0713638636</p>
                    <p className="card-text">0713638636</p>
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
          </div>

        </div>
      </div>
  )
}

export default Contact