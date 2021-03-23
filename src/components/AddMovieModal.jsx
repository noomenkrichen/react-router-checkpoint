import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import ReactStars from "react-stars";

function AddMovieModal(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [rate, setRate] = useState(0);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const ratingChanged = (newRating) => {
    setRate(newRating);
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
                onChange={(e) => setTitle(e.target.value)}
              />
              <Form.Control
                type="text"
                placeholder="Enter poster URL..."
                onChange={(e) => setPosterUrl(e.target.value)}
              />
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter movie description..."
                onChange={(e) => setDescription(e.target.value)}
              />
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                color2={"#ffd700"}
                value={rate}
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
              props.addMovie({
                title: title,
                description: description,
                posterUrl: posterUrl,
                rate: rate,
              });
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovieModal;