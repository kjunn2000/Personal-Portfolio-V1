import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import { Badge, Row, Col } from 'react-bootstrap';
import foonyewlogo from '../assets/images/foonyewlogo.jpg';
import apulogo from '../assets/images/apulogo.png';
import ipartslogo from '../assets/images/ipartslogo.png';
import tmdlogo from '../assets/images/tmdlogo.PNG';


function AboutPage(props){
    return (
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
            <Content>
                <p className="text-justify text-monospace">My name is Tam Kai Jun. I'm a full stack engineer with experience in Java, Spring, Python, Node JS, React, PostgresSQL, MongoDB, and SQL server. I am also an undergraduate student at Asia Pacific University. Coding is the biggest hobby in my life. I love the feeling that continue discovering new knowledge and things. I am willing to learn new skills and technologies "Passion to make a difference" is always represent me. </p>
            
                <div className="about container pt-5">
                    <div className="row">
                        <div className="subtitle col-xs-12 col-sm-4 h2">
                            EDUCATION :
                        </div>
                        <div className="col-xs-12 col-sm-8 ">
                            <ul className="list-unstyled">
                                <li className="media">
                                    <img src={foonyewlogo} className="mr-3 col-4" alt="TMDynamics"/>
                                    <div className="media-body">
                                        <h5 className="mt-0 mb-1">Foon Yew High School</h5>
                                        <small class="text-muted">January 2013 - December 2018</small>
                                        <div className="w-100"/>
                                        <div className="col">
                                            <ul>
                                                <li>UEC certificate holder</li> 
                                                <li>Leader of Foon Yew Volleyball Club</li>
                                                <li>2017 MSSJ Volleyball Competition second runner up</li>     
                                                <li>2017 MSSD Volleyball Competition champion 2017</li> 
                                                <li>2016 MSSJ Volleyball Competition first runner up 2016</li>                         
                                                <li>2016 MSSD Volleyball Competition champion 2016</li>                         
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="media my-4">
                                    <img src={apulogo} class="mr-3 col-4" alt="IPartsMarketing"/>
                                    <div className="media-body">
                                        <h5 className="mt-0 mb-1">Asia Pacific University of Technology and Innovation (APU)</h5>
                                        <small class="text-muted">April 2019 - Current</small>
                                        <div className="w-100"/>
                                        <div className="col-sm ">
                                            <ul>
                                                <li>BSC (HONS) IN SOFTWARE ENGINEERING Asia Pacific University</li> 
                                                <li>CGPA 3.94 (Latest)</li>                
                                                <li>APU Volleyball Club</li>    
                                                <li>Participant of Microsoft Hackathon 2020</li>           
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                        
                            </ul>
                        </div>
                        
                    </div>
                    <hr/>
                    <div className="row">
                        <div class="subtitle col-xs-12 col-sm-4 h2">
                            SKILL SET :
                        </div>
                        <div className="col-xs-12 col-sm-8 ">
                            <div className="row p-0">
                                <div className="col">
                                    <ul>
                                        <li>Java</li>
                                        <li>Spring/Spring Boot</li>
                                        <li>Python</li>
                                        <li>Typescript</li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <ul>
                                        <li>Node JS</li>
                                        <li>React JS</li>
                                        <li>Postgresql</li>
                                        <li>MongoDB</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="subtitle col-xs-12 col-sm-4 h2">
                            SOFT SKILL :
                        </div>
                        <div className="col-xs-12 col-sm-8 ">
                            
                            <div className="row p-0">
                                <div className="col">
                                    <ul>
                                        <li>Leadership Skill</li>
                                        <li>Good Drawing Skill</li>
                                        <li>Testing Skill</li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <ul>
                                        <li>Big-Picture Thinking Skill</li>
                                        <li>Reporting Skills</li>
                                        <li>Client-facing skills</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div class="subtitle col-xs-12 col-sm-4 h2">
                            EXPERIENCE :
                        </div>
                        <div className="col-xs-12 col-sm-8 ">
                            <ul className="list-unstyled">
                                <li className="media">
                                    <img src={tmdlogo} class="mr-3 col-4" alt="TMDynamics"/>
                                    <div className="media-body">
                                        <h5 className="mt-0 mb-1">TMDynamics Sdn. Bhd.</h5>
                                        <h6 className="mt-0 mb-1">Freelancer Full Stack Software Engineer</h6>
                                        <small class="text-muted">October 2019 - March 2020</small>
                                        <div className="m-100"/>
                                        <div className="col">
                                            <ul>
                                                <li>Created restful API by using Java and its framework such as Spring or Spring Boot to perform business function.</li>
                                                <li>Created site layout and user interface using HTML , CSS , javascript or React framework.</li> 
                                                <li>Created eye catching and functional digital design concepts across various platforms to strengthen company brand and identity.</li>
                                                <li>Developed customer-facing communications to provide measurable click-thru rates for marketing conversion tracking.</li>    
                                                <li>Collaborated with in-house web designers to create sleek and innovative UI design.</li>                                       
                                                <li>Crafted SEO strategy and intuitive interface for company site to achieve prominent rankings across top browser platforms, including Google and Bing.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="media my-4">
                                    <img src={ipartslogo} class="mr-3 col-4" alt="IPartsMarketing"/>
                                    <div className="media-body">
                                        <h5 className="mt-0 mb-1">I Parts Marketing Sdn. Bhd.</h5>
                                        <h6 className="mt-0 mb-1">Freelancer Full Stack Software Engineer</h6>
                                        <small class="text-muted">March 2020 - Current</small>
                                        <div className="w-100"/>
                                        <div className="col">
                                            <ul>
                                                <li>Used various technologies, including MERN stack to make code repairs and optimize corporate website.</li>                                                
                                                <li>Developed user friendly e-commerce application to reduce cart abandonment rate , resulting in increased online sales after go-live date.</li>
                                                <li>Designed intuitive graphical user interfaces using knowledge of serial communications and database design to improve user experience.</li>
                                                <li>Tested customer-facing prototypes before deployment, applying best practice diagnostic techniques to verify usability.</li>
                                                <li>Designed and executed security measures such as firewalls and encryption.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                        
                            </ul>
                        </div>
                    </div>
                </div>         
               
            </Content>
        </div>
    );
}

export default AboutPage;