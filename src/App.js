import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import {
  Main,
  About,
  Languages,
  MobileLanguages,
  Projects,
  Contact,
} from "./pages/index";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial size
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Main />
        <About />
        <Projects />
        {isMobile ? <MobileLanguages /> : <Languages />}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
