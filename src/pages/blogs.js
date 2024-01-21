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
import blogOne from "../assets/blog1.jpg";
import blogTwo from "../assets/blog2.jpg";
import blogThree from "../assets/blog3.jpg";
import blogFour from "../assets/blog4.jpg";
import blogFive from "../assets/blog5.jpg";
import blogSix from "../assets/blog6.jpg";

function Blogs() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      <section className="blogs">
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

      </section>
    </>
  )
}

export default Blogs