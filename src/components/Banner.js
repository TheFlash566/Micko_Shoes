import Carousel from 'react-bootstrap/Carousel';

function BannerSlide() {
  return (
    <Carousel style={{textShadow: '0 0 black',}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/banner1.jpg"
          alt="First slide"
          style={{height: '700px !important',}}
        />
        <Carousel.Caption style={{textShadow: '0 0 black',}}>
          <h1 style={{fontSize: '10rem',
    fontWeight: 'bold'}}>Sneakers</h1>
          <p style={{textTransform: 'uppercase', fontSize: '18px',
    fontWeight: 'bold', marginBottom: '3rem', letterSpacing: '8px'}}>See how good they feel.</p>
        <a style={{fontSize: '18px', marginRight: '20px', color: 'white'}} href=""><i class="fa-brands fa-facebook-f"></i></a>
        <a style={{fontSize: '18px', marginRight: '20px', color: 'white'}} href=""><i class="fab fa-twitter"></i></a>
        <a style={{fontSize: '18px', marginRight: '20px', color: 'white'}} href=""><i  class="fab fa-linkedin-in"></i></a>
        <a style={{fontSize: '18px', marginRight: '20px', color: 'white'}} href=""><i  class="fab fa-google-plus-g"></i></a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/banner2.jpg"
          alt="Second slide"
          style={{height: '700px !important',}}
        />

        <Carousel.Caption style={{textShadow: '0 0 black',}}>
          <h1 style={{fontSize: '10rem',
    fontWeight: 'bold'}}>Adidas</h1>
          <p style={{textTransform: 'uppercase', fontSize: '18px',
    fontWeight: 'bold', marginBottom: '3rem', letterSpacing: '8px'}}>For all walks of life.</p>
        <a style={{fontSize: '18px', marginRight: '20px', color: 'white'}} href=""><i class="fa-brands fa-facebook-f"></i></a>
        <a style={{fontSize: '18px', marginRight: '20px', color: 'white'}} href=""><i class="fab fa-twitter"></i></a>
        <a style={{fontSize: '18px', marginRight: '20px', color: 'white'}} href=""><i  class="fab fa-linkedin-in"></i></a>
        <a style={{fontSize: '18px', marginRight: '20px', color: 'white'}} href=""><i  class="fab fa-google-plus-g"></i></a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/banner3.jpg"
          alt="Third slide"
          style={{height: '700px !important',}}
        />

        <Carousel.Caption style={{textShadow: '0 0 black',}}>
          <h1 style={{fontSize: '10rem',
    fontWeight: 'bold'}}>Nike</h1>
        <p style={{textTransform: 'uppercase', fontSize: '18px',
    fontWeight: 'bold', marginBottom: '3rem', letterSpacing: '8px'}}>
            See how good they feel 
        </p>
        <a style={{fontSize: '18px', marginRight: '20px', color: 'white'}} href=""><i class="fa-brands fa-facebook-f"></i></a>
        <a style={{fontSize: '18px', marginRight: '20px', color: 'white'}} href=""><i class="fab fa-twitter"></i></a>
        <a style={{fontSize: '18px', marginRight: '20px', color: 'white'}} href=""><i  class="fab fa-linkedin-in"></i></a>
        <a style={{fontSize: '18px', marginRight: '20px', color: 'white'}} href=""><i  class="fab fa-google-plus-g"></i></a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default BannerSlide;