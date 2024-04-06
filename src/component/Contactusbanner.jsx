import React from 'react'

const Contactusbanner = () => {
  return (
   <div className="container-fluid">
    <div className="row">
        <div className="contactusbg-image bg-img-1" >
          <div className="contactbanner-content">
          <h1>Ready to get started? Sign up now!</h1>
          <form>
            <input type="email" placeholder="Email Address" />
            <button className="btn btn-primary  banner-button btn-lg" type="submit">Submit</button>
          </form>
          </div>
       
        </div>
      </div>
   </div>
  )
}

export default Contactusbanner
