import React from 'react'
import './Products.css'
import Nails1 from '../Assets/Nails.jpg'
import Nails2 from '../Assets/Nails 2.jpg'
import Nails3 from '../Assets/Nails 3.jpg'
import hair1 from '../Assets/Hai.jpeg'
import hair2 from '../Assets/Hair option 1.jpeg'
import hair3 from '../Assets/Hair option 2.jpeg'

const Products = () => {
  return (
    <div className='container'>
        <h2 className='center'>Prodcuts</h2>
        <div className='container'>
          <h4>
            Nails
          </h4>
          <div className="row">
          <div className="col-md-4">
            <div className="card middle-card">
              <img src={Nails1} className="card-img-top" alt="Side Image 1" />
              <div className="card-body">
                <h5 className="card-title">Image 1</h5>
                <p className="card-text">Description of the first image.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card middle-card">
              <img src={Nails2} className="card-img-top" alt="Middle Image" />
              <div className="card-body">
                <h5 className="card-title">Image 2</h5>
                <p className="card-text">Description of the middle image.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card middle-card">
              <img src={Nails3} className="card-img-top" alt="Side Image 2" />
              <div className="card-body">
                <h5 className="card-title">Image 3</h5>
                <p className="card-text">Description of the third image.</p>
              </div>
            </div>
          </div>
          <button className='btn-vm'>View more</button>
        </div>
      </div>
      <div className='container'>
          <h4>
            Hair
          </h4>
          <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src={hair1} className="card-img-top" alt="Side Image 1" />
              <div className="card-body">
                <h5 className="card-title">Image 1</h5>
                <p className="card-text">Description of the first image.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src={hair2} className="card-img-top" alt="Middle Image" />
              <div className="card-body">
                <h5 className="card-title">Image 2</h5>
                <p className="card-text">Description of the middle image.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src={hair3} className="card-img-top" alt="Side Image 2" />
              <div className="card-body">
                <h5 className="card-title">Image 3</h5>
                <p className="card-text">Description of the third image.</p>
              </div>
            </div>
          </div>
          <button className='btn-vm'>View more</button>
        </div>
      </div>
    </div>
  )
}

export default Products