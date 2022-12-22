import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const navbartyle = {
  backgroundColor: 'magenta',
};

const Header = (props) => {
  return (
    <Navbar style={navbartyle} variant="dark">
      <Container>
        <Navbar.Brand href="/">{props.title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
