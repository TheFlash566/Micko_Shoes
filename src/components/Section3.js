import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Outlet, Link } from "react-router-dom";

function Sec3() {
    return (
            <div className='grid-image' style={{background: 'rgb(14 129 14)',}}>
                <CardGroup style={{ width: '40%' }}>
                        <Card style={{ height: '400px', background: 'rgb(19, 187, 19)', }}>
                            <Card.Body style={{color: 'white', padding: '5em 4em'}}>
                                <Card.Title style={{marginBottom: '1.5rem', fontSize: '30px'}}>Nike DOWNSHIFTER</Card.Title>
                                <Card.Text style={{FontSize: '1rem', marginBottom: '3rem'}}>
                                    Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias consequatur.
                                    sed quia non numquam eius modi tempora incidunt ut labore et dolore.
                                </Card.Text>
                                <Link className='green-link' to="/shop">Shop Now <i style={{marginTop: '-1px',
                                    marginLeft: '2px',}} class="fas fa-arrow-right"></i></Link>
                            </Card.Body>
                        </Card>
                        <Card className='gd-b4' style={{ height: '300px', }}>
                            <Card.Body>
                                <Card.Title style={{
                                    fontSize: '35px', color: 'white',
                                    padding: '60px 50px',
                                    textShadow: '0 0 black',}} >Air force</Card.Title>
                            </Card.Body>
                        </Card>
                </CardGroup>
                
                <CardGroup style={{ width: '40%', }}>

                    <Card className='gd-b3' style={{ height: '300px', }}>
                        <Card.Body>
                            <Card.Title style={{
                                fontSize: '35px', color: 'white',
                                padding: '60px 50px',
                                textShadow: '0 0 black'}} >Air force</Card.Title>
                        </Card.Body>
                    </Card>

                    <Card style={{ height: '400px', background: 'rgb(30, 7, 30)', }}>
                        <Card.Body style={{color: 'white', padding: '5em 4em'}}>
                            <Card.Title style={{marginBottom: '1.5rem', fontSize: '30px'}}>Nike DOWNSHIFTER</Card.Title>
                            <Card.Text style={{FontSize: '1rem', marginBottom: '3rem',}}>
                                Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias consequatur.
                                sed quia non numquam eius modi tempora incidunt ut labore et dolore.
                            </Card.Text>
                            <Link className='linker' to="/shop">Shop Now <i style={{marginTop: '-1px',
                                marginLeft: '2px',}} class="fas fa-arrow-right"></i></Link>
                        </Card.Body>
                    </Card>
                </CardGroup>

                <Outlet />
            </div>
    )
}


export default Sec3