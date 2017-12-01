import React, { Component } from 'react';
import firstBulb from './images/firstBulb.jpg';
import secondBulb from './images/secondBulb.jpg';
import thirdBulb from './images/thirdBulb.jpg';
import fourthBulb from './images/fourthBulb.jpg';
import aboutImage from './images/firstBulbChanged.jpg';
import servicesImage from './images/thirdBulbChanged.jpg';
import projectsImage from './images/secondBulbChanged.jpg';
import contactImage from './images/fourthBulbChanged.jpg';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';
import profpic from './images/profpic.jpg';
import port from './images/port.png';
import jsmaker from './images/jsmaker.jpg';
import resume from './images/CLAIREHUANG-CV.pdf';
import { Element, Link } from 'rc-scroll-anim'

class App extends Component {
  constructor(props){
    super(props);
    this.mouseOverAbout = this.mouseOverAbout.bind(this);
    this.mouseStop = this.mouseStop.bind(this);
    this.mouseOverProjects = this.mouseOverProjects.bind(this);
    this.mouseOverServices= this.mouseOverServices.bind(this);
    this.mouseOverContact = this.mouseOverContact.bind(this);
    this.state={
    hover: 'home',
    firstBulb: firstBulb,
    secondBulb: secondBulb,
    thirdBulb: thirdBulb,
    fourthBulb: fourthBulb,
    aboutImage: aboutImage,
    servicesImage: servicesImage,
    projectsImage: projectsImage,
    contactImage:contactImage
    }
  }
  mouseOverAbout(e){
    e.preventDefault();

    this.setState({hover:'about'})
  }
  mouseOverProjects(){
    this.setState({hover:'projects'})
  }
  mouseOverServices(){
    this.setState({hover:'services'})
  }
  mouseOverContact(){
    this.setState({hover:'contact'})
  }
  mouseStop(){
    this.setState({hover:'home'})
  }

