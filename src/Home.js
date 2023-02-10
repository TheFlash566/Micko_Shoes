import BannerSlide from "./components/Banner"
import GridImage from "./components/Section2" 
import 'bootstrap/dist/css/bootstrap.min.css';
import Sec3 from "./components/Section3"
import Slider from "./components/Slider1";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";


const Home = () => {
    return(
       <div className="homepage">
            <BannerSlide />
            <GridImage />
            <Sec3 />
            <Slider />
            <Newsletter />
            <Footer />
       </div>
    )
}



export default Home