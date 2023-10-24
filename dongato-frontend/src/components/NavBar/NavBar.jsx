import { Link, NavLink, useLocation } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import logo from '../../assets/img/logo.png'
import CartWidget from '../Cart/CartWidget'
import '../Cart/Cart.css'

const NavBar = ({cartCount}) => {
    
    const location = useLocation();
    const isLoginPage = location.pathname === '/' || location.pathname === '/register';

	return (
        <>
            <Navbar className='Navbar' style={{display: isLoginPage ? 'none':'block', width: '100%', height: '100%', position: 'relative', boxShadow: '0px 6px 6px rgba(0, 0, 0, 0.25)' , background: 'linear-gradient(69deg, #060606 0%, #235763 38%, #1C413F 72%, #060606 100%)'}}variant="dark" expand="lg">
                <Container>
                    <Link to="/">
                        <Navbar.Brand>
                            <img
                                src={logo}
                                width="80"
                                height="80"
                                className="d-inline-block align-top"
                                alt="Don Gato Logo"
                                style={{padding : '5px'}}
                              
                            />
                        </Navbar.Brand>
                    </Link>
                    <Link className="cart-mobile" style={{paddingRight:'2rem'}} to="/cart">
                        <CartWidget cartCount={cartCount} />
                    </Link> 
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav" >
                        <Nav className="align-items-center" style={{paddingRight:'18px'}}>
                            <NavLink className="nav-link" to="/">
                                Home
                            </NavLink>
                            <NavLink className="nav-link" to="/categoria/placas-de-video">
                                Placas de Video
                            </NavLink>
                            <NavLink className="nav-link" to="/categoria/procesadores">
                                Procesadores
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                    <Link className="cart-desktop" to="/cart">
                        <CartWidget cartCount={cartCount} />
                    </Link> 
                </Container>
            </Navbar>
        </>
	);
};

export default NavBar;
