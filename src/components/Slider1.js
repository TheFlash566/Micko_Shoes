import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Slider () {
  return (
    <div style={{display: 'flex', height: '250px'}}> 
        <div style={{display: 'flex', flexDirection: 'row', width: '30%', background: 'rgb(19, 187, 19)',
        padding: '7em 3em',
        color: 'white',
    }}>
            <h1 style={{fontSize: '1.8rem',
    marginRight: '14px'}}>See More Shoes</h1>
            <i style={{fontSize: '1.8rem',
    marginTop: '6px'}} class="fas fa-arrow-right"></i>
        </div>
        <Carousel id='carousel-target' style={{textShadow: '0 0 black', width: '80%'}}>
            <Carousel.Item>
                <Row>
                    <Col sm={3} style={{backgroundImage: 'url(/images/b3.jpg)', height: '250px',
                    backgroundPosition: 'bottom', backgroundSize: 'cover'}}></Col>
                    <Col sm={3} style={{backgroundImage: 'url(/images/b4.jpg)', height: '250px', 
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',}}></Col>
                    <Col sm={3} style={{backgroundImage: 'url(/images/g1.jpg)', height: '250px',
                    backgroundSize: 'cover'}}></Col>
                    <Col sm={3} style={{backgroundImage: 'url(/images/g2.jpg)', height: '250px', 
                    backgroundSize: 'cover'}}></Col>
                </Row>
            </Carousel.Item>

            <Carousel.Item>
                <Row>
                    <Col sm={3} style={{backgroundImage: 'url(/images/g3.jpg)', height: '250px'}}></Col>
                    <Col sm={3} style={{backgroundImage: 'url(/images/g5.jpg)', height: '250px', 
                    backgroundPosition: 'bottom', backgroundSize: 'cover'}}></Col>
                    <Col sm={3} style={{backgroundImage: 'url(/images/g6.jpg)', height: '250px', 
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',}}></Col>
                    <Col sm={3} style={{backgroundImage: 'url(/images/Louis.jpg)', height: '250px',
                    backgroundSize: 'cover'}}></Col>
                </Row>
            </Carousel.Item>

            <Carousel.Item>
                <Row>
                    <Col sm={3} style={{backgroundImage: 'url(/images/g5.jpg)', height: '250px',
                    backgroundSize: 'cover'}}></Col>
                    <Col sm={3} style={{backgroundImage: 'url(/images/g3.jpg)', height: '250px'}}></Col>
                    <Col sm={3} style={{backgroundImage: 'url(/images/g6.jpg)', height: '250px'}}></Col>
                    <Col sm={3} style={{backgroundImage: 'url(/images/b4.jpg)', height: '250px', 
                    backgroundPosition: 'bottom', backgroundSize: 'cover'}}></Col>
                </Row>
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default Slider;



    