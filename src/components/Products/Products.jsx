import React from 'react'
import './Prodcuts.css'

const Products = () => {
  return (
    <div className='container'>
        <h2>Prodcuts</h2>
        <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/350x150" className="card-img-top" alt="Side Image 1" />
            <div className="card-body">
              <h5 className="card-title">Image 1</h5>
              <p className="card-text">Description of the first image.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card middle-card">
            <img src="https://via.placeholder.com/350x300" className="card-img-top" alt="Middle Image" />
            <div className="card-body">
              <h5 className="card-title">Image 2</h5>
              <p className="card-text">Description of the middle image.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/350x150" className="card-img-top" alt="Side Image 2" />
            <div className="card-body">
              <h5 className="card-title">Image 3</h5>
              <p className="card-text">Description of the third image.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Products