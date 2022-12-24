import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/logo.svg';

const navbartyle = {
  backgroundColor: '#EEEEEE',
};

const Header = ({ title }) => {
  return (
    <Navbar style={navbartyle} variant="dark">
      <Container>
        <Logo alt={title} style={{ maxWidth: '15rem', maxHeight: '3rem' }} />
      </Container>
    </Navbar>
  );
};

export default Header;
