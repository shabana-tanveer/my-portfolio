
import { FaGithub, FaLinkedin,  FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <h3>Shabana Tanveer</h3>
            <p>Made with ❤️ using React & Framer Motion</p>
            <p>&copy; 2026 All rights reserved.</p>
          </div>
          
          <div className="social-links">
            <a href="https://github.com/shabana-tanveer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/shabana-tanveer-b53a0b332" aria-label="LinkedIn"><FaLinkedin /></a>
            
            <a href="mailto:shabanatanveer844@gmail.com" aria-label="Email"><FaEnvelope /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;