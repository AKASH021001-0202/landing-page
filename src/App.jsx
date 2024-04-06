import "./App.css";
import Banner from "./component/Banner";
import Navbar from "./component/Navbar";
import Card from "./component/Card";
import "bootstrap-icons/font/bootstrap-icons.css";
import Showcase from "./component/Showcase";
import Testimonial from "./component/Testimonial";
import Contactusbanner from "./component/Contactusbanner";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Card />
      <Showcase />
      <Testimonial />
      <Contactusbanner />
      <Footer/>
    </>
  );
}

export default App;
