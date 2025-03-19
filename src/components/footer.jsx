import logoFooter from '../assets/footer.svg';

const Footer = () => {
    return (
      <footer className="footer-banner">
          <img src={logoFooter} alt="Logo Footer" className="footer__logo" />
          <p className="footer__text">@ 2025 kasa. All rigths reserved</p>
      </footer>
    );
};

export default Footer;

