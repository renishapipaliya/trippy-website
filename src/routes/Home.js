import Destination from "../component/Destination";
import Footer from "../component/Footer";
import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import Trip from "../component/Trip";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="/assets/12.jpg"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}
export default Home;
