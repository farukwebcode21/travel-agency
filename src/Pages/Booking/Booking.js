import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';

const Booking = () => {
    const { user } = useAuth();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`https://glacial-island-83833.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [serviceId])

    return (
        <div className="container">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="mu-about-area">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="mu-about-left">
                                        <img className="img" src={service.img} alt="img"/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="mu-about-right">
                                        <h2 className="about-agency">{service.country}</h2>
                                        <h4>{service.day}</h4>
                                        <p>{service.descrip}</p>
                                        <h3>{service.price }</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="add-service">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="name" defaultValue={user?.displayName} {...register("name")} />
                        <input type="email" defaultValue={user?.email} {...register("email")} />
                        <input teype="text" {...register("address")} placeholder="House:36/11, Pabna sadar, Pabna"/>
                        <input className="btn btn-primary" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Booking
