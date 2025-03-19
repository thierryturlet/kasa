import { Link } from 'react-router-dom'
import kasaLogo from '../assets/logo.svg'; 

const Navbar = () => {
  return (
    <header className="kasa-banner">
        <img src={kasaLogo} alt="Kasa logo" className="kasa-logo" />
      <nav className="links">
          <Link to="/" className="link">Accueil</Link>
          <Link to="/about" className="link">À propos</Link>
      </nav>
    </header>
  );
};

export default Navbar; 