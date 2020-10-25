import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state ={
      title:'Jun',
      headerLinks : [
        {title:'Home' ,path:'/' },
        {title:'About' ,path:'/about' },
        {title:'Contact' ,path:'/contact' }
      ],
      home:{
        title:'Tam Kai Jun',
        subTitle:'Software Engineer',
        text:'Passion to make a difference'
      },
      about:{
        title:'About Me',
        subTitle:'TAM KAI JUN',
        text:'Passion to make a difference'
      },
      project:{
        title:'My Project',
        subTitle:'TAM KAI JUN',
        text:'Passion to make a difference'
      },
      contact:{
        title:'Let\'s Talk',
        subTitle:'TAM KAI JUN',
        text:'Passion to make a difference'
      }

    }
  }
  render(){
    return(
      <Router>
        <Container className="p-0" fluid={true}>
          
          <Navigation/>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} subTitle={this.state.about.subTitle} text={this.state.about.text} />} />
          <Route path="/project" render={() => <ProjectPage title={this.state.project.title} subTitle={this.state.project.subTitle} text={this.state.project.text} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} subTitle={this.state.contact.subTitle} text={this.state.contact.text}/>} />
          
          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;