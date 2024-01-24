import React from 'react';
import { Admin, CustomRoutes, Authenticated } from 'react-admin';
import Login from "./components/pages/admin/login"
import DashBoard from './components/pages/admin/dashboard';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import logo from './assets/Logo.png';
import './App.css';
import Home from './components/pages/Home'
import Team from './components/pages/OurTeam'
import ErorrPage from "./components/pages/404"
import { CaptchaSiteKey, CaptchaSiteSecretKey } from './backend/json/api.json'



const App = () => {
  return (
    <Router>
      <div>
        <header>
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="/" activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/Events" activeClassName="active">
                  Events
                </NavLink>
              </li>
              <li>
                <NavLink to="/Socials" activeClassName="active">
                  Socials
                </NavLink>
              </li>
              <li>
                <NavLink to="/Donate" activeClassName="active">
                  Donate
                </NavLink>
              </li>
              <li>
                <NavLink to="/Sponsors" activeClassName="active">
                  Sponsors
                </NavLink>
              </li>
              <li>
                <NavLink to="/announcements" activeClassName="active">
                  Announcements
                </NavLink>
              </li>
              <li>
                <NavLink to="/team" activeClassName="active">
                  Our team
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact-us" activeClassName="active">
                  Contact Us
                </NavLink>
              </li>
              {/* <li>
              <NavLink to="/discord" activeClassName="active">
                Discord
              </NavLink>
            </li> */}
            </ul>
          </nav>
        </header>






        {/* Google Capthca Script */}
        <script src="https://www.google.com/recaptcha/api.js"></script>


        {/* <button class="g-recaptcha" 
        data-sitekey={CaptchaSiteKey}
        data-callback='onSubmit' 
        data-action='submit'>Submit</button> */}

        
  {/* <Admin>
                <CustomRoutes>
                   <Route path='/dashboard' element={<Authenticated><DashBoard /></Authenticated>} />
                </CustomRoutes>
             </Admin> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<ErorrPage />} />
          <Route path="/team" element={ <Team />} />
          <Route path="/login" element={ <Login />} />
          {/* <Route path='/dashboard' element={ <DashBoard />} /> */}
          <Route path='/dashboard' element={<Authenticated>< DashBoard /></Authenticated>} />
        </Routes>
        
      </div>
    </Router>
  );
};

export default App;