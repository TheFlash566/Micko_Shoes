import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav style={{
    background: 'black',}}>
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
            <Link className="navLink" to="/shop">Shop</Link>
          </li>
          <li style={{marginTop: '10px'}}>
            <Link className="navLink" to="/team">Team</Link>
          </li>
          <li style={{marginTop: '10px'}}>
            <Link className="navLink" to="/cart"><i class="fas fa-cart-arrow-down"></i></Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;