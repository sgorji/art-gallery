import React from 'react';
import { Button } from 'react-bootstrap';

function Welcome({ index, handleSelect }) {
  return (
    <div class="bg-light p-5 rounded-lg m-3">
      <h1 class="display-4">Art Gallery</h1>
      <p class="lead">
        A simple application to search for images by keyword using Unsplash API.
      </p>
      <hr class="my-4" />
      <p>
        Curious about{' '}
        <em>
          <font color="red">
            <strong color="Red">unsplash.com</strong>
          </font>
        </em>
        ?
      </p>
      <p>
        <Button variant="primary" href="https://unsplash.com" target="_blank">
          Learn more
        </Button>
      </p>
    </div>
  );
}

export default Welcome;
