import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import userPic from "";
import './Testimonial.css'
import TestiMonialsDetails from './TestimonialsDetails';

const TestiMonial = () => {
  
    const testiMonials = [
        {
            name: 'Umamaheswari P',
            rating:'⭐⭐⭐⭐⭐ a year ago ',
            description: ' ❝ They make customized scientific laboratory glass wares.❞',
            address: 'USA',
            img: './Imagess/profile.jpg'
        },
        {
            name: 'Vasanth m',
            rating:'⭐⭐⭐⭐⭐ 5 years ago ',
            description: '❝ One stop shop for all the laboratory and scientific Equipments.❞',
            address: 'USA',
            img: 'https://i.ibb.co/z7Kp6yr/np-file-33188.jpg'
        },
        {
            name: 'Sreenivasan',
            rating:'⭐⭐⭐⭐⭐ 2 years ago ',
            description: '❝ Right place for Laboratory Instruments and Equipments.❞',
            address: 'USA',
            img: 'https://i.ibb.co/CP5sj7g/2856040-58866808-2560-1440.jpg'
        },
        {
            name: 'Sri',
            rating:'⭐⭐⭐⭐⭐ 6 months ago ',
            description: '❝ They make customized scientific laboratory glass wares and Equipments.❞',
            address: 'USA',
            img: 'https://i.ibb.co/10SYccm/1552313010-354215-noticia-normal.jpg'
        },
    ]
    //Owl Carousel Settings
    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    };
    return (
        // <section id="testimonial" className="testimonials pt-70 pb-70">
            <div className="container" data-aos="fade-up" data-aos-duration="1000">
                <br></br>
                <h1 className="miniTitle text-center">TESTIMONIALS</h1>
                <br></br>
                <div className="text-center ">
                    <h2 className="sectionTitle">What Our Clients are Saying?</h2>
                </div>
                {/* <p className="text-center ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p> */}
                <div className="row">
                    <div className="col-md-12">
                        <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                            {
                                testiMonials.length === 0 ?
                                    <div class="item">
                                        <div class="shadow-effect">
                                            {/* <img class="img-circle" src="./Slider Images/shoe.jpg" /> */}

                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                        </div>
                                        <div class="testimonial-name">
                                            <h5>Rajon Rony</h5>
                                            <small>ITALY</small>
                                        </div>
                                    </div> :
                                    testiMonials.map(testiMonialDetail => {
                                        return (
                                            <TestiMonialsDetails testiMonialDetail={testiMonialDetail} key={testiMonialDetail._key} />

                                        )
                                    })
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        // </section>
    );
};


export default TestiMonial;