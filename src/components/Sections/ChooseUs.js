import React from 'react';
import './ChooseUs.css';
import { FaBullhorn, FaMoneyCheckAlt, FaUserInjured, FaWrench } from "react-icons/fa";
import image_4 from '../../images/image-4.jpg';

const ChooseUs = () => {
    return (
        <section className="choose-us">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="choose-us-container">
                            <h2 className='cmn-h2'>Why Choose Us</h2>
                            <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation heading towards.</p>
                            <div className="icon-box">
                                <div className="start-icon">
                                    < FaUserInjured />
                                </div>
                                <h4>Certified Expert Mechanics</h4>
                            </div>
                            <div className="icon-box">
                                <div className="start-icon">
                                    < FaWrench />
                                </div>
                                <h4>Fast And Quality Service</h4>
                            </div>
                            <div className="icon-box">
                                <div className="start-icon">
                                    < FaMoneyCheckAlt />
                                </div>
                                <h4>Best Prices in Town</h4>
                            </div>
                            <div className="icon-box">
                                <div className="start-icon">
                                    < FaBullhorn />
                                </div>
                                <h4>Awarded Workshop</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="additional-service-container">
                            <h2 className='cmn-h2'>Addtional Services</h2>
                            <div className="row mt-5">
                                <div className="col-lg-5">
                                   <img className='respon' src={image_4} alt="" /> 
                                </div>
                                <div className="col-lg-7">
                                    <ul className='facility'>
                                        <li>General Auto Repair & Maintenance</li>
                                        <li>Transmission Repair & Replacement</li>
                                        <li>Tire Repair and Replacement</li>
                                        <li>State Emissions Inspection</li>
                                        <li>Break Job / Break Services</li>
                                        <li>Electrical Diagnostics</li>
                                        <li>Fuel System Repairs</li>
                                        <li>Starting and Charging Repair</li>
                                        <li>Steering and Suspension Work</li>
                                        <li>Emission Repair Facility</li>
                                        <li>Wheel Alignment</li>
                                        <li>Computer Diagaonstic Testing</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChooseUs;