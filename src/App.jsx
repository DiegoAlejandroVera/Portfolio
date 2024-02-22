import ParticlesBg from "./components/Particles";
import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";
import Footer from "./components/Footer";
import Goback from "./components/Goback";
import { useEffect, useState } from "react";

function App() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    window.scrollY > 0;
    setScrolled(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative flex flex-col max-w-[1600px] mx-auto w-full text-sm sm:text-base min-h-screen">
      <ParticlesBg />
      <Goback scrolled={scrolled} />
      <Header scrolled={scrolled} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
