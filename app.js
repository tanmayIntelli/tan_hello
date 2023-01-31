import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./src/components/Header.js";
import Footer from "./src/components/Footer";
import WelcomePage from "./src/components/welcomePage";
import About from "./src/components/About";
import Skills from "./src/components/Skills";
import Contact from "./src/components/Contact";
import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "93vh" }}>
        <WelcomePage />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
