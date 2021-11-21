import React,{useState, useEffect} from 'react'
import Service from '../service/Service';
import './Services.css'


const Services = () => {
    const [servicess, setServices] = useState([]);

    useEffect(() => {
        fetch('https://glacial-island-83833.herokuapp.com/services')
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
                            <h2>Our Tour Package</h2>
                            <p className="mu-title-content">Enjoy our Cheap Holiday packages from Bangladesh and create your own most memorable moment and a trip to remember with Obokash Travel with your loved ones</p>
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
                                            key={service._id} service={service}
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
