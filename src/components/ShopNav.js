function ShopNav() {
    return(
        <div className="shop-nav">
            <div style={{fontSize: '1.4em'}}>
                <a className="sn-link" href="#">Featured</a>
                <a className="sn-link"  href="">Women</a>
                <a className="sn-link"  href="">Men</a>
                <a className="sn-link"  href="#">Kids</a>
            </div>
            <input className="searcher" type="text" placeholder="Search your favorite shoes...." />
            <div style={{fontSize: '1.4em'}}>
                <a className="sn-link"  href="#">Kids</a>
                <a className="sn-link"  href="">Others</a>
                <a className="sn-link"  href="">Women</a>
            </div>
            <div style={{fontSize: '1.5em'}}>
                <a href="#" className="arrow-left"><i class="fa-solid fa-arrow-left"></i></a>
                <a href="#" className="arrow-right"><i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
    )
}



export default ShopNav


