import { Col, Row } from "react-bootstrap"
import StoreItems from "../data/items.json"
import { StoreItem } from "../components/StoreItem"
import ShopSlider1 from "../components/ShopSlider1"
import ShopSlider2 from "../components/ShopSlider2"
import ShopNav from "../components/ShopNav"

export function Store() {
    return (
            <div style={{background: 'rgb(50 9 50)',}}>
                <div style={{paddingTop: '2.5em', paddingBottom: '3em',}}>
                    <ShopSlider1 />
                    <ShopSlider2 />
                </div>
                <h2 style={{textAlign: "center",
                     textTransform: "uppercase", color:" white",
                    marginBottom: "1em", marginTop: ".5em"}}>Trending Items</h2>
                <ShopNav />
                <div>
                    <Row md={2} xs={1} lg={4} className="g-3" style={{gap: "15px",
                        width: "90%",
                        margin: "auto", paddingBottom: "4em"}}>
                        {StoreItems.map(item => (
                            <Col key={item.id} style={{width: "24%"}} >
                                <StoreItem {...item} />
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
    )
    
}



    



