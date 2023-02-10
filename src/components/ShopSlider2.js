import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';

function ShopSlider2 () {
    return (
        <Carousel style={{width: '90%', margin: 'auto', paddingTop: '0.5em',}}>
            <Carousel.Item>
                <div style={{height: 'auto', display: 'flex', gap: '10px'}}>
                    <Col style={{backgroundImage: 'url(/images/img32.JPG)', backgroundSize: 'cover', height: '300px'}} sm={3}></Col>
                    <Col style={{backgroundImage: 'url(/images/mk-ad3.PNG', backgroundSize: 'cover', backgroundPosition: 'center', height: '300px'}} sm={6}></Col>
                    <Col style={{backgroundImage: 'url(/images/IMG-7014.JPG)', backgroundSize: 'cover', height: '300px'}} sm={3}></Col>
                </div>
            </Carousel.Item>
        

            <Carousel.Item>
                <div style={{height: 'auto', display: 'flex', gap: '10px'}}>
                    <Col style={{backgroundImage: 'url(/images/IMG-7082.JPG', backgroundSize: 'cover', backgroundPosition: 'center', height: '300px'}} sm={6}></Col>
                    <Col style={{backgroundImage: 'url(/images/img34.JPG)', backgroundSize: 'cover', backgroundPosition: 'center', height: '300px'}} sm={6}></Col>
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <div style={{height: 'auto', display: 'flex', gap: '10px'}}>
                    <Col style={{backgroundImage: 'url(/images/IMG-7092.JPG', backgroundSize: 'cover', height: '300px'}} sm={3}></Col>
                    <Col style={{backgroundImage: 'url(/images/mk-ad2.PNG)', backgroundSize: 'cover', height: '300px'}} sm={6}></Col>
                    <Col style={{backgroundImage: 'url(/images/IMG-7096.JPG', backgroundSize: 'contain', height: '300px'}} sm={3}></Col>
                </div>
            </Carousel.Item>

        </Carousel>
    );
}

export default ShopSlider2;