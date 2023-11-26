import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Listings from "./components/Listings";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Listings />
    </div>
  );
}

export default App;
