import React from 'react';
import { Spinner } from 'react-bootstrap';

const loaderStyle = {
  position: 'absolute',
  top: 'calc(50% - 1rem)',
  left: 'calc(50% - 1rem)',
};

function Loader({ loading, setLoading }) {
  return (
    <Spinner animation="border" variant="info" style={loaderStyle}></Spinner>
  );
}

export default Loader;
