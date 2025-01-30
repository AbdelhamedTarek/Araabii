import AboutUs from "../components/Aboutus";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import OurTrips from "../components/OurTrips";
import Services from "../components/Services";

const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <OurTrips />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
