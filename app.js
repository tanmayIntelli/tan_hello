import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./src/components/Header.js";
import Footer from "./src/components/Footer";
import About from "./src/components/About_new";
import Skills from "./src/components/Skills_new";
import Contact from "./src/components/Contact_new.js";
import ThemeProvider from "./src/utility/themeContextProvider.js";
import React from "react";
import ReactDOM from "react-dom/client";
import Projects from "./src/components/projects.js";

function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column"
          }}
        >
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
