import React from 'react';

import Card from '../components/Card';

import aboutme from '../assets/images/aboutme.jpg';
import project from '../assets/images/project.jpg';
import contactme from '../assets/images/contactme.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'ABOUT ME',
                    subTitle: 'Undergraduate software engineer',
                    imgSrc: aboutme,
                    link: 'http://moodyjun.com/about',
                    selected: true
                },
                {
                    id: 1,
                    title: 'My Project',
                    subTitle: 'Various type of prject.',
                    imgSrc: project,
                    link: 'http://moodyjun.com/project',
                    selected: true
                },
                {
                    id: 2,
                    title: 'Contact',
                    subTitle: 'Please contact me for interview.',
                    imgSrc: contactme,
                    link: 'http://moodyjun.com/contact',
                    selected: true
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;