function Footer() {
    return(
        <div>
            <div style={{background: '#120212', padding: '3em 3.2em', display: 'flex', gap: '4em'}}>
                <div>
                    <img src="/images/mk-shoes-png1-1.png" alt="" style={{width: '170px'}} />
                    <p style={{color: 'white', fontSize: '12px', paddingLeft: '1.5em',
                    paddingTop: '8px', marginBottom: '2em',}}>Your Best Fashion Plug...</p>
                    <h5 style={{color: 'rgb(19, 187, 19)',}}>About Us</h5>
                    <p style={{color: 'white', fontSize: '15px', marginBottom: '2em',}}>We want to contribute in making the best <br /> fashion options in the world.</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', paddingTop: '3em',}}>
                    <h5 style={{color: 'rgb(19, 187, 19)',}}>Information</h5>
                    <a className="footer-links" href="#">About Us</a>
                    <a className="footer-links" href="#">Shop</a>
                    <a className="footer-links" href="#">Testimonials</a>
                    <a className="footer-links" href="#">Contact Us</a>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', paddingTop: '3em',}}>
                    <h5 style={{color: 'rgb(19, 187, 19)',}}>Helpful Links</h5>
                    <a className="footer-links" href="#">Services</a>
                    <a className="footer-links" href="#">Supports</a>
                    <a className="footer-links" href="#">Terms & Conditions</a>
                    <a className="footer-links" href="#">Privacy Policy</a>
                </div>
                <div style={{paddingTop: '3em',}}>
                    <h5 style={{color: 'rgb(19, 187, 19)',}} >Contact Us</h5>
                    <p style={{color: 'white', fontSize: '15px',}}><i class="fa-solid fa-phone-volume" style={{marginRight: '20px',}}></i> +2349071503027</p>
                    <p style={{color: 'white', fontSize: '15px',}}><i class="fa-solid fa-envelope" style={{marginRight: '20px',}}></i> info@mickoshoes.ng</p>
                    <p style={{color: 'white', fontSize: '15px',}}><i class="fa-solid fa-location-dot" style={{marginRight: '20px',}}></i> 97A, Queens Avenue, Ikeja, Lagos, Nigeria</p>
                </div>
                <div style={{paddingTop: '2.5em'}}>
                    <h5 style={{color: 'rgb(19, 187, 19)', marginBottom: '1rem'}}>Social Links</h5>
                        <div>
                            <a href="#"><i style={{fontSize: '35px', marginRight: '30px', marginBottom: '20px', color: 'white'}} class="fa-brands fa-twitter"></i></a>
                            <a href="#"><i style={{fontSize: '35px', marginBottom: '20px', color: 'white'}} class="fa-brands fa-linkedin-in"></i></a>
                        </div>
                        <div>
                            <a  href="#"><i style={{fontSize: '35px', marginRight: '30px', color: 'white'}} class="fa-brands fa-facebook"></i></a>
                            <a href="#"><i style={{fontSize: '35px', color: 'white'}} class="fa-brands fa-instagram"></i></a>
                        </div>
                </div>
            </div>
            <div style={{background: 'rgb(18, 2, 18)',}}>
                    <div style={{display: 'flex', borderTop: 'dashed',
                    borderTopColor: 'white', gap: '16em', width: '90%', margin: 'auto'}}>
                    <p style={{fontSize: '25px', padding: '0.8em', color: 'white', marginLeft:'4em',
            marginBottom: '0rem',}}><i class="fa-regular fa-copyright"></i>2023 copyright. All Rights Reserved. Designed by Micheal Oki.</p>
                    <i style={{fontSize: '25px',
                padding: '15px',
                border: '1px solid green',
                marginTop: '20px',
                marginBottom: '20px',
                color: 'white',}} class="fa-sharp fa-solid fa-arrow-up"></i>
                </div>
            </div>
        </div>
    )
}


export default Footer;