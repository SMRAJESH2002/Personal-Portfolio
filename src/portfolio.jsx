import React from "react";
import "./portfolio.css";
import {
  FaLessThan,
  FaGreaterThan,
  FaFacebook,
  FaGithub ,
  FaUniversity,
  FaPhoneVolume,
  FaRegPaperPlane,
  FaLinkedin,
} from "react-icons/fa";
import { BiLogoGmail, BiLogoInstagramAlt } from "react-icons/bi";
import { BsMouse,BsDownload,BsFillClipboard2DataFill,BsChevronDoubleUp  } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import Typewriter from "typewriter-effect";
import profile from "./Images/RAJESH_2.jpg";
import frag_start from "./Images/fragement-start.png";
import frag_end from "./Images/fragement-end.png";
import about_1 from "./Images/About/1.jpg";
import about_2 from "./Images/About/2.jpg";
import "animate.css";
import Mahindra from "./Images/projects/MAHINDRA.jpg";
import Weather from "./Images/projects/weather.jfif";
import Crud from "./Images/projects/crud.png";
import Calc from "./Images/projects/calcu.png";
import { MdOutlineCookie } from "react-icons/md";
import { LuLink } from "react-icons/lu";
import { WiBarometer } from "react-icons/wi";
import { CiCalculator2 } from "react-icons/ci";
import Pencil from "./Images/eduction/skill.png";
import { TbCertificate } from "react-icons/tb";
import { IoSchool } from "react-icons/io5";
import Slider from "react-slick";
import Skill1 from "./Images/eduction/html.png";
import Skill2 from "./Images/eduction/css.png";
import Skill3 from "./Images/eduction/bootstrap.png";
import Skill4 from "./Images/eduction/javascript.png";
import Skill5 from "./Images/eduction/react.png";
import Skill6 from "./Images/eduction/figma.png";
import { RiDoubleQuotesL, RiDoubleQuotesR} from "react-icons/ri";
import Mailto from 'react-mailto.js';
const PDF = 'https://drive.google.com/file/d/1TuxeUsPSpzkm8J4-eWbQkbsB8fb3pcWa/view?usp=sharing';
export default class Sample extends React.Component {
  constructor(){
    super();
    this.state={value:true};
    this.state={value1:true};
    this.navchange=this.handleNav.bind(this);
    this.navchange1=this.handleNav1.bind(this);
  }
  handleNav(){
    console.log(this.state.value);
    this.setState({value:!this.state.value});
  }
  handleNav1(){
    console.log(this.state.value1);
    this.setState({value1:!this.state.value1});
  }
  
