import Carousel from 'react-bootstrap/Carousel';
import { NavLink } from 'react-router-dom';

function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <NavLink to="/productos">
        <img
          className="d-block w-100"
          src={require('../../../assets/images/home1.png')}
          alt="First slide"
        />
        </NavLink>
        
      </Carousel.Item>
      <Carousel.Item>
        <NavLink to="/categorias/carteras">
        <img
          className="d-block w-100"
          src={require('../../../assets/images/home2.png')}
          alt="Second slide"
        />
        </NavLink>
        
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;