import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faUser, 
  faProjectDiagram, 
  faBars, 
  faTimes 
} from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <Link to="/" className="logo">Eren Güzel</Link>
          <button 
            className="mobile-menu-toggle" 
            onClick={toggleMobileMenu}
          >
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
          </button>
        </div>
        <nav className={`main-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/" className="nav-link" onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={faHome} />
            Anasayfa
          </Link>
          <Link to="/about" className="nav-link" onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={faUser} />
            Hakkımda
          </Link>
          <Link to="/projects" className="nav-link" onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={faProjectDiagram} />
            Projeler
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
