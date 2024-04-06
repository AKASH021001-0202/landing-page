import React from 'react';
import {showcaseData} from '../../data.js'
const Showcase = () => {
  return (
    <div className="container-fluid mt-5" >
        {showcaseData.map((showcase, index) => (
          <div className="row" key={index}>
            <div className={`col-lg-6 ${index % 2 === 0 ? 'order-2' : 'order-1'} p-0`}>
              <img src={showcase.imageUrl} alt="" />
            </div>
            <div className={`col-lg-6 ${index % 2 === 0 ? 'order-1' : 'order-2'} p-0`}>
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
