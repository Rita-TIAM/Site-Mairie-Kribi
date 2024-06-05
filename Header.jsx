import React, { useState } from 'react';
import './styles/Header.css';

const Menu = () => {
  return (
    <div className="menu position-absolute top-0 start-0 bg-white shadow-sm p-3">
      <button className="btn btn-light mb-3">X MENU</button>
      <nav className="menu-items">
        <a href="#decouvrir1" className="d-block mb-2">DECOUVRIR</a>
        <a href="#decouvrir2" className="d-block mb-2">DECOUVRIR</a>
        <a href="#s-informer" className="d-block mb-2">S'INFORMER</a>
        <a href="#contact" className="d-block">CONTACT</a>
      </nav>
    </div>
  );
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header d-flex justify-content-between align-items-center p-3">
      <div className="header-left d-flex align-items-center">
        <button className="btn btn-light me-2"><i class="fas fa-accessible-icon    "></i></button>
        <button className="menu-button btn btn-light" onClick={toggleMenu}>
          <span className="menu-icon">☰</span> MENU
        </button>
      </div>
      <div className="header-right d-flex align-items-center">
        <button className="btn btn-light me-2">🔍 RECHERCHE</button>
        <button className="btn btn-light">👤 MON COMPTE</button>
      </div>
      {menuOpen && <Menu />}
    </header>
  );
};

export default Header;
