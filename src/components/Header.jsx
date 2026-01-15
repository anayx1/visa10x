import Logo from "../assets/images/png/logo10xvisa.png";

const Header = () => {
  return (
    <div className="header-main">
      <div className="logo-box">
        <img src={Logo} alt="Logo" srcset="" />
      </div>
      <div className="header-inner-box">
        <div className="header-item-box">
          <p className="header-item">Home</p>
          <p className="header-item">About Us </p>
          <p className="header-item">Services</p>
          <p className="header-item">Passport Guidance</p>
          <p className="header-item">Contact Us</p>
        </div>
        <div className="header-btn-box btn-diagonal">
          <p className="header-btn-text">Login</p>
          <span className="dot-loading">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
