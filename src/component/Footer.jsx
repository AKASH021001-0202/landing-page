import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="container-fluid p-4">
        <div className="row">
          <div className="col-lg-9">
            <div className="footer-content">

            <ul className='footer-list'>
              <li>about us</li>
              <li>.&nbsp; Contact</li>
              <li> .&nbsp;Terms of Use</li>
              <li>.&nbsp; Privacy Policy</li>
              
            </ul>
            <p>© Your Website 2023. All Rights Reserved.</p>
            </div>
          </div>
          <div className="col-lg-3">
            <ul  className='social-icons'>
            
              <li> <i class="bi bi-facebook"></i></li>
              <li> <i class="bi bi-twitter-x"></i></li>
              <li> <i class="bi bi-instagram"></i></li>
              
            </ul>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
