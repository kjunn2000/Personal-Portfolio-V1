import React from 'react';
import {BrowserRouter as Link } from 'react-router-dom';

import {useSpring , animated } from 'react-spring';

function CardInfo (props){

    const style = useSpring({opacity:1,from:{opacity: 0}});
    return(
        <animated.div className="g-card-info text-monospace text-center pt-4" style={style}>
            <p className="g-card-title">{props.title}</p>
            <p className="g-card-sub-title">{props.subTitle}</p>
            <a className="d-flex justify-content-end text-decoration-none" href={props.link} target="_blank" rel="noopener nonreferrer"><button type="button" class="btn btn-outline-info  d-flex justify-content-end">View</button></a>
        </animated.div>
    );

}

export default CardInfo;