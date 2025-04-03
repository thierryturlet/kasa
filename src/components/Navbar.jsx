import { NavLink } from 'react-router-dom';
import kasaLogo from '../assets/logo.svg'; 

const Navbar = () => {
  return (
    <header className="kasa-banner">
      <img src={kasaLogo} alt="Kasa logo" className="kasa-logo" />
      <nav className="links">
        <NavLink to="/" className={({ isActive }) => isActive ? "link active" : "link"}>
          Accueil
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "link active" : "link"}>
          A Propos
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
