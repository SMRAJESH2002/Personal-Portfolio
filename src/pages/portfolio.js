import {React, useEffect} from 'react';
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
import workOne from "../assets/img-1.jpg";
import workTwo from "../assets/img-2.jpg";
import workThree from "../assets/img-3.jpg";
import workFour from "../assets/img-4.jpg";
import workFive from "../assets/img-5.jpg";
import workSix from "../assets/img-6.jpg";

function Portfolio() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
    <section className="portfolio">
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
      </section>
    </>
  )
}

export default Portfolio