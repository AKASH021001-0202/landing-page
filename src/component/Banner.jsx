// import bgimg from '../assets/bg-masthead.jpg'

function Banner() {
  return (
    <div className="banner-section">
    <div className=" container-fluid">
      <div className="row">
        <div className="bg-image bg-img-1" >
          <div className="banner-content">
          <h1>Generate more leads with a professional landing page!</h1>
          <form>
            <input type="email" placeholder="Email Address" />
            <button className="btn btn-primary  banner-button btn-lg" type="submit">Submit</button>
          </form>
          </div>
       
        </div>
      </div>
    </div>
    </div>

  );
}

export default Banner;
