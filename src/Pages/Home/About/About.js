import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faPlane, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import aboutimg from '../../../Assets/About/about-video-bg.jpg';
import './About.css';

const bed = <FontAwesomeIcon icon={faBed} />
const thumbsup = <FontAwesomeIcon icon={faThumbsUp} />
const plane = <FontAwesomeIcon icon={faPlane} arial-hidden="true" />


const About = () => {
    return (
        <div className="container">
			<div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="mu-about-area">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="mu-about-left">
                                        <img className="img" src={aboutimg} alt="img"/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="mu-about-right">
                                        <h2 className="about-agency">About Our Agency</h2>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores architecto repellat laborum et dicta doloribus dolorem eius quidem tempora. Beatae fuga obcaecati </p>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores architecto repellat laborum et dicta</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="mu-why-us-area">
                            <h2>Why us ?</h2>
                            <div className="mu-why-us-content">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="mu-why-us-single">
                                            <div className="my-why-us-single-icon">{bed}</div>
                                            <h3>Luxurious Hotels</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis saepe magnam quo dolorem eveniet error quae omnis suscipit distinctio! Vitae necessitatibus</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="mu-why-us-single">
                                            <div className="my-why-us-single-icon">{plane }</div>
                                            <h3>Unique Experience</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis saepe magnam quo dolorem eveniet error quae omnis suscipit distinctio! Vitae necessitatibus</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="mu-why-us-single">
                                            <div className="my-why-us-single-icon">{thumbsup }</div>
                                            <h3>The Best Service</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis saepe magnam quo dolorem eveniet error quae omnis suscipit distinctio! Vitae necessitatibus</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
