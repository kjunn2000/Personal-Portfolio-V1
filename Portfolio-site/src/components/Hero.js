import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import jun from '../assets/images/jun.jpg';

import '../App.css';



function Hero(props){
    return(
        <Jumbotron className="bg-transparent jumbotron-fluid m-0 pb-1">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>
                        { props.title && <h1 className="heroTitle font-weight-bolder">{props.title}</h1>}
                        { props.subTitle && <h3 className="heroSubTitle font-weight-light">{props.subTitle}</h3>}
                        { props.text && <h1 className="heroText font-weight-light">{props.text}</h1>}
                    </Col>
                    <img className="junImage" src={jun} alt="jun" style={{width:"200px",height:"200px", borderRadius:"50%"}}></img>

                </Row>
            </Container>
        </Jumbotron>

    );
}

export default Hero;