import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="font-body">Main</main>
      <Footer />
    </div>
  );
};

export default AppLayout;