  render() {
    function SendWhatsapp(e){
      var phone="+918098733569";
      var name=e.target[0].value;
      var mail=e.target[1].value;
      var phoneno=e.target[2].value;
      var content=e.target[3].value;
      var ex = "This is an example."
      var url =`https://wa.me/${phone}?text=*Name:*${name}%0a*E-Mail:*${mail}%0a*Phonenumber:*${phoneno}%0a*Message:*${content}%0a%0a${ex}`;
      e.preventDefault();
      window.open(url, '_blank').focus();
      console.log(e.target[0].value);
      console.log(e.target[1].value);
      console.log(e.target[2].value);
      console.log(e.target[3].value);
    }

    const resumeDownload=(url1)=>{
      window.open(url1, '_blank').focus();
    }
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      swipeToSlide: true,
      slidesToScroll:1,
      autoplay: true,
      speed:2000,
      autoplaySpeed: 4000,
      cssEase:"linear"
      };
    return (
      <div>
        {/* home */}
        <div className="portfolio_home" id="home">
          {/* nav bar */}
          <nav className="portfolio_navbar" id="first">
            <a style={{ fontSize: "24px", fontWeight: "800" }}>
              <FaLessThan />
              Portfolio/
              <FaGreaterThan />
            </a>
            <section className="portfolio_navbar_module">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skill">Skills</a>
              <a href="#project">Projects</a>
              <a href="#contact">Contact</a>
            </section>
            <button onClick={this.navchange} className="portfolio_navbtn">
              <RxHamburgerMenu />
            </button>
          </nav>
          <div className="portfolio_homemain">
            <section className="portfolio_social">
            <a href="https://www.instagram.com/tn_67_royal_enfield?igsh=MWJmNDJpMmZxMGJreQ==">
                <BiLogoInstagramAlt className="connect1"/>
              </a>
              <a href="https://github.com/SMRAJESH2002?tab=repositories"><FaGithub  className="connect1"/></a>
              <a href="https://www.linkedin.com/in/rajesh-s-a59b34227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin className="connect1"/></a>
            </section>
            <section className="portfolio_name" data-aos="fade-right" data-aos-duration="1000">
              <p className="portfolio_name1">Hello, I'm</p>
              <p className="portfolio_name2">RAJESH S</p>
              <p className="portfolio_name3">
                <Typewriter
                  options={{
                    strings: ["Front-End Developer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </p>
              <div>
              <button className="portfolio_nextbtn"><a href="#about">About</a></button> 
              </div>
              <a href="#about" className="portfolio_nextmouse animate__animated animate__shakeY animate__infinite infinite">
                <BsMouse />
              </a>
              <Mailto secure={true} to="rajeshsm07012002gmail.com" subject="Contact To Connect" body={['Contact From Portfolio'].join('\n')}>
                <p className="portfolio_homemail">rajeshsm07012002gmail@gmail.com</p>
              </Mailto>
              <section className={`porfolio_navbar_mobile_module ${this.state.value === true ? "mobile_module_down" : "porfolio_navbar_mobile_module"}`}>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skill">Skills</a>
              <a href="#project">Projects</a>
              <a href="#contact">Contact</a>
              </section>
            </section>
            <section className="portfolio_profile">
              <div className="pro1 animate__animated animate__zoomIn"></div>
              <div className="pro2 animate__animated animate__zoomIn"></div>
              <div className="pro3 animate__animated animate__zoomIn"></div>
              <div className="pro4 animate__animated animate__zoomIn"></div>
              <div className="pro5 animate__animated animate__zoomIn">
                <img src={profile} className="portfolio_pic"></img>
              </div>
              <img src={frag_start} className="frag_start animate__animated animate__backInLeft"></img>
              <img src={frag_end} className="frag_end animate__animated animate__backInRight"></img>
            </section>
          </div>
        </div>
        {/* About */}
        {/* nav bar */}
        <nav className="portfolio_navbar_sticky">
            <a style={{ fontSize: "24px", fontWeight: "800" }}>
              <FaLessThan />
              Portfolio/
              <FaGreaterThan />
            </a>
            <section className="portfolio_navbar_module">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skill">Skills</a>
              <a href="#project">Projects</a>
              <a href="#contact">Contact</a>
            </section>
            <button onClick={this.navchange1} className="portfolio_navbtn">
              <RxHamburgerMenu />
            </button>
            <section className={`porfolio_navbar_mobile_module1 ${this.state.value1 === true ? "porfolio_navbar_mobile_module1" : "mobile_module_down1"}`}>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skill">Skills</a>
              <a href="#project">Projects</a>
              <a href="#contact">Contact</a>
            </section>
          </nav>
        <div className="portfolio_about" id="about">
          <section className="portfolio_about_section1">
                  <img src={about_1} className="portfolio_about_pic1" data-aos="fade-right" data-aos-duration="1000"></img>
                  <div className="portfolio_about_1" data-aos="fade-right" data-aos-duration="1000"></div>
                  <div className="portfolio_about_2" data-aos="fade-right" data-aos-duration="1000"></div>
          </section>
          <section className="portfolio_about_section2" data-aos="fade-up" data-aos-duration="1000">
                  <p className="portfolio_about_section2_heading">About Me</p>
                  <p className="portfolio_about_name"><span style={{color:"black",fontWeight:"800"}}>I'm</span><span style={{color:"var(--red)",fontWeight:"800"}}> RAJESH S</span></p>
                  <p style={{marginBottom:"8px"}}><span style={{color:"black",fontSize:"28px",fontWeight:"800"}}>Front-End</span><span style={{color:"var(--red)",fontSize:"32px",fontWeight:"800"}}> Developer</span></p>
                  <p className="portfolio_about_section2_passage">Hi! My name is RAJESH S. I am Front-End Developer, and I'm very passionate and dedicated to my work.</p>
                  <p className="portfolio_about_section2_passage">As a fresher of Front-End Developement, I have acquired the skills and knowledge necessary to make your project a success.</p>
                  {/* <a download="https://drive.google.com/file/d/1eEqA3RDcqdA6VQIPm3fBVFCdeGzFhhSk/view?usp=sharing" href=""><button>Download CV</button></a>  */}
                  <button className="portfolio_about_section2_button" onClick={()=>{resumeDownload(PDF)}}>Download CV <BsDownload/></button>
          </section>
          <section className="portfolio_about_section3">
                  <img src={about_2} className="portfolio_about_pic2" data-aos="fade-left" data-aos-duration="1000"></img>
                  <div className="portfolio_about_3" data-aos="fade-left" data-aos-duration="1000"></div>
          </section>
        </div>
        {/* education */}
        <section className="portfolio_education">
          <p className="portfolio_about_section2_heading">Know More</p>
          <p className="portfolio_about_section2_passage">I enjoy every step of the design process, from discussion and collaboration to concept and execution</p>
          <img src={Pencil} className="portfolio_education_pencil" alt="skill"/>
          <div className="portfolio_education_content">
            <p className="portfolio_education_heading">Education</p>
            <div className="education_square1" data-aos="fade-left" data-aos-duration="1000"></div>
            <div className="education_square2" data-aos="fade-right" data-aos-duration="1000"></div>
            <section className="education_content1" data-aos="fade-up" data-aos-duration="1000">
              <p className="education_degree"><IoSchool className="education_degree_icon"/>&nbsp;&nbsp;Bachelor's in Computer Science - <span style={{color:"var(--red)"}}>( 2019 - 2022 )</span></p>
              <p className="education_name">Sri Ramasamy Naidu Memorial College, Sattur.</p>
              <p className="education_name">CGPA - 7.58</p>
            </section>
            <section className="education_content1" data-aos="fade-up" data-aos-duration="1000">
              <p className="education_degree"><IoSchool className="education_degree_icon"/>&nbsp;&nbsp;Higher Secondary Certificate - <span style={{color:"var(--red)"}}>2019</span></p>
              <p className="education_name">Goverment Hr Sec School, Mutharpatti.</p>
              <p className="education_name">Percentage - 50%</p>
            </section>
            <section className="education_content1" data-aos="fade-up" data-aos-duration="1000">
              <p className="education_degree"><IoSchool className="education_degree_icon"/>&nbsp;&nbsp;Secondary School Leaving Certificate - <span style={{color:"var(--red)"}}>2017</span></p>
              <p className="education_name">Goverment Hr Sec School, Mutharpatti.</p>
              <p className="education_name">Percentage - 64%</p>
            </section>
          </div>
          <div className="portfolio_education_content">
          <p className="portfolio_education_heading">Certification</p>
          <section className="education_content1" data-aos="fade-up" data-aos-duration="1000">
              <p className="education_degree"><TbCertificate className="education_degree_icon"/>&nbsp;&nbsp;Frontend Development - <span style={{color:"var(--red)"}}>( May-2023 - Nov-2023 )</span></p>
              <p className="education_name">Login 360, Chennai.</p>
            </section>
            <section className="education_content1" data-aos="fade-up" data-aos-duration="1000">
              <p className="education_degree"><TbCertificate className="education_degree_icon"/>&nbsp;&nbsp;Workshop on React.Js - <span style={{color:"var(--red)"}}> Nov-2023 </span></p>
              <p className="education_name">Code Purple.</p>
            </section>
            
          </div>
        </section>
        {/* Skills */}
        <div className="portfolio_skill" id="skill">
          <section className="portfolio_skill_section_1" data-aos="fade-up" data-aos-duration="1000">
            <p className="portfolio_skill_section_heading">My Skills</p>
            <p className="portfolio_skill_section_passage1">You Can Imagine I Can Do</p>
            <p className="portfolio_skill_section_passage2">I designed a professional, visually sophisticated and technologically proficient, responsive and multi-functional creative personal resume portfolio template. And, I have designed a web pages in HTML, CSS, JAVASCRIPT, BOOTSTRAP and REACT.JS with responsive pages.</p>
          </section>
          <section className="portfolio_skill_section_2" data-aos="fade-up" data-aos-duration="1000">
            <section className="progress_name"><span>HTML</span><span>80%</span></section><br/>
            <progress value="80" max="100"/><br/>
            <section  className="progress_name"><span>CSS</span><span>77%</span></section><br/>
            <progress value="77" max="100"></progress><br/>
            <section  className="progress_name"><span>JAVASCRIPT</span><span>72%</span></section><br/>
            <progress value="72" max="100"></progress><br/>
            <section  className="progress_name"><span>BOOTSTRAP</span><span>80%</span></section><br/>
            <progress value="80" max="100"></progress><br/>
            <section  className="progress_name"><span>REACT</span><span>70%</span></section><br/>
            <progress value="70" max="100"></progress><br/>
            <section  className="progress_name"><span>RESPONSIVE WEB DESIGN</span><span>82%</span></section><br/>
            <progress value="82" max="100"></progress>
          </section>
          </div>
          <section className="portfolio_skill_section_3">
            <div className="skill_card" data-aos="fade-up" data-aos-duration="1000"><img src={Skill1} alt="html" /></div>
            <div className="skill_card" data-aos="fade-up" data-aos-duration="1000"><img src={Skill2} alt="css" /></div>
            <div className="skill_card" data-aos="fade-up" data-aos-duration="1000"><img src={Skill3} alt="bootstrap" /></div>
            <div className="skill_card" data-aos="fade-up" data-aos-duration="1000"><img src={Skill4} alt="javascript" /></div>
            <div className="skill_card" data-aos="fade-up" data-aos-duration="1000"><img src={Skill5} alt="react" /></div>
            <div className="skill_card" data-aos="fade-up" data-aos-duration="1000"><img src={Skill6} alt="figma" /></div>
          </section>
        {/* projects */}
        <div className="portfolio_projects" id="project">
          <p className="portfolio_projects_heading">My Projects</p>
          <section className="portfolio_button">
            <a className="portfolio_button_sub">All</a>
            <a className="portfolio_button_sub">Html & Css</a>
            <a className="portfolio_button_sub">Javascript</a>
            <a className="portfolio_button_sub">React</a>
          </section>
          <div className="portfolio_projects_content">
            <section className="projects_content_card" data-aos="fade-up" data-aos-duration="1000">
              <img src={Mahindra} alt="MAHINDRA"/>
              <div className="projects_content_card_hover">
                <MdOutlineCookie className="projects_content_card_icon"/>
                <p>Mahindra-Clone-Website</p>
                <a href="https://smrajesh2002.github.io/Mahindra/" className="projects_content_card_link">link..<LuLink /></a>
              </div>
            </section>
            
            <section className="projects_content_card" data-aos="fade-up" data-aos-duration="1000">
              <img src={Weather} alt="weather"/>
              <div className="projects_content_card_hover">
                <WiBarometer className="projects_content_card_icon"/>
                <p>Weather Application</p>
                <a href="https://thriving-alpaca-8b5a38.netlify.app" className="projects_content_card_link">link..<LuLink /></a>
              </div>
            </section>
            <section className="projects_content_card" data-aos="fade-up" data-aos-duration="1000">
              <img src={Crud} alt="crud"/>
              <div className="projects_content_card_hover">
                <BsFillClipboard2DataFill className="projects_content_card_icon"/>
                <p>CRUD Application</p>
                <a href="https://euphonious-torte-e6397e.netlify.app" className="projects_content_card_link">link..<LuLink /></a>
              </div>
            </section>
            <section className="projects_content_card" data-aos="fade-up" data-aos-duration="1000">
              <img src={Calc} alt="calculator"/>
              <div className="projects_content_card_hover">
                <CiCalculator2 className="projects_content_card_icon"/>
                <p>Calculator</p>
                <a href="https://smrajesh2002.github.io/calculator/" className="projects_content_card_link">link..<LuLink /></a>
              </div>
            </section>
          </div>
        </div>
        {/* quotes */}
        <div className="portfolio_quotes" data-aos="fade-up" data-aos-duration="1000">
          <h2 style={{color:"white",textAlign:"center"}}>Quotes</h2>
          <div className="slide_style1" data-aos="fade-left" data-aos-duration="1000"><RiDoubleQuotesR/></div>
          <div className="slide_style2" data-aos="fade-right" data-aos-duration="1000"><RiDoubleQuotesL/></div>
        <Slider {...settings} className="slide">
          <div className="slide_card">
                  <h3>Life is like riding a bicycle. To keep your balance, You must keep moving.</h3>
                  <p>- Albert Einstein.</p>
          </div>
          <div className="slide_card">
                  <h3>As a writer, you should not judge, you should understand.</h3>
                  <p>- Ernest Hemingway.</p>
          </div>
          <div className="slide_card">
            <h3>I measure the progress of a community with the degree of progress women have achieved.</h3>
            <p>- Dr.B.R. Ambedkar.</p>
          </div>
          <div className="slide_card">
            <h3>India happens to be a rich country inhabited by very poor people.</h3>
            <p>Manmohan Singh</p>
          </div>
          <div className="slide_card">
            <h3>Programming isn't about what you know: It's about what you can figure out.</h3>
          </div>
        </Slider>
      </div>
        {/* contact */}
        <div className="portfolio_contact" id="contact">
          <section className="contact_content1">
                  <p className="contact_content1_heading">Get In Touch</p>
                  <p className="contact_content1_heading_sub">Connect With Me</p>
                  <div className="content1_card">
                    <section className="content1_card1">
                      <p className="content1_card1_passage">Please fill out the form on this section to contact with me. Or Call between 9.00am to 8.00pm, Monday through Friday.</p>
                      <p className="contact_main_head"><span><FaPhoneVolume/></span>&nbsp;Call Me</p><span className="contact_main">+91 80987 33569</span>
                      <p className="contact_main_head"><span><BiLogoGmail/></span>&nbsp;E-Mail</p><span className="contact_main">rajeshsm07012002@gmail.com</span>
                      <div className="contact_style1 animate__animated animate__pulse" data-aos="fade-left" data-aos-duration="1000"></div>
                      <div className="contact_style2 animate__animated animate__rubberBand" data-aos="fade-right" data-aos-duration="1000"></div>
                    </section>
                    <section className="content1_card2">
                      <form onSubmit={(e)=>SendWhatsapp(e)}>
                      <input type="text" id="name" placeholder="Your Name" required/><br/>
                      <input type="email" placeholder="Your Email" required/><br/>
                      <input type="text" placeholder="Your Phone No" required/><br/>
                      <textarea rows="3" cols={12} placeholder="Message Here..."></textarea><br/>
                      <button type="submit">Send Via Whatspp&nbsp;<FaRegPaperPlane/></button>
                      </form>
                    </section>
                  </div>
          </section>
          <section className="contact_content2">
            <div className="content2_card">
            <a style={{ fontSize: "24px", fontWeight: "800" , color:"white"}}>
              <FaLessThan />
              Portfolio/
              <FaGreaterThan />
            </a>
            <section className="content2_connect">
            <span style={{color:"white", fontSize:"23px", fontWeight:"700"}}>Connect&nbsp;</span>
              <a href="https://github.com/SMRAJESH2002?tab=repositories"><FaGithub  className="connect"/></a>
              <Mailto secure={true} to="rajeshsm07012002@gmail.com" subject="Contact To Connect" body={['Contact From Portfolio'].join('\n')}><BiLogoGmail className="connect"/></Mailto>
              <a href="https://www.linkedin.com/in/rajesh-s-a59b34227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin className="connect"/></a>
            </section>
            </div>
            <div className="contact_style3">
            </div>
            <a href="#home">
              <div className="contact_style4">
              <BsChevronDoubleUp />
              </div>
              </a>
          </section>
        </div>
        <p style={{backgroundColor:"var(--black)",textAlign:"center",padding:"0.4rem",fontSize:"22px",fontWeight:"700",color:"var(--white)",borderTop:"1px solid var(--white)"}}>Designed By RAJESH S </p>
      </div>
    );
  }
}
