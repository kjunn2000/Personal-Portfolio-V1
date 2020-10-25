import React,{Component} from 'react'
import Card from './CardUI';
import image from '../assets/images/tmdlogo.PNG';
import iparts1 from '../assets/images/iparts1.PNG';
import iparts2 from '../assets/images/iparts2.PNG';
import iparts3 from '../assets/images/iparts3.PNG';
import iparts4 from '../assets/images/iparts4.PNG';

import tmd1 from '../assets/images/tmd1.PNG';
import tmd2 from '../assets/images/tmd2.PNG';
import tmd3 from '../assets/images/tmd3.PNG';
import tmd4 from '../assets/images/tmd4.png';

import academic1 from '../assets/images/academic1.PNG';
import academic2 from '../assets/images/academic2.PNG';
import academic3 from '../assets/images/academic3.PNG';
import academic4 from '../assets/images/academic4.PNG';

import parking1 from '../assets/images/parking1.PNG';
import parking2 from '../assets/images/parking2.PNG';
import parking3 from '../assets/images/parking3.PNG';
import parking4 from '../assets/images/parking4.PNG';

import covid1 from '../assets/images/covid1.PNG';
import covid2 from '../assets/images/covid2.PNG';
import covid3 from '../assets/images/covid3.PNG';
import covid4 from '../assets/images/covid4.PNG';

import taekwondo1 from '../assets/images/taekwondo1.PNG'
import taekwondo2 from '../assets/images/taekwondo2.PNG';
import taekwondo3 from '../assets/images/taekwondo3.PNG';
import taekwondo4 from '../assets/images/taekwondo4.png';

import tcms1 from '../assets/images/tuition1.PNG';
import tcms2 from '../assets/images/tuition2.PNG';
import tcms3 from '../assets/images/tuition3.PNG';
import tcms4 from '../assets/images/tuition4.PNG';

import portfolio1 from '../assets/images/portfolio1.PNG';
import portfolio2 from '../assets/images/portfolio2.PNG';
import portfolio3 from '../assets/images/portfolio3.PNG';
import portfolio4 from '../assets/images/portfolio4.PNG';














class Cards extends Component{

    constructor(props){
        super(props);
        this.state ={
          iparts:{
            title:"I Parts Web Store",
            subTitle:'Nodejs | React | MongoDB | Expressjs',
            description:'I Parts Web Store is a ecommerce web application, it is written in MERN stack. It provides all the ecommerce business function including account login, product ordering, order management, payment as well as admin dashboard. This web application is integrated with paypal api to perform payment funcion.',
            url:'https://github.com/kjunn2000/I-Parts-Marketing-Web-Store'
          },
          tmdynamics:{
            title:'TMDynamics Official website',
            subTitle:'HTML | CSS | Javascript | Nodejs | JQuery ',
            description:'This website is a company introduction website, it is currently used by TMDynamics company. TMDynamics\' company background, product and services are all introduce in this website. It is integrated with nodejs to perform some basic business function such as email sending. ',
            url:'https://github.com/kjunn2000/TMDynamic-Company-Website'
          },
          acrs:{
            title:'Academic Coursework Report System',
            subTitle:'Java | Swing | MVC',
            description:'Academic Coursework Report System is a java desktop application. This application provides the business function of register, enroll and manage the student. Lecturer is able to key student\'s result to the system. This system can auto generate several type of report for further analysis.',
            url:'https://github.com/kjunn2000/Academic-Coursework-Report-System'
          },
          parkingsystem:{
            title:'Parking System',
            subTitle:'Java | Swing | MVC',
            description:'This parking system is a java swing application. By using the system, users are able to pay the parking fees according to their parking time. The users cannot pay a new ticket if they have any ticket haven\'t pay. The system will return the money if users pay more than the actual fees ',
            url:'https://github.com/kjunn2000/ParkingSystem-Java-Swing'
          },
          covid19tracker:{
            title:'Covid 19 Tracking Application',
            subTitle:'Java | Spring Boot | Boostrap | Thymeleaf',
            description:'Covid 19 traking application is a spring boot web application used to track the lastest covid-19 cases around the world. It shows the total cases in every country and also the increment compare to the day before. All the data will be update automatically everyday.',
            url:'https://github.com/kjunn2000/Covid-19-Tracker-Application'
          },
          taekwondoClubWebsite:{
            title:'Taekwondo Club Website',
            subTitle:'HTML | CSS | Javascript | JQuery',
            description:'Teakwondo Club website is a APU society website. This taekwondo website is mainly to introduce the APU taekwondo club and recruit new student to join the taekwondo club. It includes the details information of the taekwondo club such as club background, achivement, life and also their activities.',
            url:'https://github.com/kjunn2000/Taekwondo-Club-Website'
          },
          tcms:{
            title:'Tuition Center Management System',
            subTitle:'C# | Window Form | Microsoft Access',
            description:'Tuition center management system is a c# window form desktop application and integrate with microsoft access database. Admin is able to register, enroll to different tuition classes by using this sytem. Student is able to pay their tuition fees and check their tuition timetable in the system. The payment receipt will auto generate by this system.',
            url:'https://github.com/kjunn2000/Tuition-Centre-Management-System'
          },
          portfolio:{
            title:'Personal Portfolio',
            subTitle:'React | Bootstrap | Nodejs',
            description:'This portfolio is the first version of my portfolio. It mainly written in react and using bootstap to beautify. It consists of four part which are home, about, project and contact. This portfolio helps to introduce myself and show my project and skill set to employers. It provides opportunities to let employers know my potential.',
            url:'https://github.com/kjunn2000/Portfolio'
          }
        }
    }


