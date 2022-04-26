import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import "./styles/GlobalStyles.css";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Home from "./Sections/Hero";
import About from "./Sections/About";
import { AnimatePresence } from "framer-motion";
import Content from "./Sections/Content";
import Care from "./Sections/Care";
import Deep from "./Sections/Deep";
import Picture from "./Components/Picture";
import Team from "./Sections/Team";
import Talk from "./Sections/Talk";
import Footer from "./Sections/Footer";

function App() {
  const containerRef = useRef(null);
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        // ... all available Locomotive Scroll instance options
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      }}
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}
    >
      <AnimatePresence>
        <div className="App" data-scroll-container ref={containerRef}>
          <Home />
          <About />
          <Content />
          <Care />
          <Deep />
          <Picture />
          <Team />
          <Talk />
          <Footer />
        </div>
      </AnimatePresence>
    </LocomotiveScrollProvider>
  );
}

export default App;
