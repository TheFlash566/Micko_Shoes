import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



function ShopSlider1 () {
  return (
    <Carousel fade style={{width: '90%', margin: 'auto', paddingTop: '0.5em',}}>
        <Carousel.Item>
            <div style={{display: 'flex', gap: '10px',}}>
                <Col sm={7} style={{backgroundImage:'url(/images/mk-ad4.PNG)', backgroundSize: 'cover', backgroundPosition: 'center', height: '350px', 
                            padding: '4em 2em',}}>
                   
                </Col>

                <div style={{display: 'flex', flexDirection: 'column', gap: '10px', height: 'auto', width: '41%'}}>
                    <div style={{backgroundImage: 'url(/images/img21.JPG', height: '170px', backgroundSize: 'cover', backgroundPosition: 'center',}}></div>
                    <div style={{ display: 'flex', height: 'auto', gap: '10px'}}>
                        <div style={{backgroundImage: 'url(/images/img39.JPG)', backgroundSize: 'cover', width: '50%', height: '170px',}}></div>
                        <div style={{backgroundImage: 'url(/images/img41.JPG)', backgroundSize: 'cover', backgroundPosition: 'center', width: '50%', height: '170px',}}></div>
                    </div>
                </div>
            </div>
        </Carousel.Item>

        <Carousel.Item>
            <Row>
                <Col sm={4} style={{ height: '350px',
                    backgroundPosition: 'bottom', backgroundSize: 'cover',}}>
                        <div style={{display: 'flex', gap: '10px',}}>
                            <div style={{backgroundImage: 'url(/images/img3.JPG)', backgroundSize: 'cover', height: '350px', width: '50%',}}></div>
                            <div style={{display: 'flex', flexDirection: 'column', gap: '10px', width: '50%',}}>
                                <div style={{backgroundImage: 'url(/images/img2.JPG)', backgroundSize: 'cover', height: '175px',}}></div>
                                <div style={{backgroundImage: 'url(/images/img12.JPG)', backgroundSize: 'cover', backgroundPosition: 'center', height: '175px',}}></div>
                            </div>
                        </div>
                </Col>
                <Col sm={4} style={{backgroundImage: 'url(/images/img37.JPG)', backgroundSize: 'cover', backgroundPosition: 'center', height: '350px', 
                    padding: '4em 2em',}}>
                        {/* <h1 style={{textAlign: 'center',}}>2023 Reset</h1>
                        <p style={{textAlign: 'center',}}>Welcome the new year with our top picks for prioritizing your movement, legs, and shoe-rack.</p>
                        <div style={{textAlign: 'center',}}>
                            <a style={{color: 'white', marginRight: '10px', marginLeft: '10px'}} href="">Versace</a>
                            <a style={{color: 'white', marginRight: '10px', marginLeft: '10px'}} href="">Luis Vuiton</a>
                            <a style={{color: 'white', marginRight: '10px', marginLeft: '10px'}} href="">Addidas</a>
                        </div> */}
                </Col>
                <Col sm={4} style={{ height: '350px',
                    backgroundSize: 'cover'}}>
                        <div style={{display: 'flex', gap: '10px',}}>
                            <div style={{display: 'flex', flexDirection: 'column', gap: '10px', width: '50%',}}>
                                <div style={{backgroundImage: 'url(/images/img8.JPG)', backgroundSize: 'cover', height: '175px',}}></div>
                                <div style={{backgroundImage: 'url(/images/img13.JPG)', backgroundSize: 'cover', height: '175px',}}></div>
                            </div>
                            <div style={{backgroundImage: 'url(/images/img24.JPG)', backgroundSize: 'cover', height: '350px', width: '50%',}}></div>
                        </div>
                </Col>
            </Row>
        </Carousel.Item>

        <Carousel.Item>
             <div style={{display: 'flex', gap: '10px',}}>
                <Col sm={7} style={{backgroundImage: 'url(/images/mk-ad2.PNG)', backgroundSize: 'cover', backgroundPosition: 'center', height: '350px', 
                            padding: '4em 2em',}}>
                    {/* <h1 style={{textAlign: 'center',}}>2023 Reset</h1>
                    <p style={{textAlign: 'center',}}>Welcome the new year with our top picks for prioritizing your movement, legs, and shoe-rack.</p>
                    <div style={{textAlign: 'center',}}>
                        <a style={{color: 'white', marginRight: '10px', marginLeft: '10px'}} href="">Versace</a>
                        <a style={{color: 'white', marginRight: '10px', marginLeft: '10px'}} href="">Luis Vuiton</a>
                        <a style={{color: 'white', marginRight: '10px', marginLeft: '10px'}} href="">Addidas</a>
                    </div> */}
                </Col>

                <div style={{display: 'flex', flexDirection: 'column', gap: '10px', height: 'auto', width: '41%'}}>
                    <div style={{backgroundImage: 'url(/images/b4.jpg)', height: '170px', backgroundSize: 'cover',}}></div>
                    <div style={{ display: 'flex', height: 'auto', gap: '10px'}}>
                        <div style={{backgroundImage: 'url(/images/img42.JPG)', backgroundSize: 'cover', width: '50%', height: '170px',}}></div>
                        <div style={{backgroundImage: 'url(/images/img38.JPG)', backgroundSize: 'cover', width: '50%', height: '170px',}}></div>
                    </div>
                </div>
            </div>
        </Carousel.Item>

      </Carousel>
    );
}

export default ShopSlider1;