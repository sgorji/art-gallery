import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import ImageCard from './components/ImageCard';
import Welcome from './components/Welcome';
import { Container, Row, Col } from 'react-bootstrap';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

function App() {
  const [word, setWord] = useState('');
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);

  function handleSearchSubmit(e) {
    e.preventDefault();
    fetch(`${API_URL}/new-image?query=${word}`)
      .then((result) => result.json())
      .then((data) => {
        setImages([{ ...data, title: word }, ...images]);
      })
      .catch((err) => {
        console.log(err);
      });
    setWord('');
  }

  function handleDeleteImage(id) {
    setImages(images.filter((image) => image.id !== id));
  }

  function handleSelect(selectedIndex, e) {
    setIndex(selectedIndex);
  }

  return (
    <div className="App">
      <Header title="Art Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      <Container className="mt-4">
        {images.length ? (
          <Row xs={1} md={2} lg={3}>
            {images.map((image, i) => (
              // console.log(image);
              <Col key={i} className="pb-3">
                <ImageCard image={image} deleteImage={handleDeleteImage} />
              </Col>
            ))}
          </Row>
        ) : (
          <Welcome index={index} onSelect={handleSelect} />
        )}
      </Container>
    </div>
  );
}

export default App;
