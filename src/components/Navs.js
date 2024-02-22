import React, { useState } from 'react';

const Navs = () => {
  const [collapsed, setCollapsed] = useState(true); // State variable for collapse

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setCollapsed(true); // Collapse the navbar after clicking on a link
    }
  };

  return (
    <div className="nav">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <img src="/Assests/IMAGES FOR WEB SITE/SEYON-di LOGO-1.png" alt="logo" style={{ width: '100px' }} />
          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={() => setCollapsed(!collapsed)} // Toggle the collapse state
            aria-expanded={!collapsed ? "true" : "false"} 
            aria-label="Toggle navigation"
            style={{ background: 'white' }}>
            
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${collapsed ? '' : 'show'}`} id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#Home" onClick={() => handleScrollTo('Home')}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#About" onClick={() => handleScrollTo('About')}>About us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Showreel" onClick={() => handleScrollTo('Showreel')}>Show Reel</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Gallery" onClick={() => handleScrollTo('Gallery')}>Gallery</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Contact" onClick={() => handleScrollTo('Contact')}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navs;
