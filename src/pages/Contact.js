import Slider from "../components/Slider1"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"

function Contact () {
    return (
        <div>
            <div className="contact-bg">
                    <div className="contact">
                        <h1 style={{textAlign: 'center', fontSize: '70px', color: 'white'}}>Contact <span style={{color: 'lime'}}>Us</span></h1>
                        <p style={{textAlign: 'center', color: 'lime', fontSize: '20px', marginBottom: '1.5rem'}}>Feel free to contact us any time. We will get back to you as soon as we can!</p>
                        <form action="" className="form">
                            <input style={{height: '50px', textIndent: '15px',}} type="text" placeholder="Enter Your Name" />
                            <input style={{height: '50px', textIndent: '15px',}} type="email" placeholder="Enter Your Email"/>
                            <input style={{height: '50px', textIndent: '15px',}} type="number" placeholder="Enter Your Number" />
                            <textarea name="message" id="message" cols="30" rows="10" placeholder="Enter Your Message"></textarea>
                            <button className="ct-button">Send</button>
                        </form>
                    </div>
            </div>
            <div>
                <Slider />
                <Newsletter />
                <Footer />
            </div>
        </div>
       
    )
}


export default Contact