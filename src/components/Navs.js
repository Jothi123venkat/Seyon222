import React from 'react';

const Navs = () => {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="nav">
      <nav className="navbar navbar-expand-lg navbar ">
        <div className="container">
          <img src="/Assests/IMAGES FOR WEB SITE/SEYON-di LOGO-1.png" alt="logo" style={{ width: '100px' }} />
          <button className="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
            aria-label="Toggle navigation" style={{ background: 'white' }}>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#Home"  onClick={() => handleScrollTo('Home')}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#About"  onClick={() => handleScrollTo('About')}>About us</a>
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