  render() {
    var firstBulbElem= this.state.firstBulb;
    var secondBulbElem= this.state.secondBulb;
    var thirdBulbElem= this.state.thirdBulb;
    var fourthBulbElem=this.state.fourthBulb;
    if(this.state.hover==="about"){
      firstBulbElem = this.state.aboutImage;
    }else if(this.state.hover==="projects"){
      secondBulbElem = this.state.projectsImage;
    }else if(this.state.hover==="services"){
      thirdBulbElem = this.state.servicesImage;
    }else if(this.state.hover==="contact"){
      fourthBulbElem = this.state.contactImage;
    }
    var firstStyle={
        maxWidth:'65%',
        top:'0px',
        overflow:'hidden'
      }
      var secondStyle={
        maxWidth:'65%',
        top:'0px',
        overflow:'hidden'
      }
      var thirdStyle={
        maxWidth:'65%',
        top:'0px',
        overflow:'hidden'
      }
      var fourthStyle={
        maxWidth:'65%',
        top:'0px',
        overflow:'hidden'
      }
    return (
      <div className="txt-img-specs"  >
          <div className = "hidden-xs firstbody ">
          <div className="homepagewrap ">


            <div className="hidden-xs bulbWrap bulbrow">

              <div className="firstBulbWrap bulbwrapper">
                <Link  className="nav-list" to="about">

                  <img style={firstStyle} onMouseOver={this.mouseOverAbout} onMouseOut={this.mouseStop} src={firstBulbElem}></img>
                </Link>
              </div>

              <div className="secondBulbWrap bulbwrapper">
                <Link className="nav-list" to="projects">
                  <img style={secondStyle} onMouseOver={this.mouseOverProjects} onMouseOut={this.mouseStop} src={secondBulbElem}></img>

                </Link>

              </div>

              <div className="thirdBulbWrap bulbwrapper">
                <Link className="nav-list" to="resume">
                  <img style={thirdStyle} onMouseOver={this.mouseOverServices} onMouseOut={this.mouseStop} src={thirdBulbElem}></img>
                </Link>

              </div>

              <div className="fourthBulbWrap ">
                <Link className="nav-list" to="contact">
                  <img style={fourthStyle} onMouseOver={this.mouseOverContact} onMouseOut={this.mouseStop} src={fourthBulbElem}></img>

                </Link>

              </div>


            </div>


            <div className="homepage-components">
              <div className="titlewrap" >
                  Claire Huang
                <div className="subtitle">student. developer.</div>
              </div>


            </div>



</div>
</div>
<Element className="container-fluid" id="about">


<div className="wrap">
  <div className="projtitle">Hi, welcome!</div>

  <div className="row">
    <div className="projwrapper col-sm-11 col-xs-12">
      <div className="row">
      <div className="projitems col-med-7 col-sm-7 col-xs-12">
        <div className="colleft" >
        <div className="h1wrap"> I'm Claire :) </div>
        <p className="projparagraphs">
          I am a senior at the University of Pennsylvania, where I am pursuing a BA
          in Cognitive Science and a minor in Computer and Information Systems.
          During my second semester of my junior year, I attended a coding bootcamp (Horizons)
          to acquire web development skills. It was such an amazing feeling to be able to devote time to doing what I love:
          creating and building.
        <br/>
          I'm currently looking for any opportunity to learn more about full stack web development and management.
          If you're interested or would like to chat, please click the
          contact tab and say hi!
        <br/>
        </p>
        </div>
        </div>
        <div className="col-sm-5 col-xs-12">
          <img className="projpic " src={profpic}></img>
        </div>

      </div>



    </div>
      <div className="hidden-xs col-sm-1 col-xs-1">
        <NavBar/>
      </div>

</div>
  </div>

</Element>
<Element className="container-fluid" id="projects">


<div className="wrap">
  <div className="projtitle">Projects</div>
<div className="positioning"> (some of my favorites)</div>

  <div className="row">
    <div className="projwrapper col-sm-11 col-xs-12">
      <div className="row">
      <div className="projitems col-med-7 col-sm-6">
        <div className="colleft" >
        <div className="h1wrap"> PORT </div>
        <p className="projparagraphs">
          My best friend and I started working on a project that we believed would be useful
          to many of our fellow classmates: a web application that would allow users to share their online shopping carts
          to ease the process of group ordering. <br/>
          The technologies we used included ScraperJS for scraping small retail sites for product information, MongoDB, ExpressJS, ReactJS,
          and NodeJS.
        </p>
        </div>
        </div>
        <div className="col-med-5 col-sm-6">
          <img className="projpic " src={port}></img>
        </div>

      </div>
      <div className="row">
      <div className="projitems col-med-7 col-sm-6">
        <div className="colleft" >
        <div className="h1wrap"> WIDGET MAKER </div>
        <p className="projparagraphs">
          This application was built for non-technical users. Targeting restaurant owners managing their own websites,
          Widget Maker allows users to inject a banner or popup and customize it simply by filling out a form. <br/>
          The technologies used were ReactJS, NodeJS, jQuery, AWS S3, and ExpressJS.

        </p>
        </div>
        </div>
        <div className="col-med-5 col-sm-6">
          <img className="projpic " src={jsmaker}></img>
        </div>

      </div>


    </div>
      <div className="hidden-xs col-sm-1 col-xs-1">
        <NavBar/>
      </div>

</div>
  </div>

</Element>
<Element className="container-fluid" id="resume">
  <div className="wrap">
    <div className="projtitle">Resume and Work Experience</div>

    <div className="row">
      <div className="projwrapper  col-sm-11 col-xs-12">
        <div className="row">
        <div className="projitems col-xs-12">
          <div className="colleft" >
          <div className="h1wrap"> visa inc. </div>
          <p className="projparagraphs">
            ROLE: Lead Frontend Developer <br/>
            TECHNOLOGIES USED: MongoDB, ExpressJS, AngularJS, NodeJS, CytoscapeJS

          </p>
          </div>
          </div>

        </div>
        <div className="row">
        <div className="projitems col-xs-12">
          <div className="colleft" >
          <div className="h1wrap"> mHealth Service </div>
          <p className="projparagraphs">
            ROLE:Web Developer<br/>
            TECHNOLOGIES USED: ReactJS, AWS, NodeJS

          </p>
          </div>
          </div>
        </div>
        <div className="row buttonwrap ">
          <form className="buttonborder" action="https://www.linkedin.com/in/claire-huang-78a2b3b9/">
          <button type="submit" id="submit">LinkedIn</button>

        </form>
        <form className="buttonborder" action={resume} method="get" target="_blank">
        <button type="submit" id="submit" >Resume</button>

      </form>





      </div>

      </div>
      <div className=" hidden-xs col-xs-1">
        <NavBar/>
      </div>
  </div>
    </div>
</Element>
<Element className="container-fluid" id="contact">
  <div className="wrap">
    <div className="projtitle">Say hallo!</div>

    <div className="row">
      <div className="projwrapper  col-sm-11 col-xs-12">
        <div className="row">
        <div className="projitems col-xs-12">
          <div className="colleft" >
          <div className="h1wrap">Things I am particularly interested in:</div>
          <p className="projparagraphs">
            UI/UX, web development, software performance optimization, language acquisition,
            photography, videography, dancing, HIIT, kitchen experimentation

          </p>
          </div>
          </div>

        </div>
        <div className="row">
        <div className="projitems col-xs-12">
          <div className="colleft" >
          <div className="h1wrap"> Want to chat? </div>
          <p className="projparagraphs">

            huangcl@sas.upenn.edu

          </p>
          </div>
          </div>
        </div>


      </div>
      <div className=" hidden-xs col-xs-1">
        <NavBar/>
      </div>
  </div>
    </div>

</Element>








      </div>

    );
    }
}

export default App;
