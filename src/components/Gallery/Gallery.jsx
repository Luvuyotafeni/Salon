import React from 'react';
import './Gallery.css'; // Import your custom styles
import G1 from '../Assets/Gallery image 1.jpeg'
import G2 from '../Assets/Gallery image 2.jpeg'
import G3 from '../Assets/Gallery image 3.jpeg'


const Gallery = () => {
  return (
    <div className="container">
      <h2 className='center'>Gallery</h2>
      <div className="row">
        <div className="col-md-4 side">
          <div className="card middle-card side">
            <img src={G1} className="card-img-top" alt="Side Image 1" />
   
          </div>
        </div>

        <div className="col-md-4 side">
          <div className="card ">
            <img src={G2}className="card-img-top" alt="Middle Image" />
            
          </div>
        </div>

        <div className="col-md-4 side">
          <div className="card middle-card side">
            <img src={G3} className="card-img-top " alt="Side Image 2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
