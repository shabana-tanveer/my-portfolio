import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Navbar background change
      setScrolled(window.scrollY > 50);

      // Scroll progress
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const scrolledPercent = (scrollTop / height) * 100;
      setProgress(scrolledPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: FaHome },
    { id: 'about', label: 'About', icon: FaUser },
    { id: 'skills', label: 'Skills', icon: FaCode },
    { id: 'projects', label: 'Projects', icon: FaProjectDiagram },
    { id: 'contact', label: 'Contact', icon: FaEnvelope }
  ];

  return (
    <>
      {/* 🔥 Scroll Progress Bar */}
      <div className="scroll-progress">
        <div 
          className="progress-bar" 
          style={{ width: `${progress}%` }}
        />
      </div>

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-content">

            {/* Logo */}
            <div className="nav-logo" onClick={() => scrollTo('home')}>
              <span className="logo-text">ST</span>
              <span className="logo-name">Shabana</span>
            </div>

            {/* Desktop Menu */}
            <ul className="nav-links">
              {navItems.map(item => (
                <li key={item.id}>
                  <button 
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={() => scrollTo(item.id)}
                  >
                    <item.icon />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>

            {/* Mobile Toggle */}
            <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Menu */}
          <ul className={`mobile-menu ${isOpen ? 'open' : ''}`}>
            {navItems.map(item => (
              <li key={item.id}>
                <button 
                  className={`nav-link mobile ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => scrollTo(item.id)}
                >
                  <item.icon />
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;