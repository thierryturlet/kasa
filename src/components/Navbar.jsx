
import kasaLogo from '../assets/logo.svg'; 

const Navbar = () => {
  return (
    <nav className="kasa-banner">
      <div>
        <img src={kasaLogo} alt="Kasa logo" className="kasa-logo" />
      </div>
      <ul className="link">
        <li>
          <Link to="/" className="links">Accueil</Link>
        </li>
        <li>
          <Link to="/about" className="links">À propos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;