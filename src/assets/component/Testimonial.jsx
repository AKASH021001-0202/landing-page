import React from "react";
import {testimonialData} from '../../data.js'

const Testimonial = () => {
  return (
    <div className="container testimonial-padding">
        <h1 style={{textAlign:"center"}}>What people are saying...</h1>
      <div className="row" >
        {testimonialData.map((item, index) => (
          <div className="col-lg-4 testimonial-content" key={index}>
            <img src={item.imageUrl} alt={item.name} />
            <h5>{item.name}</h5>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
