import React from 'react'
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {key, country, day, descrip, img, price } = props.service;

    return (
        <div className="col-lg-4">
            <img className="trip-img" src={img} alt=""/>
            <div className="mu-featured-tours-single-info">
                <h3>{country }</h3>
                    <h4>{ day }</h4>
                    <span className="mu-price-tag">{ price }</span>
                    <p>{ descrip }</p>
                    <Link to={`/book/${key}`}>
                        <button className="mu-book-now-btn btn btn-outline-secondary">Book Now</button>
                    </Link>
            </div>
        </div>
    )
}

export default Service
