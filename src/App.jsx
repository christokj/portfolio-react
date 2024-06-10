import LoginPage from "./Pages/LoginPage";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Services from "./Pages/Services";
import Home from "./Pages/Home";
import Experiences from "./Pages/Experiences";
import Contact from "./Pages/Contact";
import Social from "./Pages/Social";
import SignupPage from "./Pages/SignupPage";
import MainLayout from './Components/MainLayout';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <MainLayout>
        <Routes>
          <Route exact path="/" element={<SignupPage />} />
          <Route exact path="/Login" element={<LoginPage />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/Services" element={<Services />} />
          <Route exact path="/Experiences" element={<Experiences />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Social" element={<Social />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
