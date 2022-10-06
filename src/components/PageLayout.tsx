import * as React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

interface Props {
    children: React.ReactElement;
}

const PageLayout = ({ children }: Props) => {
    return (
        <React.Fragment>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to='/' style={{ fontWeight: 500, textDecoration: 'none', color: "#fff" }}>Grocery Store</Link>
                        </Nav>
                        <Nav>
                            <Link to='/checkout' style={{ fontWeight: 500, textDecoration: 'none', color: "#fff" }}>Checkout</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {children}
        </React.Fragment>
    )
}

export default PageLayout