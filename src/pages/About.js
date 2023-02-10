// import Slider from "../components/Slider"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import AboutBanner from "../components/AboutBanner"
function About() {
    return(
        <div>
            <div className="about">
                    <h1 className="abt-title">About <span style={{color: 'lime'}}>Us</span></h1>
                    <div style={{display: 'flex', width: '90%', margin: 'auto', gap: '3em', paddingTop: '6em'}}>
                        <div style={{width: '50%'}}>
                            <h1 style={{color: 'lime'}}>Our Vision</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, quam impedit? 
                                Odit rerum maxime eos quis. 
                                Reiciendis, nostrum voluptates sunt libero quam harum at corrupti, 
                                totam consectetur tempore, iusto maiores.
                            </p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, quam impedit? 
                                Odit rerum maxime eos quis. 
                                Reiciendis, nostrum voluptates sunt libero quam harum at corrupti, 
                                totam consectetur tempore, iusto maiores.
                            </p>
                            <p>Reiciendis, nostrum voluptates sunt libero quam harum at corrupti, 
                                totam consectetur tempore, iusto maiores.</p>
                        </div>
                        <div className="vision-img"></div>
                    </div>

                    <div style={{display: 'flex', width: '90%', margin: 'auto', gap: '3em', paddingTop: '4em'}}>
                        <div className="approach-img"></div>
                        <div style={{width: '50%'}}>
                            <h1 style={{color: 'lime'}}>Our Approach</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, quam impedit? 
                                Odit rerum maxime eos quis. 
                                Reiciendis, nostrum voluptates sunt libero quam harum at corrupti, 
                                totam consectetur tempore, iusto maiores.
                            </p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, quam impedit? 
                                Odit rerum maxime eos quis. 
                                Reiciendis, nostrum voluptates sunt libero quam harum at corrupti, 
                                totam consectetur tempore, iusto maiores.
                            </p>
                            <p>Reiciendis, nostrum voluptates sunt libero quam harum at corrupti, 
                                totam consectetur tempore, iusto maiores.</p>
                        </div>
                    </div>

                    <AboutBanner />
                    
                    <div style={{display: 'flex', width: '90%', margin: 'auto', gap: '3em', paddingTop: '4em'}}>
                        <div style={{width: '50%'}}>
                            <h1 style={{color: 'lime'}}>Our Proccess</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, quam impedit? 
                                Odit rerum maxime eos quis. 
                                Reiciendis, nostrum voluptates sunt libero quam harum at corrupti, 
                                totam consectetur tempore, iusto maiores.
                            </p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, quam impedit? 
                                Odit rerum maxime eos quis. 
                                Reiciendis, nostrum voluptates sunt libero quam harum at corrupti, 
                                totam consectetur tempore, iusto maiores.
                            </p>
                            <p>Reiciendis, nostrum voluptates sunt libero quam harum at corrupti, 
                                totam consectetur tempore, iusto maiores.</p>
                        </div>
                        <div className="process-img"></div>
                    </div>
                                    
            </div>
            
            <Newsletter />
            <Footer />
        </div>
    )
}

export default About