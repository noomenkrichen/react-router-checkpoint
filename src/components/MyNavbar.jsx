import React, { useState } from "react";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import ReactStars from "react-stars";
import {Link} from "react-router-dom";

const MyNavbar = (props) => {
  const [rate, setRate] = useState(0);
  const ratingChanged = (newRating) => {
    setRate(newRating);
    props.searchMoviesRate(newRating);
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Link to="/">
        <Navbar.Brand href="#">Movie App</Navbar.Brand>
      </Link>     
      
      <Nav className="mr-auto">
        <div className="rates">
          Search Movies by Rating:
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            color2={"#ffd700"}
            value={rate}
          />
        </div>
      </Nav>

      <Form inline>
        <FormControl
          type="text"
          placeholder="Search movie by title"
          className="mr-sm-2"
          onChange={(e) => props.searchMoviesTitle(e.target.value)}
        />
      </Form>
    </Navbar>
  );
};

export default MyNavbar;
