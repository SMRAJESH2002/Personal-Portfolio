import React from "react";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaBlog,
  FaAddressBook,
  FaDownload,
  FaGraduationCap,
  FaLaptopCode,
  FaRedo,
  FaCalendar,
  FaLink,
  FaMapMarkedAlt,
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin
} from "react-icons/fa";
import profilePicture from "../assets/picture.png";
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import reactIcon from "../assets/react.png";
import sassIcon from "../assets/sass.png";
import javascriptIcon from "../assets/javascript.png";
import bootstrapIcon from "../assets/bootstrap.png";
import workOne from "../assets/img-1.jpg";
import workTwo from "../assets/img-2.jpg";
import workThree from "../assets/img-3.jpg";
import workFour from "../assets/img-4.jpg";
import workFive from "../assets/img-5.jpg";
import workSix from "../assets/img-6.jpg";
import blogOne from "../assets/blog1.jpg";
import blogTwo from "../assets/blog2.jpg";
import blogThree from "../assets/blog3.jpg";
import blogFour from "../assets/blog4.jpg";
import blogFive from "../assets/blog5.jpg";
import blogSix from "../assets/blog6.jpg";
import "./content.css";

function Content() {
  return (
    <div>
      {/* navbar section starts */}
      <div>
        <nav className="navbar cursorPointer">
          <a>
            {" "}
            <i>
              {" "}
              <FaHome />{" "}
            </i>{" "}
            <span> Home </span>{" "}
          </a>
          <a>
            {" "}
            <i>
              {" "}
              <FaUser />{" "}
            </i>{" "}
            <span> About </span>{" "}
          </a>
          <a>
            {" "}
            <i>
              {" "}
              <FaBriefcase />{" "}
            </i>{" "}
            <span> Portfolio </span>{" "}
          </a>
          <a>
            {" "}
            <i>
              {" "}
              <FaBlog />{" "}
            </i>{" "}
            <span> Blogs </span>{" "}
          </a>
          <a>
            {" "}
            <i>
              {" "}
              <FaAddressBook />{" "}
            </i>{" "}
            <span> Contact </span>{" "}
          </a>
        </nav>
      </div>
      {/* navbar section ends */}

      {/* home section starts */}
      {/* <section className="home">
        <div className="image">
          <img src={profilePicture} alt="profilePicture"/>
        </div>
        <div className="content">
          <h3> Hi, I Am Saravanan </h3>
          <span> Front-end developer </span>
          <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
          been the industry's standard dummy </p>
          <div className="aboutMeBtn">
          <a href="#" className="btn"> About Me <span> <FaUser className="userBtnIcon"/> </span> </a>
          </div>
        </div>
      </section> */}
      {/* home section ends */}

      {/* about section starts */}
      {/* <section className="about">
        <h1 className="heading">
          {" "}
          about <span> me </span>{" "}
        </h1>
        <div className="row">
          <div className="info-container">
            <h1> personal info </h1>
            <div className="box-container">
              <div className="box">
                <h3> <span> Name : </span>  Saravanan </h3>
                <h3> <span> Age : </span> 23 </h3>
                <h3> <span> Email : </span> Saravana0@pmail.com </h3>
                <h3>
                  {" "}
                  <span> Address : </span>
                   Guduvancheri, Kanchipuram District, Chennai - 603203{" "}
                </h3>
              </div>
              <div className="box">
                <h3> <span> Freelance : </span> Available </h3>
                <h3> <span> Skill : </span> Front-End Developer </h3>
                <h3> <span> Experience : </span> 1 Year </h3>
                <h3> <span> Language : </span> Tamil, English </h3>
              </div>
            </div>
            <div className="aboutMeBtn">
              <a href="#" className="btnAbout">
                {" "}
                Download CV{" "}
                <span>
                  {" "}
                  <FaDownload className="downloadBtnIcon" />{" "}
                </span>{" "}
              </a>
            </div>
          </div>
          <div className="count-container">
            <div className="box">
              <h3> 1 </h3>
              <p> Year Of Experience </p>
            </div>

            <div className="box">
              <h3> 3 </h3>
              <p> Months Of Internship </p>
            </div>

            <div className="box">
              <h3> 20+ </h3>
              <p> Projects Completed </p>
            </div>

            
          </div>
        </div>
      </section> */}
      {/* about section ends */}

      {/* skills section starts */}
      {/* <section className="skills">
        <h1 className="heading"> <span> My </span> Skills </h1>
        <div className="box-container">
          <div className="box">
            <img src={htmlIcon} alt="htmlIcon"/>
            <h3> html </h3>
          </div>
          <div className="box">
            <img src={cssIcon} alt="cssIcon"/>
            <h3> css </h3>
          </div>
          <div className="box">
            <img src={javascriptIcon} alt="javascriptIcon"/>
            <h3> javascript </h3>
          </div>
          <div className="box">
            <img src={bootstrapIcon} alt="bootstrapIcon"/>
            <h3> bootstrap </h3>
          </div>
          <div className="box">
            <img src={reactIcon} alt="reactIcon"/>
            <h3> React </h3>
          </div>
          <div className="box">
            <img src={sassIcon} alt="htmlIcon"/>
            <h3> sass </h3>
          </div>

        </div>
      </section> */}
      {/* skills section ends */}

      {/* education section starts */}
      {/* <section className="education">
        <h1 className="heading"><span> my </span> education </h1>
        <div className="box-container"> 
          <div className="box">
            <i> <FaGraduationCap/> </i>
            <span> 2015 - 2016 </span>
            <h3> front-end developer </h3>
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
          been the industry's standard dummy </p>
          </div>

          <div className="box">
            <i> <FaGraduationCap/> </i>
            <span> 2016 - 2017 </span>
            <h3> front-end developer </h3>
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
          been the industry's standard dummy </p>
          </div>

          <div className="box">
            <i> <FaLaptopCode/> </i>
            <span> 2017 - 2018 </span>
            <h3> front-end developer </h3>
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
          been the industry's standard dummy </p>
          </div>

          <div className="box">
            <i> <FaLaptopCode/> </i>
            <span> 2018 - 2019 </span>
            <h3> front-end developer </h3>
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
          been the industry's standard dummy </p>
          </div>

        </div>

      </section> */}
      {/* education section ends */}

      {/* portfolio section starts */}
      {/* <section className="portfolio">
        <h1 className="heading"> <span> my </span> work </h1>
        <div className="box-container">

          <div className="box">
            <img src={workOne} alt="firstWork"/>
            <div className="content">
              <h3> Project 01 </h3>
              <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              <a href="#"> Read More </a>
            </div>
          </div>

          <div className="box">
            <img src={workTwo} alt="secondWork"/>
            <div className="content">
              <h3> Project 02 </h3>
              <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              <a href="#"> Read More </a>
            </div>
          </div>

          <div className="box">
            <img src={workThree} alt="thirdWork"/>
            <div className="content">
              <h3> Project 03 </h3>
              <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              <a href="#"> Read More </a>
            </div>
          </div>

          <div className="box">
            <img src={workFour} alt="fourthWork"/>
            <div className="content">
              <h3> Project 04 </h3>
              <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              <a href="#"> Read More </a>
            </div>
          </div>

          <div className="box">
            <img src={workFive} alt="fifthWork"/>
            <div className="content">
              <h3> Project 05 </h3>
              <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              <a href="#"> Read More </a>
            </div>
          </div>

          <div className="box">
            <img src={workSix} alt="sixthWork"/>
            <div className="content">
              <h3> Project 06 </h3>
              <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              <a href="#"> Read More </a>
            </div>
          </div>

        </div>
        <div className="loadingBtn">
        <a href="#" className="btnLoading"> Load More <span> <FaRedo className="downloadBtnIcon"/> </span> </a>
        </div>
      </section> */}
      {/* portfolio section ends */}

      {/* blogs section starts */}
      {/* <section className="blogs">
        <h1 className="heading"> <span> my </span> blogs </h1>
        <div className="box-container">

          <div className="box">
            <div className="image">
              <img src={blogOne} alt="blogOne"/>
            </div>
            <div className="content">
              <div className="icons">
                <a href="#"><i><FaCalendar/></i> 21st may, 2021 </a>
                <a href="#"><i><FaUser/></i> By Admin </a>
              </div>
              <h3> blog title goes here. </h3>
              <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              <div className="loadingBtn">
              <a href="#" className="btnReadMore"> Read More <span> <FaLink className="downloadBtnIcon"/> </span> </a>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src={blogTwo} alt="blogTwo"/>
            </div>
            <div className="content">
              <div className="icons">
                <a href="#"><i><FaCalendar/></i> 21st may, 2021 </a>
                <a href="#"><i><FaUser/></i> By Admin </a>
              </div>
              <h3> blog title goes here. </h3>
              <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              <div className="loadingBtn">
              <a href="#" className="btnReadMore"> Read More <span> <FaLink className="downloadBtnIcon"/> </span> </a>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src={blogThree} alt="blogThree"/>
            </div>
            <div className="content">
              <div className="icons">
                <a href="#"><i><FaCalendar/></i> 21st may, 2021 </a>
                <a href="#"><i><FaUser/></i> By Admin </a>
              </div>
              <h3> blog title goes here. </h3>
              <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              <div className="loadingBtn">
              <a href="#" className="btnReadMore"> Read More <span> <FaLink className="downloadBtnIcon"/> </span> </a>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src={blogFour} alt="blogFour"/>
            </div>
            <div className="content">
              <div className="icons">
                <a href="#"><i><FaCalendar/></i> 21st may, 2021 </a>
                <a href="#"><i><FaUser/></i> By Admin </a>
              </div>
              <h3> blog title goes here. </h3>
              <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              <div className="loadingBtn">
              <a href="#" className="btnReadMore"> Read More <span> <FaLink className="downloadBtnIcon"/> </span> </a>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src={blogFive} alt="blogFive"/>
            </div>
            <div className="content">
              <div className="icons">
                <a href="#"><i><FaCalendar/></i> 21st may, 2021 </a>
                <a href="#"><i><FaUser/></i> By Admin </a>
              </div>
              <h3> blog title goes here. </h3>
              <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              <div className="loadingBtn">
              <a href="#" className="btnReadMore"> Read More <span> <FaLink className="downloadBtnIcon"/> </span> </a>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src={blogSix} alt="blogSix"/>
            </div>
            <div className="content">
              <div className="icons">
                <a href="#"><i><FaCalendar/></i> 21st may, 2021 </a>
                <a href="#"><i><FaUser/></i> By Admin </a>
              </div>
              <h3> blog title goes here. </h3>
              <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              <div className="loadingBtn">
              <a href="#" className="btnReadMore"> Read More <span> <FaLink className="downloadBtnIcon"/> </span> </a>
              </div>
            </div>
          </div>
          

        </div>

      </section> */}
      {/* blogs section ends */}


      {/* contactUs section starts */}
      <section className="contact">
        <h1 className="heading"> contact  <span> me </span></h1>
        <div className="row">
          <div className="info-container">
            <h1> Get In Touch </h1>
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy 
              text of the printing and typesetting industry. </p>
            <div className="box-container">

              <div className="box">
                <i> <FaMapMarkedAlt/> </i>
                <div className="info">
                  <h3> Address </h3>
                  <p> Guduvancheri, Kancheepuram District, Chennai - 603203, Tamil Nadu, India </p>
                </div>
              </div>

              <div className="box">
                <i> <FaEnvelope/> </i>
                <div className="info">
                  <h3> Email </h3>
                  <p> Saravana0@protonmail.com </p>
                </div>
              </div>

              <div className="box">
                <i> <FaPhone/> </i>
                <div className="info">
                  <h3> Number </h3>
                  <p> +91-866-762-8833 </p>
                </div>
              </div>

            </div>

            <div className="share">
              <a href="#"> <FaFacebook className="mediaIcons"/> </a>
              <a href="#"> <FaTwitter className="mediaIcons"/> </a>
              <a href="#"> <FaInstagram className="mediaIcons"/> </a>
              <a href="#"> <FaLinkedin className="mediaIcons"/> </a>
            </div>

          </div>
          
          <form action="">

            <div className="inputBox">
              <input type="text" placeholder="your name"/>
              <input type="number" placeholder="your number"/>
            </div>

            <div className="inputBox">
              <input type="email" placeholder="your email"/>
              <input type="text" placeholder="your subject"/>
            </div>

            <textarea name=""  placeholder="your message" id="" cols="30" rows="10" />

            <input type="submit" value="Send Message" className="btn" />

          </form>

        </div>

      </section>
      {/* contactUs section ends */}

    </div>
  );
}

export default Content;
