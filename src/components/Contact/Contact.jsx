import React from 'react'
import log from '../Assets/logo no background.png'

const Contact = () => {
  return (
    <div className='container '>
      <h2 className='center'>Contact Us</h2>
        <div className='container'>
          <div className="row">
          <div className="col-md-4">
            <div className="card-body">
              <img src={log} className="card-img-top" alt="Side Image 1" />
              
            </div>
          </div>

          <div className="col-md-4">
 
              <div className="card-body">
                <h5 className="card-title">Image 1</h5>
                <p className="card-text">Description of the first image.</p>
              </div>             

          </div>

          <div className="col-md-4">
          <div className="card-body">
                <h5 className="card-title">Image 1</h5>
                <p className="card-text">Description of the first image.</p>
              </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact