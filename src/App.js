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
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={ <SignupPage/>} />
        <Route exact path="/Login" element={ <LoginPage />} />
        <Route exact path="/Home" element={ <Home />} />
        <Route exact path="/Services" element={ <Services/> } />
        <Route exact path="/Experiences" element={ <Experiences/>}/>
        <Route exact path="/Contact" element={ <Contact/>}/>
        <Route exact path="/Social" element={ <Social/>}/>
      </Routes>  
    </Router>
  );
}

export default App;
