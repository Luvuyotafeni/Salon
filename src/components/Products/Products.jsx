import React from 'react';
import './Products.css';
import data from './Products-API';
import Nails1 from '../Assets/Nails.jpg';
import Nails2 from '../Assets/Nails 2.jpg';
import Nails3 from '../Assets/Nails 3.jpg';
import hair1 from '../Assets/Hai.jpeg';
import hair2 from '../Assets/Hair option 1.jpeg';
import hair3 from '../Assets/Hair option 2.jpeg';

const Products = () => {
  const nailsProducts = data.filter(item => item.category === "Nails");
  const hairProducts = data.filter(item => item.category === "Hair");

  return (
    <div className='container'>
      <h2 className='center'>Products</h2>
      <div className='container'>
        <h4>Nails</h4>
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
        </div>
        <button type="button" className="btn btn-dark mt-2 mb-2" data-bs-toggle="modal" data-bs-target=".bd-example-modal3-lg">View more</button>
        <div className="modal fade bd-example-modal3-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Nails Products</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  {nailsProducts.map(product => (
                    <div key={product.id} className="col-md-4">
                      <div className="card">
                        <img src={product.image} className="card-img-top" alt={product.title} />
                        <div className="card-body">
                          <h5 className="card-title">{product.title}</h5>
                          <p className="card-text">{product.desc}</p>
                          <p className="card-text">${product.price}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <h4>Hair</h4>
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
        </div>
        <button type="button" className="btn btn-dark mt-2 mb-2" data-bs-toggle="modal" data-bs-target=".bd-example-modal4-lg">View more</button>
        <div className="modal fade bd-example-modal4-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Hair Products</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  {hairProducts.map(product => (
                    <div key={product.id} className="col-md-4">
                      <div className="card">
                        <img src={product.image} className="card-img-top" alt={product.title} />
                        <div className="card-body">
                          <h5 className="card-title">{product.title}</h5>
                          <p className="card-text">{product.desc}</p>
                          <p className="card-text">${product.price}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
