import React from "react";
import { Card } from "react-bootstrap";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Form from "react-bootstrap/Form";
import { Link, useLocation } from "react-router-dom";
const ShowMovies = ({ movieDetails }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const location = useLocation();
  console.log(location);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const movieName = form.movieName.value;
    const address = form.address.value;
    const bookingInfo = {
      name,
      email,
      movieName,
      address,
    };
    console.log(bookingInfo);
    localStorage.setItem("booingInfo", JSON.stringify(bookingInfo));
    form.value = "";
  };

  return (
    <div className="w-50 mx-auto my-5 ">
      <div className="mt-5 ">
        <div>
          <img
            src={location.state?.show?.image?.medium}
            alt=""
            className="img-fluid"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </div>
        <div className="col-md-6">
          <div>
            <h2 className="fs-2 mb-1 mt-2">{location.state?.show?.name}</h2>
            <p className=" mb-0">
              {location.state?.show?.status ? (
                <>Status : {location.state?.show?.status}</>
              ) : (
                <></>
              )}{" "}
            </p>
            <p className=" mb-0">
              {location.state?.show?.rating?.average ? (
                <> Ratings : {location.state?.show?.rating?.average}</>
              ) : (
                <></>
              )}
            </p>
            <p className=" mb-0">
              {location.state?.show?.averageRuntime ? (
                <> Average Time : {location.state?.show?.averageRuntime}</>
              ) : (
                <></>
              )}
            </p>
            <p className=" mb-0">
              {location.state?.show?.language ? (
                <> Language : {location.state?.show?.language}</>
              ) : (
                <></>
              )}
            </p>
            <p className=" mb-0">
              {location.state?.show?.premiered ? (
                <> Premiered : {location.state?.show?.premiered}</>
              ) : (
                <></>
              )}
            </p>
            <p className=" mb-0">
              {location.state?.show?.status ? (
                <> Status : {location.state?.show?.status}</>
              ) : (
                <></>
              )}
            </p>
            <p className=" mb-0">
              {location.state?.show?.summary ? (
                <> Summary : {location.state?.show?.summary}</>
              ) : (
                <></>
              )}
            </p>
            <p className="d-flex gap-2">
              {location.state?.show?.genres ? (
                <>
                  Generies :{" "}
                  {location.state?.show?.genres.map((generie, i) => (
                    <div key={i}>
                      <span>{generie}</span>
                    </div>
                  ))}
                </>
              ) : (
                <></>
              )}
            </p>

            <Button className=" me-3" variant="primary" onClick={handleShow}>
              Book now
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{location.state?.show?.name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={(e) => handleSubmit(e)}>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      name="name"
                      type="text"
                      placeholder="Enter Your Name"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      name="email"
                      type="email"
                      placeholder="Enter email"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      type="text"
                      name="movieName"
                      defaultValue={location.state?.show?.name}
                      readOnly
                      required
                    />
                  </Form.Group>
                  <Form.Control
                    as="textarea"
                    name="address"
                    className="mb-3"
                    placeholder="Enter Your Address"
                    style={{ height: "100px" }}
                    required
                  />
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Modal.Body>
            </Modal>
            <Link to="/">
              <Button className="" variant="primary">
                Back to Movie Page
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowMovies;
