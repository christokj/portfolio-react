import LoginPage from "./Components/LoginPage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Services from "./Components/Services";
import Home from "./Pages/Home";
import Experiences from "./Components/Experiences";
import Contact from "./Components/Contact";
import Social from "./Components/Social";
import SignupPage from "./Components/SignupPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <SignupPage/>} />
        <Route path="/Login" element={ <LoginPage />} />
        <Route path="/Home" element={ <Home />} />
        <Route path="/Services" element={ <Services/> } />
        <Route path="/Experiences" element={ <Experiences/>}/>
        <Route path="/Contact" element={ <Contact/>}/>
        <Route path="/Social" element={ <Social/>}/>
      </Routes>  
    </Router>
  );
}

export default App;
