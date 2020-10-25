import React from 'react';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import Cards from '../components/Cards';

function ProjectPage(props){
    return (
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
            
            <Cards/>
        </div>
    );
}

export default ProjectPage;