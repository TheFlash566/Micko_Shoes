import { Outlet, Link } from "react-router-dom";
import { Button } from "react-bootstrap"

import { useShoppingCart } from "../context/ShoppingCartContext"

export function Layout() {
  const { openCart, cartQuantity } = useShoppingCart()

  return (
    <>
      <nav style={{
    background: 'black', position: 'sticky',
    top: 0, zIndex: 1020}}>
        <ul style={{listStyleType: 'none', display: 'flex',
    gap: '3em', fontSize: '20px',
    width: '90%', margin: 'auto', textTransform: 'uppercase', padding: '12px 0px'}}>
      <Link to="/"><img src="/images/mk-shoes-png1-1.png" style={{width: '220px', height: '50px', marginRight: '12em'}} alt="LOGO" /></Link>
          <li style={{marginTop: '10px'}}>
            <Link className="navLink" to="/">Home</Link>
          </li>
          <li style={{marginTop: '10px'}}>
            <Link className="navLink" to="/about">About</Link>
          </li>
          <li style={{marginTop: '10px'}}>
            <Link className="navLink" to="/contact">Contact</Link>
          </li>
          <li style={{marginTop: '10px'}}>
            <Link className="navLink" to="/store">Shop</Link>
          </li>
          <li style={{marginTop: '10px'}}>
            <Link className="navLink" to="/team">Team</Link>
          </li>
          <li style={{marginTop: '10px'}}>
          {cartQuantity > 0 && (
                    <Button 
                        onClick={openCart}
                        style={{width: "3rem", height: "3rem", position: "relative"}}
                        variant="outline-primary" className="rounded-circle"
                    >
                        <i className="fa-solid fa-cart-arrow-down"></i>
                    
                        <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" 
                        style={{
                            color: "white", 
                            width: "1.5rem", 
                            height: "1.5rem", 
                            position: "absolute", 
                            bottom: 0, 
                            right: 0,
                            transform: "translate(25%, 25%)",
                            }}
                            >
                                {cartQuantity}
                            </div>
                    </Button>
                )}
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;