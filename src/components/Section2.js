import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Outlet, Link } from "react-router-dom";

function GridImage() {
    return (
            <div className='grid-image'>
                    <Card className='gd-b1' style={{ width: '50%', height: '700px' }}>
                    </Card>

                    <CardGroup style={{ width: '50%' }}>
                        <Card style={{ height: '400px', background: '#13bb13', }}>
                            <Card.Body style={{color: 'white', padding: '5em 5em'}}>
                                <Card.Title style={{marginBottom: '1.5rem', fontSize: '35px'}}>Nike DOWNSHIFTER</Card.Title>
                                <Card.Text style={{marginBottom: '3rem'}}>
                                    Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias consequatur.
                                    sed quia non numquam eius modi tempora incidunt ut labore et dolore .
                                </Card.Text>
                                <Link className='green-link' to="/shop">Shop Now <i style={{marginTop: '-1px',
                                        marginLeft: '2px',}} class="fas fa-arrow-right"></i></Link>
                            </Card.Body>
                        </Card>
                        <Card className='gd-b2' style={{ height: '300px', }}>
                            <Card.Body>
                                <Card.Title style={{
                                fontSize: '35px', color: 'white',
                                padding: '50px 50px',
                            }} >Air force</Card.Title>
                        </Card.Body>
                    </Card>
                </CardGroup>
                <Outlet />
            </div>
    );
}

export default GridImage;

