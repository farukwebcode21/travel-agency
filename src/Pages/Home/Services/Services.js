import React,{useState, useEffect} from 'react'
import Service from '../service/Service';
import './Services.css'


const Services = () => {
    const [servicess, setServices] = useState([]);

    useEffect(() => {
        fetch('/Services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    const handleBooking = (service) => {
        console.log(service.country);
    }

    return (
        <div className="container">
            <div className="mu-video">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="mu-video-area">
                            <h2>Our Featured Toures</h2>
                            <p className="mu-title-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui perferendis tenetur, blanditiis quia quibusdam voluptates iure, accusamus quis</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mu-featured-tours">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="mu-featured-tours-area">
                            <div className="mu-featured-tours-content">
                                <div className="row">
                                    {
                                        servicess.map(service => <Service
                                            key={service.key} service={service}
                                            handleBooking={handleBooking}
                                        />)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
