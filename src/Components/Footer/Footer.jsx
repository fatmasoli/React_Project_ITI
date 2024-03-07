import "./footer.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="6" className="footer__col">
            <div className="footer__logo">
              <h1 className="footer__logo-text">FASH</h1>
            </div>
            <p className="footer__text">
            "Introducing our innovative shopping app designed to revolutionize your online shopping experience. With our user-friendly interface and extensive product catalog, finding exactly what you need has never been easier. Browse through a diverse range of categories, from fashion and electronics to home essentials, all conveniently organized for quick access. Our app offers seamless navigation and advanced search functionalities, allowing you to effortlessly discover new products or locate your favorite items with precision!"




            </p>
          </Col>

          <Col lg="2" md="3" className="footer__col">
            <div className="footer__links">
              <h4 className="footer__title"></h4>
              <ul className="footer__list">
                <li className="footer__item">
                
                </li>
                <li className="footer__item">
                  
                </li>
                <li className="footer__item">
                  
                </li>
                <li className="footer__item">
                  
                </li>
              </ul>
            </div>
          </Col>

          <Col lg="2" md="3" className="footer__col">
            <div className="footer__links">
              <h4 className="footer__title">our Links</h4>
              <ul className="footer__list">
                <li className="footer__item">
                  <Link to="/shop" className="footer__link">Shop</Link>
                </li>
                <li className="footer__item">
                  <Link to="/cart" className="footer__link">Cart</Link>
                </li>
                <li className="footer__item">
                  <Link to="/login" className="footer__link">Login</Link>
                </li>
                <li className="footer__item">
                  <Link to="#" className="footer__link">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </Col>

          <Col lg="4" className="footer__col">
            <div className="footer__contact">
              <h4 className="footer__title">Contact</h4>
              <ul className="footer__list">
                <li className="footer__item">
                  <span className="footer__icon">
                    <i className="ri-map-pin-line"></i>
                  </span>
                  <p className="footer__contact-info">Bani suef, bani suef, Egypt</p>
                </li>
                <li className="footer__item">
                  <span className="footer__icon">
                    <i className="ri-phone-line"></i>
                  </span>
                  <p className="footer__contact-info">01163355845</p>
                </li>
                <li className="footer__item">
                  <span className="footer__icon">
                    <i className="ri-mail-line"></i>
                  </span>
                  <p className="footer__contact-info">Fatma12soliman@gmail.com</p>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      
    </footer>
  );
};

export default Footer;
