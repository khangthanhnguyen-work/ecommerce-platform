import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Badge, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
// import { FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import { GrCart, GrUser, GrUserAdmin } from "react-icons/gr";
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import SearchBox from './SearchBox';
import logo from '../assets/logo.png';

const Header = () => {
    const { cartItems } = useSelector((state) => state.cart);
    const { userInfo } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [logoutApiCall] = useLogoutMutation();

    const logoutHandler = async () => {
        try {
            await logoutApiCall().unwrap();
            dispatch(logout());
            navigate('/login');
        } catch (err) {
            console.log(err);
        }
    };

  return (
    <header>
        <Navbar bg="light" variant="light" expand="md" collapseOnSelect>
            <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand><img src={logo} alt='pCare' /></Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <SearchBox />

                        <LinkContainer to='/cart'>
                            <Nav.Link className="bold-font"><GrCart /> My Cart
                                {
                                    cartItems.length > 0 && (
                                        // <Badge pill bg='success' style={{marginLeft: '5px'}}>
                                        <Badge pill style={{ marginLeft: '5px', backgroundColor: '#FF0000', color: '#00FF00' }}>
                                            {cartItems.reduce((a, c) => a + c.qty, 0)}
                                        </Badge>
                                    )
                                }
                            </Nav.Link>
                        </LinkContainer>

                        { userInfo ? (
                            // <NavDropdown title={userInfo.name} id='username'>
                            <NavDropdown className="bold-font" title={<><GrUser /> My Profile</>} id='username'>
                                <LinkContainer to='/profile'>
                                    <NavDropdown.Item className="bold-font">Profile</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Item className="bold-font" onClick={logoutHandler}>
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <LinkContainer to='/login'>
                            <Nav.Link className="bold-font" href='/login'>
                                <GrUser /> Sign In
                            </Nav.Link>
                        </LinkContainer>
                        ) }

                        {userInfo && userInfo.isAdmin && (
                            <NavDropdown className="bold-font" title={<><GrUserAdmin /> Admin</>} id='adminmenu'>
                                <LinkContainer to='/admin/productlist'>
                                    <NavDropdown.Item className="bold-font">Products</NavDropdown.Item>
                                </LinkContainer>

                                <LinkContainer to='/admin/orderlist'>
                                    <NavDropdown.Item className="bold-font">Orders</NavDropdown.Item>
                                </LinkContainer>

                                <LinkContainer to='/admin/userlist'>
                                    <NavDropdown.Item className="bold-font">Users</NavDropdown.Item>
                                </LinkContainer>

                            </NavDropdown>
                        )}
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header