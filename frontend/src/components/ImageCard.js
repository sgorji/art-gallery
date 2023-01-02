import React from 'react';
import { Card, Button, Nav } from 'react-bootstrap';

function ImageCard({ image, saveImage, deleteImage }) {
  const authorName = image.user?.name || 'No author name';
  const authorURL = image.user?.portfolio_url;

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image.urls.small} />
      <Card.Body>
        <Card.Title>{image.title?.toUpperCase()}</Card.Title>
        <Card.Text>{image.description || image.alt_description}</Card.Text>
        <Button
          variant="primary"
          onClick={() => saveImage(image.id)}
          disabled={image.saved}
        >
          Save
        </Button>{' '}
        <Button variant="danger" onClick={() => deleteImage(image.id)}>
          Delete
        </Button>
      </Card.Body>
      <Card.Footer className="text-center text-muted">
        {authorURL && (
          <Nav.Link href={authorURL} target="_blank">
            {authorName}
          </Nav.Link>
        )}
        {!authorURL && authorName}
      </Card.Footer>
    </Card>
  );
}

export default ImageCard;
