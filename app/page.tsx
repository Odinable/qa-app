import Cards from "./components/Cards";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="mt-[72px]">
        <Cards />
      </div>
    </div>
  );
}
