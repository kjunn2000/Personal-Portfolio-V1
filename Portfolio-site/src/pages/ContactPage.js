import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Hero from '../components/Hero';
import Content from '../components/Content';
import Axios from 'axios';
import Linkedlinlogo from '../assets/images/linkedinlogo.png';
import Githublogo from '../assets/images/githublogo.png';
import Gmaillogo from '../assets/images/gmaillogo.png';



class ContactPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
    }


    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }


    handleSubmit = (event) => {
        this.setState({
            disabled: false,
            emailSent: true
        });
        event.preventDefault();

        console.log(event.target);

        this.setState({
            disabled: true
        });

        Axios.post('http://localhost:3030/api/email', this.state)
            .then(res => {
                if(res.data.success) {
                    this.setState({
                        disabled: false,
                        emailSent: true
                    });
                } else {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    });
                }
            })
            .catch(err => {
                console.log(err);

                this.setState({
                    disabled: false,
                    emailSent: false
                });
            })

    }


    render() {
        return(
            <div>
                <Hero title={this.props.title} subTitle={this.props.subTitle} text={this.props.text}/>
                <Content>
                <div className="row justify-content-center align-items-center text-center p-0" >
                    <a href="https://www.linkedin.com/in/tamkaijun/" target="_blank" className="row-xs col-sm-4 col-xs-12 align-items-center text-decoration-none p-0">
                        <img style={{width:"50px",height:"50px"}} src={Linkedlinlogo} alt="Linkedinlogo" />
                        <h4 className="pt-4">Tam Kai Jun</h4>
                    </a>
                    
                    <a href="https://github.com/kjunn2000" target="_blank" className="row-xs col-sm-4 col-xs-12 align-items-center text-decoration-none p-0">
                        <img style={{width:"50px",height:"50px"}} src={Githublogo} alt="Githublogo" />
                        <h4 className="pt-4">kjunn2000</h4>
                    </a>
                    <a href="https://gmail.com" target="_blank" className="row-xs col-sm-4 col-xs-12 align-items-center text-decoration-none p-0">
                        <img style={{width:"50px",height:"50px"}} src={Gmaillogo} alt="Gmaillogo" />
                        <h4 className="pt-4">kjunn2000@gmail.com</h4>
                    </a>
                    
                
                </div>

                </Content>
                {/* <Content>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="full-name">Full Name</Form.Label>
                            <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                        </Form.Group>


                        <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                        </Form.Group>


                        <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea"rows="3" value={this.state.message} onChange={this.handleChange} />
                        </Form.Group>


                        <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                            Send
                        </Button>


                        {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                        {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
                    </Form>
                </Content> */}
            </div>
        );
    }

}

export default ContactPage;