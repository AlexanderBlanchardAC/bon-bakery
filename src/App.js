import Nav from "./components/nav/Nav"
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Order from "./pages/Order";
import Menu from "./pages/Menu";

import Spotlight from "./pages/Spotlight.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
  
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/contact" element={ <Contact />} />
          <Route path="/about" element={ <About /> } />
          <Route path="/menu" element={ <Menu />} />
          <Route path="/order" element={ <Order /> } />
          <Route path="/spotlight" element={ <Spotlight />} />
        </Routes>
      </Router>
    
     
  
  );
}

export default App;
