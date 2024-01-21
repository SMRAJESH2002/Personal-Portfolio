import {React, useEffect, useRef } from 'react';
import {
  FaMapMarkedAlt,
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaThumbsUp
} from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function Contact() {

  const form = useRef();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

   //Convert the first letter into the Caps
    const userNameFirstLetter = e.target[0].value.charAt(0).toUpperCase() + e.target[0].value.slice(1);
    e.target[0].value = userNameFirstLetter;

    if((e.target[0].value && e.target[2].value && e.target[3].value && e.target[4].value) === "") {
      toast.warn(<p className='toastMessageStyle'> 🔊 Please  Fill ✍️ All The 
      Fields 😨😱 , Thank You 😉🤗👍 </p>);
      return
    }
      
  // Sending Email using emailjs library ........
    emailjs.sendForm('service_qxruj7l', 'template_faqvc2i', form.current, 'j8ofzcrEGYfHxaI3t')
      .then((result) => {
        console.log(result.text);
        // toast.success(<p className='toastMessageStyle'> Thank You 🚀😊🤝 , i will contact 
        // to you ASAP ✌️👍  </p>);
      }, (error) => {
          console.log(error.text);
          toast.error(<p className='toastMessageStyle'> {error.text} </p>);
      });

      toast.success(<p className='toastMessageStyle'> Thank You 🚀😊🤝 , i will contact 
      to you ASAP ✌️👍  </p>);

      e.target.reset();
  };

  return (
    <>
      <section className="contact">
        <h1 className="heading"> contact  <span> me </span></h1>
        <div className="row">
          <div className="info-container">
            <h1> Get In Touch </h1>
            <p> If you want to get in touch with me, the best way is to send me an email at the below email Id. I check my 
            email regularly, and I'll get back to you as soon as possible. </p>
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
                  <p> rajesh07012002@gmail </p>
                </div>
              </div>

              <div className="box">
                <i> <FaPhone/> </i>
                <div className="info">
                  <h3> Number </h3>
                  <p> +91-809-873-3569 </p>
                </div>
              </div>

            </div>

            <div className="share">
              <a href="#"> <FaFacebook className="mediaIcons"/> </a>
              <a href="#"> <FaTwitter className="mediaIcons"/> </a>
              <a href="#"> <FaInstagram className="mediaIcons"/> </a>
              <a href="https://www.linkedin.com/in/rajesh-s-a59b34227/" target="_blank"> <FaLinkedin className="mediaIcons"/> </a>
              <a href="https://github.com/smrajesh2002" target="_blank"> <FaGithub className="mediaIcons"/> </a>
            </div>

          </div>
          
          <form ref={form} onSubmit={sendEmail}>

            <div className="inputBox">
              <input type="text" name="user_name" placeholder="your name" />
              <input type="number" name="mobile_no" placeholder="your number"/>
            </div>

            <div className="inputBox">
              <input type="email" name="user_email" placeholder="your email"/>
              <input type="text" name="subject" placeholder="your subject"/>
            </div>

            <textarea name="message"  placeholder="your message" id="" cols="30" rows="10" />

            <input type="submit" value="Send Message" className="btn" />

          </form>

        </div>

      </section>
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark" 
      />
    </>
  )
}

export default Contact