import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import ImageCard from './components/ImageCard';
import Welcome from './components/Welcome';
import Loader from './components/Loader';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

function App() {
  const [word, setWord] = useState('');
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  async function getSavedImages() {
    try {
      const resp = await axios.get(`${API_URL}/images`);
      setImages(resp.data || []);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSavedImages();
  }, []);

  async function handleSearchSubmit(e) {
    e.preventDefault();

    try {
      const resp = await axios.get(`${API_URL}/new-image?query=${word}`);
      setImages([{ ...resp.data, title: word }, ...images]);
    } catch (error) {
      console.log(error);
    }

    setWord('');
  }

  async function handleSaveImage(id) {
    const imageToSave = images.find((image) => image.id === id);
    imageToSave.saved = true;

    try {
      const resp = await axios.post(`${API_URL}/images`, imageToSave);
      if (resp.data?.inserted_id) {
        setImages(
          images.map((image) =>
            image.id === id ? { ...image, saved: true } : image
          )
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDeleteImage(id) {
    try {
      const resp = await axios.delete(`${API_URL}/images/${id}`);
      if (resp.data?.deleted_id) {
        setImages(images.filter((image) => image.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleSelect(selectedIndex, e) {
    setIndex(selectedIndex);
  }

  return (
    <div className="App">
      <Header title="Art Gallery" />
      {loading ? (
        <Loader loading={loading} setLoading={setLoading} />
      ) : (
        <>
          <Search
            word={word}
            setWord={setWord}
            handleSubmit={handleSearchSubmit}
          />
          <Container className="mt-4">
            {images.length ? (
              <Row xs={1} md={2} lg={3}>
                {images.map((image, i) => (
                  <Col key={i} className="pb-3">
                    <ImageCard
                      image={image}
                      saveImage={handleSaveImage}
                      deleteImage={handleDeleteImage}
                    />
                  </Col>
                ))}
              </Row>
            ) : (
              <Welcome index={index} onSelect={handleSelect} />
            )}
          </Container>
        </>
      )}
    </div>
  );
}

export default App;
