import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function AboutBanner() {
  return (
    <Carousel fade style={{width: '90%', margin: 'auto', paddingTop: '3em',}}>
      <Carousel.Item>
            <Row>
                <Col sm={4} style={{ height: '300px',}}>
                        <div style={{display: 'flex', gap: '10px',}}>
                            <div style={{backgroundImage: 'url(/images/b3.jpg)', backgroundPosition: 'bottom', backgroundSize: 'cover', height: '300px', width: '50%',}}></div>
                            <div style={{display: 'flex', flexDirection: 'column', gap: '10px', width: '50%',}}>
                                <div style={{backgroundImage: 'url(/images/b4.jpg)', height: '145px', backgroundSize: 'cover',}}></div>
                                <div style={{backgroundImage: 'url(/images/g1.jpg)', height: '145px', backgroundSize: 'cover',}}></div>
                            </div>
                        </div>
                </Col>
                <Col sm={4} style={{background: 'green', height: '300px', 
                    padding: '4em 2em',}}>
                        <h1 style={{textAlign: 'center',}}>2023 Reset</h1>
                        <p style={{textAlign: 'center',}}>Welcome the new year with our top picks for prioritizing your movement, legs, and shoe-rack.</p>
                        <div style={{textAlign: 'center',}}>
                            <a style={{color: 'white', marginRight: '10px', marginLeft: '10px'}} href="">Versace</a>
                            <a style={{color: 'white', marginRight: '10px', marginLeft: '10px'}} href="">Luis Vuiton</a>
                            <a style={{color: 'white', marginRight: '10px', marginLeft: '10px'}} href="">Addidas</a>
                        </div>
                </Col>
                <Col sm={4} style={{ height: '300px',}}>
                        <div style={{display: 'flex', gap: '10px',}}>
                            <div style={{display: 'flex', flexDirection: 'column', gap: '10px', width: '50%',}}>
                                <div style={{backgroundImage: 'url(/images/g2.jpg)', height: '145px', backgroundSize: 'cover',}}></div>
                                <div style={{backgroundImage: 'url(/images/g3.jpg)', height: '145px', backgroundSize: 'cover',}}></div>
                            </div>
                            <div style={{backgroundImage: 'url(/images/g5.jpg)', backgroundSize: 'cover', height: '300px', width: '50%',}}></div>
                        </div>
                </Col>
            </Row>
      </Carousel.Item>

      <Carousel.Item>
            <Row>
                <Col sm={4} style={{ height: '300px',
                    backgroundPosition: 'bottom', backgroundSize: 'cover',}}>
                        <div style={{display: 'flex', gap: '10px',}}>
                            <div style={{backgroundImage: 'url(/images/g5.jpg)', backgroundSize: 'cover', height: '300px', width: '50%',}}></div>
                            <div style={{display: 'flex', flexDirection: 'column', gap: '10px', width: '50%',}}>
                                <div style={{backgroundImage: 'url(/images/g3.jpg)', height: '145px', backgroundSize: 'cover',}}></div>
                                <div style={{backgroundImage: 'url(/images/g2.jpg)', backgroundSize: 'cover', height: '145px',}}></div>
                            </div>
                        </div>
                </Col>
                <Col sm={4} style={{background: 'purple', height: '300px', 
                    padding: '4em 2em',}}>
                        <h1 style={{textAlign: 'center',}}>2023 Reset</h1>
                        <p style={{textAlign: 'center',}}>Welcome the new year with our top picks for prioritizing your movement, legs, and shoe-rack.</p>
                        <div style={{textAlign: 'center',}}>
                            <a style={{color: 'white', marginRight: '10px', marginLeft: '10px'}} href="">Versace</a>
                            <a style={{color: 'white', marginRight: '10px', marginLeft: '10px'}} href="">Luis Vuiton</a>
                            <a style={{color: 'white', marginRight: '10px', marginLeft: '10px'}} href="">Addidas</a>
                        </div>
                </Col>
                
                <Col sm={4} style={{ height: '300px',
                    backgroundSize: 'cover'}}>
                        <div style={{display: 'flex', gap: '10px',}}>
                            <div style={{display: 'flex', flexDirection: 'column', gap: '10px', width: '50%',}}>
                                <div style={{backgroundImage: 'url(/images/g1.jpg)', backgroundSize: 'cover', height: '145px',}}></div>
                                <div style={{backgroundImage: 'url(/images/b4.jpg)', backgroundSize: 'cover', height: '145px',}}></div>
                            </div>
                            <div style={{backgroundImage: 'url(/images/b3.jpg)', backgroundSize: 'cover', backgroundPosition: 'bottom', height: '300px', width: '50%',}}></div>
                        </div>
                </Col>
            </Row>
      </Carousel.Item>

      <Carousel.Item>
            <Row>
                <Col sm={4} style={{background: 'white', height: '300px',
                    backgroundPosition: 'bottom', backgroundSize: 'cover',}}>
                        <div style={{display: 'flex', gap: '10px',}}>
                            <div style={{background: 'blue', height: '300px', width: '50%',}}></div>
                            <div style={{display: 'flex', flexDirection: 'column', gap: '10px', width: '50%',}}>
                                <div style={{background: '#165a43', height: '145px',}}></div>
                                <div style={{background: '#870c0c', height: '145px',}}></div>
                            </div>
                        </div>
                </Col>
                <Col sm={4} style={{background: 'orange', height: '300px', 
                    padding: '4em 2em',}}>
                        <h1 style={{textAlign: 'center',}}>2023 Reset</h1>
                        <p style={{textAlign: 'center',}}>Welcome the new year with our top picks for prioritizing your movement, legs, and shoe-rack.</p>
                        <div style={{textAlign: 'center',}}>
                            <a style={{color: 'white', marginRight: '10px', marginLeft: '10px'}} href="">Versace</a>
                            <a style={{color: 'white', marginRight: '10px', marginLeft: '10px'}} href="">Luis Vuiton</a>
                            <a style={{color: 'white', marginRight: '10px', marginLeft: '10px'}} href="">Addidas</a>
                        </div>
                </Col>
                <Col sm={4} style={{background: 'white', height: '300px',
                    backgroundSize: 'cover'}}>
                        <div style={{display: 'flex', gap: '10px',}}>
                            <div style={{display: 'flex', flexDirection: 'column', gap: '10px', width: '50%',}}>
                                <div style={{background: '#870c0c', height: '145px',}}></div>
                                <div style={{background: '#165a43', height: '145px',}}></div>
                            </div>
                            <div style={{background: '#16168d', height: '300px', width: '50%',}}></div>
                        </div>
                </Col>
            </Row>
      </Carousel.Item>

    </Carousel>
  );
}

export default AboutBanner;