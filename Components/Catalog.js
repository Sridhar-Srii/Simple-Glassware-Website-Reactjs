import { useState } from "react";
import { NavLink } from "react-router-dom";
import venuslogo from "../Images/venuslogo.png"







function Catalog () {



    
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







    





 function Toggle(e) {


    // Show the div Content After Submitting the Form ;;

    document.getElementById("myform").addEventListener("submit", function (e) {
        e.preventDefault();

        var myDiv = document.getElementById("sri");
        myDiv.style.display = "block"
        myDiv.scrollIntoView();



    // After Submitting Empty the Input Fields ;;

    document.getElementById("exampleInputName1").value = "" ;
    document.getElementById("exampleInputEmail1").value = "" ;
    document.getElementById("exampleInputPhone1").value = "" ;

    })

   
    
 }

   






    return (

        <div id="card">




  {/* Navbar starts */}

  <nav className="nav fixed-top">
                    {/* <a href="#" className="nav__brand">
                        New Venus Industries
                    </a> */}
                    {/* <img src={venuslogo1} alt="..." className="nav__brand"></img> */}
                    <img src={venuslogo} alt="..." id="logo" className="nav__brand"></img>

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
                        {/* <a href="#" className="nav__link">
                            E-Catalog
                        </a> */}
                        <NavLink  to="/catalog"><a className="nav__link">E-Catalog</a></NavLink>
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

<h1 id="head" className="text-center">E-Catalog</h1>

        <form  name="myform" id="myform">

                <div class="mb-3">
                    <label for="exampleInputName1" class="form-label">Name</label>
                    <input type="text" class="form-control input" id="exampleInputName1" required></input>
                </div>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control input" id="exampleInputEmail1" aria-describedby="emailHelp" required></input>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div class="mb-3">
                    <label for="exampleInputPhone1" class="form-label">Phone Number</label>
                    <input type="number" class="form-control input" id="exampleInputPhone1" required></input>
                </div>
                
                <button type="submit" class="btn" id="submit" onClick={Toggle}>Submit</button>
        </form>

   
<br></br>             

        <div id="sri">
        <a href="https://www.africau.edu/images/default/sample.pdf" target="blank" id="catalog"><h1 className="text-center">Download E-Catalog</h1></a>
        </div>
        

<br></br>

        </div>










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

export default Catalog;