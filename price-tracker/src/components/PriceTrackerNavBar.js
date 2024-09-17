// Gemini AI assisted code

import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useTheme } from "../contexts/ThemeProvider";

const PriceTrackerNavBar = React.memo(() => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      {" "}
      {/** Nav Bar */}
      <Navbar bg={theme} data-bs-theme={theme}>
        <Container>
          <Navbar.Brand as={Link} to="/home">
            Price Tracker
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/community">
              Community
            </Nav.Link>
            <Nav.Link as={Link} to="/contactus">
              Contact US
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/** Nav Bar */}
    </div>
  );
});

export default PriceTrackerNavBar;
