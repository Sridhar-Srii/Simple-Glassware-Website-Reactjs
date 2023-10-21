

import Bennert from '../Images/Bennert.jpg'
import InclinedManometer from "../Images/InclinedManometer.jpg"
import ManometerBoardType from "../Images/ManometerBoardType.jpg"
import McleodGauge from "../Images/McleodGauge.jpg"
import UtubeManometer from "../Images/UtubeManometer.jpg"
import InclinedManometer01 from "../Images/InclinedManometer01.jpg"
import { useState } from 'react'
import { NavLink } from 'react-router-dom'



function PressureVacuumMeasuringInstruments () {


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

        <div id='card'>



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
                            <NavLink  to="/petroleum"><a class="dropdown-item">Petroleum Glassware Products</a></NavLink>
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


<div className="container">


    <h1 className='text-center' id='head' data-aos="fade-up" data-aos-duration="1500">Pressure Vacuum Measuring Instruments</h1>
    <br></br>

    <div class="row row-cols-1 row-cols-md-3 g-4">

            <div class="col"  data-aos="fade-up" data-aos-duration="1500">
            <div class="card h-100">
                <img src={Bennert} class="card-img-top" alt="..."></img>
                <div class="card-body">
                <h2 class="card-title text-center">Bennert / Code-1001</h2>
                {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                </div>
            </div>
            </div>

            <div class="col"  data-aos="fade-up" data-aos-duration="1500">
            <div class="card h-100">
                <img src={InclinedManometer} class="card-img-top" alt="..."></img>
                <div class="card-body">
                <h2 class="card-title text-center">InclinedManometer / Code-1002</h2>
                </div>
            </div>
            </div>

            <div class="col"  data-aos="fade-up" data-aos-duration="1500">
            <div class="card h-100">
                <img src={ManometerBoardType} class="card-img-top" alt="..."></img>
                <div class="card-body">
                <h2 class="card-title text-center">Manometer Board-Type / Code-1003</h2>
                
                </div>
            </div>
            </div>

            <div class="col"  data-aos="fade-up" data-aos-duration="1500">
            <div class="card h-100">
                <img src={McleodGauge} class="card-img-top" alt="..."></img>
                <div class="card-body">
                <h2 class="card-title text-center">Mcleod Gauge / Code-1004</h2>
               
                </div>
            </div>
            </div>

            <div class="col"  data-aos="fade-up" data-aos-duration="1500">
            <div class="card h-100">
                <img src={UtubeManometer} class="card-img-top" alt="..."></img>
                <div class="card-body">
                <h2 class="card-title text-center">U Tube Manometer / Code-1005</h2>
               
                </div>
            </div>
            </div>

            <div class="col"  data-aos="fade-up" data-aos-duration="1500">
            <div class="card h-100">
                <img src={InclinedManometer01} class="card-img-top" alt="..."></img>
                <div class="card-body">
                <h2 class="card-title text-center">Inclined Manometer 01 / Code-1006</h2>
               
                </div>
            </div>
            </div>




        </div>




<br></br>


    </div>


{/* container divv */}




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

export default PressureVacuumMeasuringInstruments;