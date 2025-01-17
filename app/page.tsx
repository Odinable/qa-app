import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="pt-[90px] bg-[#1c2841]">
        <Cards />
      </div>
      <Footer />
    </div>
  );
}
