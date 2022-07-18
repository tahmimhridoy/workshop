import React from 'react';
import './Repire.css';

const Repire = () => {
    return (
        <section className="repire-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="repire-title">
                            <h2>Car Repair Estimator</h2>
                            <p>Get a estimate according your car condition</p>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="form-container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <select>
                                        <option selected>Hyundia</option>
                                        <option value="1">Hero</option>
                                        <option value="2">Royal</option>
                                        <option value="3">Toyota</option>
                                    </select>
                                </div>
                                <div className="col-lg-6">
                                    <select>
                                        <option selected>Cherokee</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <select>
                                        <option selected>2022</option>
                                        <option value="1">2021</option>
                                        <option value="2">2020</option>
                                        <option value="3">2018</option>
                                    </select>
                                </div>
                                <div className="col-lg-6">
                                    <select>
                                        <option selected>Tire</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                                <button className='get-btn'>GET ESTIMATE</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Repire;