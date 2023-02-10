import ShopSlider1 from "../components/ShopSlider1"
import ShopSlider2 from "../components/ShopSlider2"
import ShopNav from "../components/ShopNav"
import ShopItems from "../components/ShopItems"

function Shop () {
    return (
        <div style={{background: 'rgb(50 9 50)',}}>
            <div style={{paddingTop: '2.5em', paddingBottom: '3em',}}>
                <ShopSlider1 />
                <ShopSlider2 />
            </div>
            <ShopNav />
            <ShopItems />
        </div>
    )
}






export default Shop