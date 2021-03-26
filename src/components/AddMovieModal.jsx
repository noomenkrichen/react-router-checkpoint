//import { Movie } from "@material-ui/icons";
import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import ReactStars from "react-stars";

function AddMovieModal(props) {
  const[newMovie, setNewMovie] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const ratingChanged = (newRating) => {
    setNewMovie({...newMovie, rate: newRating});
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Enter movie title..."
                onChange={(e) => setNewMovie({...newMovie, title: e.target.value})}
              />
              <Form.Control
                type="text"
                placeholder="Enter poster URL..."
                onChange={(e) => setNewMovie({...newMovie, posterUrl: e.target.value})}
              />
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter movie description..."
                onChange={(e) => setNewMovie({...newMovie, description: e.target.value})}
              />
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                color2={"#ffd700"}
                value={newMovie.rate}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              props.addMovie(newMovie);
              setNewMovie({})
              handleClose();
            }}
          >
            Add movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovieModal;