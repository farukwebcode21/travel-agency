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
                                        <p>Travel Leaders travel agents will take the time to understand your unique travel interests and aspirations, until we "get you.</p>
                                        <p>We then use our education, first-hand travel experience and relationships with airlines, car, hotel, resort, tour and cruise supplier partners to make sure you enjoy an exceptional personalized travel experience that will create memories to last a lifetime.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row border shadow my-3 py-3">
                    <div className="col-lg-12">
                        <div className="mu-why-us-area">
                            <h2>Why us ?</h2>
                            <div className="mu-why-us-content">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="mu-why-us-single">
                                            <div className="my-why-us-single-icon">{bed}</div>
                                            <h3>Luxurious Hotels</h3>
                                            <p>If you desire an all five-star service and experience, staying in a luxury hotel</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="mu-why-us-single">
                                            <div className="my-why-us-single-icon">{plane }</div>
                                            <h3>Unique Experience</h3>
                                            <p>Another way to say Unique Experience? Synonyms for Unique Experience</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="mu-why-us-single">
                                            <div className="my-why-us-single-icon">{thumbsup }</div>
                                            <h3>The Best Service</h3>
                                            <p>Great customer service means following best practices like valuing customers’ time</p>
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
