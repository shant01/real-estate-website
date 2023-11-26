import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Listings from "./components/Listings";
import Testimonials from "./components/Testimonials";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Listings />
      <Testimonials />
    </div>
  );
}

export default App;
