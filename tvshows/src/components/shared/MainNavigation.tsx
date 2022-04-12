import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { FC } from "react";
import { Link } from "react-router-dom";

const MainNavigation:FC = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavbarBrand>The best ongoing TV Shows</NavbarBrand>
                <Nav>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/tvshows">TV Shows</Nav.Link>
                    <Nav.Link as={Link} to="/upcomingshows">Upcoming Shows</Nav.Link>
                    <Nav.Link as={Link} to="/create-upcomingshow">Add Upcoming Show</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default MainNavigation;