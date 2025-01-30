import AboutUs from "../components/Aboutus";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
