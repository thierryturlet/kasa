import logoFooter from '../assets/footer.svg';

const Footer = ({ opacity }) => {
  return (
    <footer className="footer-banner"> 
      <div className="footer-overlay" style={{ opacity }}></div>
      <img src={logoFooter} alt="Logo Footer" className="footer__logo" />
      <p className="footer__text">
        <span className="footer__line1">© 2020 Kasa.</span>
        <span className="footer__line2">All rights reserved.</span>
      </p>
    </footer>
  );
};

export default Footer;


