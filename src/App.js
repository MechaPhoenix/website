import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import logo from './assets/Logo.png';
import './App.css';


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

        {/* <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/recent-updates" element={<RecentUpdates />} />
          <Route path="/teasers" element={<Teasers />} />
          <Route path="/events" element={<Events />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/rules" element={<Rules />} />
          {/* <Route path="/discord" element={<DiscordWidget />} /> */}
          {/* <Route path="/trusted-sources" element={<TrustedSources />} />
          <Route path="*" element={<NotFound />} /> */}
        {/* </Routes> } */}
      </div>
    </Router>
  );
};

export default App;