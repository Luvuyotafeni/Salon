import React from 'react';
import './Gallery.css'; // Import your custom styles

const Gallery = () => {
  return (
    <div className="container">
      <h2 className='center'>Gallery</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/350x150" className="card-img-top" alt="Side Image 1" />
   
          </div>
        </div>

        <div className="col-md-4">
          <div className="card middle-card">
            <img src="https://via.placeholder.com/350x300" className="card-img-top" alt="Middle Image" />
            
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/350x150" className="card-img-top" alt="Side Image 2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
