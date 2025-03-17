import { Link } from 'react-router-dom'
import kasaLogo from '../assets/logo.svg'; 

const Navbar = () => {
  return (
    <header className="kasa-banner">
        <img src={kasaLogo} alt="Kasa logo" className="kasa-logo" />
      <nav className="link">
          <Link to="/" className="links">Accueil</Link>
          <Link to="/about" className="links">À propos</Link>
      </nav>
    </header>
  );
};

export default Navbar; 