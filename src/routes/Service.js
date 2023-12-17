import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="/assets/night.jpg"
        title="Service"
        btnClass="hide"
      />
      <Footer />
    </>
  );
}
export default Service;
