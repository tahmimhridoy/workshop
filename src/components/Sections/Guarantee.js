import React from 'react';
import './Guarantee.css';
import { FaCarSide, FaRecycle, FaUserSecret } from "react-icons/fa";

const Guarantee = () => {
    return (
        <section className="guarantee-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 my-5">
                        <div className="guarantee-text">
                            <h2><span>100%</span> <br /> Satisfaction Guarantee</h2>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="guarantee-card">
                            <FaUserSecret className='guarantee-icon'/>
                            <h5>Quality Support</h5>
                            <p>Our Repair Services offers quality help programs for any vehicles that permit them to consistently.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 my-5">
                        <div className="guarantee-card">
                            <FaCarSide className='guarantee-icon'/>
                            <h5>All Car Makes</h5>
                            <p>Our Repair Services offers quality help programs for any vehicles that permit them to consistently.</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="guarantee-card">
                            <FaRecycle className='guarantee-icon'/>
                            <h5>Variety Services</h5>
                            <p>Our Repair Services offers quality help programs for any vehicles that permit them to consistently.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Guarantee;