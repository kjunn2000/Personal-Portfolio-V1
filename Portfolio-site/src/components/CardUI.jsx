import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

import "../App.css";

const Card = props => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return(
        <div className="card text-center shadow">
            <div className="overflow">
                <img style={{width:'375px',height:'240px'}} src={props.imgsrc} alt="" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text text-secondary">{props.subTitle}</p>
                <div class="btn-group" role="group" aria-label="ButtonGroup">
                    <button className="btn btn-outline-danger" onClick={handleShow}>View</button>
                    <a href={props.url} target="_black" className="btn btn-outline-success">Source Code</a>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={props.slider1}
                            alt="First slide"
                            style={{width:'500px',height:'280px'}}
                            />
                            {/* <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={props.slider2}
                            alt="Third slide"
                            style={{width:'500px',height:'280px'}}
                            />

                            {/* <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={props.slider3}
                            alt="Third slide"
                            style={{width:'500px',height:'280px'}}
                            />
{/* 
                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={props.slider4}
                            alt="Fourth slide"
                            style={{width:'500px',height:'280px'}}
                            />
{/* 
                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                    </Carousel>
                    <div className="w-100"></div>
                    <p className="pt-3 text-justify">
                        {props.description}
                    </p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    <a href={props.url} target="_blank" className="text-white text-decoration-none">Source Code</a>
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Card ;