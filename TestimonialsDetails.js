import React from 'react';

const TestiMonialsDetails = ({testiMonialDetail}) => {
    const {name, address, rating,description} = testiMonialDetail;
    console.log("testiMonialDetail"+testiMonialDetail)
    return (
        <div class="item">
            <div class="shadow-effect">
                {/* <img class="img-circle" src={img} /> */}
                <p>{rating}</p>
                <p>{description}</p>
            </div>
            <div class="testimonial-name">
                <h4>{name}</h4>
                {/* <small>{address}</small> */}
            </div>
        </div>
    );
};

export default TestiMonialsDetails;