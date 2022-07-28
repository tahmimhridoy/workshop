import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import './Appointment.css';

const Appointment = () => {
    return (
        <div className='appointment'>
            <div className="container">
                <div className="appointment-wrapper">
                    <div className="row">
                        <div className="col-lg-6">
                            <h2>Schedule Your Appointment Today</h2>
                            <p>Your Automotive Repair & Maintenance Service Specialist</p>
                        </div>
                        <div className="col-lg-3">
                            <h1 className='phone'>1800.456.7890</h1>
                        </div>
                        <div className="col-lg-3 book-appointment">
                            <button className='book'>Appointment <FaLongArrowAltRight /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;