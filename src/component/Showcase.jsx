import React from 'react';
import { showcaseData } from "../data.js";

const Showcase = () => {
  return (
    <div className="container-fluid">
      {showcaseData.map((showcase, index) => (
        <div className="row" key={index}>
          <div className={`col-lg-6 ${index % 2 === 0 ? 'order-lg-2' : 'order-lg-1'} p-0 ${index % 2 === 0 ? 'order-sm-1' : 'order-sm-2'}`}>
            <img src={showcase.imageUrl} alt="" />
          </div>
          <div className={`col-lg-6 ${index % 2 === 0 ? 'order-lg-1' : 'order-lg-2'} p-0 ${index % 2 === 0 ? 'order-sm-2' : 'order-sm-1'}`}>
            <div className='showcase-content'>
              <h1>{showcase.title}</h1>
              <p>{showcase.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Showcase;
