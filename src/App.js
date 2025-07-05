import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import AboutUs from "./Components/AboutUs/AboutUs";
import ContacUs from "./Components/ContactUs/ContactUs";
import Home from "./Components/Home/Home";
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContacUs />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />






        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
