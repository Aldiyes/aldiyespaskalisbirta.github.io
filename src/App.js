import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import MainActivity from "./pages/activity/MainActivity";
import Footer from "./components/Footer";
import Internal from "./pages/registration-internal/Internal";
import Eksternal from "./pages/registration-eksternal/Eksternal";
import BandAkustik from "./components/registrasi-eksternal-component/ITDaysEksternalBandAkustik";
import ShortMovie from "./components/registrasi-eksternal-component/ITDaysEksternalShortMovie";
import Valorant from "./components/registrasi-eksternal-component/ITDaysEksternalValorant";
import MobileLegend from "./components/registrasi-eksternal-component/ITDaysEksternalMobileLegend";
import Futsal from "./components/registrasi-eksternal-component/ITDaysEksternalFutsal";
import Query100 from "./components/registrasi-internal-component/ITDaysInternalQuery100";
import FunGames from "./components/registrasi-internal-component/ITDaysInternalFunGames";
import "./App.css";
function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/" element={<About />} />
        <Route path="/main-activity/" element={<MainActivity />} />
        <Route path="/registrasi/internal" element={<Internal />} />
        <Route path="/registrasi/eksternal" element={<Eksternal />} />
        <Route path="/ITDaysBandAkustik" element={<BandAkustik />} />
        <Route path="/ITDaysShortMovie" element={<ShortMovie />} />
        <Route path="/ITDaysValorant" element={<Valorant />} />
        <Route path="/ITDaysMobileLegend" element={<MobileLegend />} />
        <Route path="/ITDaysFutsal" element={<Futsal />} />
        <Route path="/ITDaysQuery100" element={<Query100 />} />
        <Route path="/ITDaysFunGames" element={<FunGames />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
