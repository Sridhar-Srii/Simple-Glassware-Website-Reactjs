




import { NavLink } from "react-router-dom";
import "./Contact.css"
import { useState } from "react";

function Contact () {



  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };








    return (
        <div>



  {/* Navbar starts */}

  <nav className="nav fixed-top">
                    <a href="#" className="nav__brand">
                        New Venus Industries
                    </a>
                <ul className={active}>
                        <li className="nav__item">
                        <NavLink  to="/"><a className="nav__link">Home</a></NavLink>

                        </li>

                        <li className="nav__item">
                        <NavLink  to="/about"><a className="nav__link">About Us</a></NavLink>

                        </li>

                        <li className="nav__item">
                        {/* <a href="#" className="nav__link">
                            Products
                        </a> */}

                        <a class="dropdown-toggle nav__link" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Products</a>
                        <ul class="dropdown-menu">

                          <li>
                            <NavLink  to="/laboratory"><a class="dropdown-item">Laboratory Glasswares</a></NavLink>
                          </li>
                          <li>
                            <NavLink  to="/petroleum"><a class="dropdown-item">Petroleum Glasswares</a></NavLink>
                          </li>                       
                          <li>
                            <NavLink  to="/distillation"><a class="dropdown-item">Distillation & Pilot Plants</a></NavLink>
                          </li>
                          <li>
                            <NavLink  to="/orsat"><a class="dropdown-item">Orsat & Gas Purity Testing Apparatus</a></NavLink>
                          </li>
                          <li>
                            <NavLink  to="/pressure"><a class="dropdown-item">Pressure Vacuum Measuring Instruments</a></NavLink>
                          </li>
                          <li>
                            <NavLink  to="/engg"><a class="dropdown-item">Engineering & Diploma Lab Instruments</a></NavLink>
                          </li>
                          <li>
                            <NavLink  to="/general"><a class="dropdown-item">General Laboratory Instruments</a></NavLink>
                          </li>
                          <li>
                            <NavLink  to="/electro"><a class="dropdown-item">Electrochemical Cells</a></NavLink>
                          </li>
                          </ul>

                        </li>

                        {/* <li className="nav__item">
                        <a href="#" className="nav__link">
                            Enquiry
                        </a>
                        </li> */}

                        <li className="nav__item">
                        <a href="#" className="nav__link">
                            E-Catalog
                        </a>
                        </li>

                        <li className="nav__item">
                        <NavLink  to="/contact">
                        <a className="nav__link">
                            Contact
                        </a>
                        </NavLink>
                        </li>

                        <ul>
                            <li className="nav-item">
                                <a class="nav-link active" href="#"><i class="fa fa-facebook"></i></a>
                                <a class="nav-link active" href="#"><i class="fa fa-instagram"></i></a>
                                <a class="nav-link active" href="#"><i class="fa fa-twitter"></i></a>  
                                <a class="nav-link active" href="#"><i class="fa fa-phone"></i></a>  
                            </li>                          
                        </ul>

                </ul>
     
                    <div onClick={navToggle} className={icon}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>

        </nav>

<br></br>
<br></br>

{/* Navbar ends */}









<section class="contact-page-sec" id="card">
    <div class="container">
      
              

      <div class="row" >
        <div class="col-md-8">

          <div class="contact-page-form">
            <h1>Contact Form</h1> 

         <form  id="form1" >
              <div class="row">

              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="single-input-field">
                  <input type="text" placeholder="Your Name" name="name" id="fname"/>
                </div>
              </div>  

              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="single-input-field">
                  <input type="email" placeholder="E-mail" name="email" id="email"/>
                </div>
              </div>   

              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="single-input-field">
                  <input type="text" placeholder="Phone Number" name="phone" id="phone"/>
                </div>
              </div>  


              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="single-input-field">
                  <input type="text" placeholder="Company" name="subject" id="subject"/>
                </div>
              </div>  

               <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="single-input-field">
                  <input type="text" placeholder="Fax" name="subject" id="subject"/>
                </div>
              </div>  

               <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="single-input-field">
                  <input type="text" placeholder="Address" name="subject" id="subject"/>
                </div>
              </div>   

              <div class="col-md-12 message-input">
                <div class="single-input-field">
                  <textarea  placeholder="Write Your Message" name="message" id="message"></textarea>
                </div>
              </div>   

              <div class="single-input-fieldsbtn">
                <input type="submit" value="Send Now"/>
              </div>                          
            </div>

        </form>  

          </div>      
        </div>

       <div className="col-md-4">

       <div class="card" id="cardbox">

        <div class="card-body" id="social">
            {/* <h5 class="card-title">Special title treatment</h5> */}
            <br></br>
            <ul className="social" >

                <li><i class="fa fa-map-marker" aria-hidden="true"> No.111, Kodambakkam Road Mettupalayam Chennai, Tamil Nadu 600033 India</i></li>
                <li><i class="fa fa-phone"></i> 044 2381 3819</li>
                <li><i class="fa fa-envelope"></i>  xyz@gmail.com</li>


            </ul>
        </div>

        </div>

       </div>

        <div class="col-md-12">        
          <div class="contact-page-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.11486062416!2d80.21771041482259!3d13.028356890818666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52666a3b499e4f%3A0x3b905a5a3995cb66!2sNEW%20VENUS%20INDUSTRIES!5e0!3m2!1sen!2sin!4v1683717303186!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>          
        </div>  

      </div>
    </div>
  </section>






{/* footer starts */}
             


<footer>
        <div class="footer-top">
            <div class="container" data-aos="fade-up" data-aos-duration="1500">
                <div class="footer-day-time">
                    <div class="row">
                        <div class="col-md-8">
                            <ul>
                                <li>Opening Hours : Mon - Sat : 9.00 AM - 5.30 PM</li>
                                {/* <li>Sunday: 8:00 AM - 12:00 PM</li> */}
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row">
                    {/* <div class="col-lg-4">
                        
                        <h4>About us</h4>
                        <p>New Venus Industries, Manufacturer of Scientific Laboratory equipment and customized research equipment were founded in the year 1977.</p>
                       
                        
                    </div> */}

                    <div class="col-lg-8">
                        <h4>Information</h4>
                        <ul class="address1">
                            <li><i class="fa fa-map-marker"></i>No.111, Kodambakkam Road
                            Mettupalayam
                            Chennai, Tamil Nadu 600033
                            India</li>
                            <li><i class="fa fa-mobile" aria-hidden="true"></i> <a href="tel:12 34 56 78 90"> 044 2381 3819</a></li> 
                            <li><i class="fa fa-envelope" aria-hidden="true"></i><a href="mailto:#">xyz@gmail.com</a></li>
                            {/* <li><i class="fa fa-map-marker"></i>14/9, Balasubramania Nagar, Perundurai, Road, Erode - 638011</li> */}

                        </ul>
                    </div>

                    <div class="col-lg-4">
                        <h4>Follow us</h4>
                        <ul class="social-icon">
                            <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                            {/* <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li> */}

                        </ul>
                    </div>

                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-sm-5 col-lg-5 col-md-8">
                        <p class="copyright text-uppercase">Copyright © Gomath Technologies 2023
                        </p>
                    </div>
                    {/* <div class="col-sm-7">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our services</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </div>
    </footer>


{/* footer ends */}





        </div>
    )
    
}

export default Contact;