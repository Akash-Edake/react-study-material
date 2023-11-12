import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import "./components/assets/css/animate.min.css";
import "./components/assets/css/magnific-popup.css";
import "./components/assets/css/flaticon.css";
import "./components/assets/css/odometer.css";
import "./components/assets/css/aos.css";
import "./components/assets/css/slick.css";
import "./components/assets/css/default.css";
import "./components/assets/css/style.css";
import "./components/assets/css/responsive.css";
import Loading from "./components/assets/Loading";
const MainHeadre = lazy(() => import("./components/layout/header/MainHeadre"));
const MainFooter = lazy(()=>import("./components/layout/footer/MainFooter"))
const Home = lazy(()=>import("./components/pages/home/Home"))
const AboutUs = lazy(()=>import("./components/pages/company/AboutUs"))
const Servies = lazy(()=>import("./components/pages/services/Servies"))
const Python = lazy(()=>import("./components/pages/services/Python"))
const Contacts = lazy(()=>import("./components/pages/contacts/Contacts"))
function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Router>
          <header>
            <MainHeadre />
          </header>

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about-us" element={<AboutUs />} />
            <Route exact path="/cources" element={<Servies />} />
            <Route exact path="/cources/python" element={<Python />} />
            <Route exact path="/Contacts" element={<Contacts />} />
            <Route path="*" element={<Home />} />
          </Routes>

          <footer>
            <MainFooter />
          </footer>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
