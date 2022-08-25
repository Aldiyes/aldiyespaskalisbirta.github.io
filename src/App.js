import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import MainActivity from "./pages/activity/MainActivity";
import Footer from "./components/Footer";
import Internal from "./pages/registration-internal/Internal";
import Eksternal from "./pages/registration-eksternal/Eksternal";

import "./App.css";
function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/" element={<About />} />
        <Route path="/main-activity/" element={<MainActivity />} />
        <Route path="/registration/" element={<Internal />} />
        <Route path="/registration/" element={<Eksternal />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
