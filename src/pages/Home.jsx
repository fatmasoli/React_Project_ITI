import { useEffect, useState } from "react";
import "../styles/home.css";
import Helmet from "../Components/Helmet/Helmet";
import { Container, Row, Col, Carousel } from "react-bootstrap"; // Import Carousel from react-bootstrap
import Services from "../Components/Services/Services";
import ProductsList from "../Components/UI/ProductsList";
import Clock from "../Components/UI/Clock";
import counterImg from "../assets/images/sofa.png";
import useGetData from "../hooks/useGetData";

import img1 from "../assets/images/img1.jpg"; // Import your images
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/user-icon.png";

const Home = () => {
  const { data: products, loading } = useGetData(
    "https://multimart-ecommerce-hr2c.onrender.com/api/products/all-products"
  );

  const [bestSales, setBestSales] = useState([]);
  const [mobilesProducts, setMobilesProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    if (!loading && products.length) {
      const filterBestSales = products.filter(
        (product) => product.category === "sofa"
      );
      const filterMobiles = products.filter(
        (product) => product.category === "mobile"
      );
      const filterWireless = products.filter(
        (product) => product.category === "wireless"
      );
      const filterPopularProducts = products.filter(
        (product) => product.category === "watch"
      );
      setBestSales(filterBestSales);
      setMobilesProducts(filterMobiles);
      setWirelessProducts(filterWireless);
      setPopularProducts(filterPopularProducts);
    }
  }, [products, loading]);

  return (
    <Helmet title={"Home"}>
      <section className="carousel__section">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title"> FASH E-Commerce WebSite</h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="8" md="10">
            <Carousel>
  <Carousel.Item>
    <img src={img1} alt="First slide" />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img src={img2} alt="Second slide" />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img src={img3} alt="Third slide" />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


            </Col>
          </Row>
        </Container>
      </section>
      <br></br>
      <h2 className="section__title"> Our Ctegories</h2>
      <Services />

      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Best Sales</h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            {loading ? (
              <h5 className="fw-bold">Wait...</h5>
            ) : (
              <ProductsList data={bestSales} />
            )}
          </Row>
        </Container>
      </section>

      <section className="limited__offers">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="offer__content">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
                <Clock />
                <h1>If you want to see more about our products </h1>
                <a href="/shop" className="buy__btn store__btn">
                 
                  <h3>click here!</h3>
                </a>
              </div>
            </Col>
            <Col lg="6" md="6" className="text-end counter__img">
              <img src={counterImg} alt="Counter" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Trending Products </h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            {loading ? (
              <h5 className="fw-bold">waitttt</h5>
            ) : (
              <>
                <Col lg="6" md="6">
                  <ProductsList data={mobilesProducts} />
                </Col>
                <Col lg="6" md="6">
                  <ProductsList data={wirelessProducts} />
                </Col>
              </>
            )}
          </Row>
        </Container>
      </section>

      <section className="popular__category">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Popular in Category</h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            {loading ? (
              <h5 className="fw-bold">waitttt</h5>
            ) : (
              <ProductsList data={popularProducts} />
            )}
          </Row>
        </Container>
      </section>

      
    </Helmet>
  );
};

export default Home;