    render(){
        return(
            <div className="container-fluid d-flex justify-content-center p-5">
                <div className="row">
                    <div className="col-md-4 pb-5">
                        <Card imgsrc={iparts1} slider1={iparts1} slider2={iparts2} slider3={iparts3} slider4={iparts4} title={this.state.iparts.title} subTitle={this.state.iparts.subTitle} description={this.state.iparts.description} url={this.state.iparts.url}/>
                    </div>
                    <div className="col-md-4 pb-5">
                        <Card imgsrc={tmd1}  slider1={tmd1} slider2={tmd2} slider3={tmd3} slider4={tmd4} title={this.state.tmdynamics.title} subTitle={this.state.tmdynamics.subTitle} description={this.state.tmdynamics.description} url={this.state.tmdynamics.url}/>
                    </div>
                    <div className="col-md-4 pb-5">
                        <Card imgsrc={academic1}  slider1={academic1} slider2={academic2} slider3={academic3} slider4={academic4} title={this.state.acrs.title} subTitle={this.state.acrs.subTitle} description={this.state.acrs.description} url={this.state.acrs.url}/>
                    </div>
                    <div className="col-md-4 pb-5">
                        <Card imgsrc={parking2}  slider1={parking1} slider2={parking2} slider3={parking3} slider4={parking4} title={this.state.parkingsystem.title} subTitle={this.state.parkingsystem.subTitle} description={this.state.parkingsystem.description} url={this.state.parkingsystem.url}/>
                    </div>
                    <div className="col-md-4 pb-5">
                        <Card imgsrc={covid1}  slider1={covid1} slider2={covid2} slider3={covid3} slider4={covid4} title={this.state.covid19tracker.title} subTitle={this.state.covid19tracker.subTitle} description={this.state.covid19tracker.description} url={this.state.covid19tracker.url}/>
                    </div>
                    <div className="col-md-4 pb-5">
                        <Card imgsrc={taekwondo1} slider1={taekwondo1} slider2={taekwondo2} slider3={taekwondo3} slider4={taekwondo4} title={this.state.taekwondoClubWebsite.title} subTitle={this.state.taekwondoClubWebsite.subTitle} description={this.state.taekwondoClubWebsite.description}  url={this.state.taekwondoClubWebsite.url}/>
                    </div>
                    <div className="col-md-4 pb-5">
                        <Card imgsrc={tcms1}  slider1={tcms1} slider2={tcms2} slider3={tcms3} slider4={tcms4} title={this.state.tcms.title} subTitle={this.state.tcms.subTitle} description={this.state.tcms.description} url={this.state.tcms.url}/>
                    </div>
                    <div className="col-md-4 pb-5">
                        <Card imgsrc={portfolio1}  slider1={portfolio1} slider2={portfolio2} slider3={portfolio3} slider4={portfolio4} title={this.state.portfolio.title} subTitle={this.state.portfolio.subTitle} description={this.state.portfolio.description} url={this.state.portfolio.url}/>
                    </div>  
                </div>
                
            </div>
        )
    }
}

export default Cards;