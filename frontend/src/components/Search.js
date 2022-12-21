import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Search({ word, setWord, handleSubmit }) {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col sx={12} md={8} lg={6}>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col xs={9}>
                <Form.Control 
                    type="text"
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                    placeholder="Search in images ..." 
                />
              </Col>
              <Col>
                <Button variant="primary" type="submit">Search</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Search;
