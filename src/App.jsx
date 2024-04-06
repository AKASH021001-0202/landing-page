import "./App.css";
import Banner from "./assets/component/Banner";
import Card from "./assets/component/Card";
import Navbar from "./assets/component/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import Showcase from "./assets/component/Showcase";
import Testimonial from "./assets/component/Testimonial";


function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Card />
    <Showcase/>
    <Testimonial/>
    </>
  );
}

export default App;
