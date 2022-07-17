import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
import { FaAccessibleIcon, FaBalanceScaleLeft, FaDribbble, FaHive, FaKeycdn, FaMandalorian } from "react-icons/fa";

const Service = () => {
    return (
        <section className="service-section">
            <div className="container">
                <div className="section-title">
                    <h2>Our Featured Services</h2>
                    <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>
                </div>
                <div className="card-container">
                    <div className="block-one">
                        <p>our service v1</p>
                        <h2>Performance Upgrade</h2>
                        <Link className='read-me' to='/'>Read more +</Link>
                        < FaAccessibleIcon className='icon'/>
                    </div>
                    <div className="block-one">
                        <p>our service v1</p>
                        <h2>Performance Upgrade</h2>
                        <Link className='read-me' to='/'>Read more +</Link>
                        <FaDribbble className='icon'/>
                    </div>
                    <div className="block-one">
                        <p>our service v1</p>
                        <h2>Performance Upgrade</h2>
                        <Link className='read-me' to='/'>Read more +</Link>
                        <FaHive className='icon'/> 
                    </div>
                    <div className="block-one">
                        <p>our service v1</p>
                        <h2>Performance Upgrade</h2>
                        <Link className='read-me' to='/'>Read more +</Link>
                        <FaKeycdn className='icon'/>
                    </div>
                    <div className="block-one">
                        <p>our service v1</p>
                        <h2>Performance Upgrade</h2>
                        <Link className='read-me' to='/'>Read more +</Link>
                        <FaMandalorian className='icon'/>
                    </div>
                    <div className="block-one">
                        <p>our service v1</p>
                        <h2>Performance Upgrade</h2>
                        <Link className='read-me' to='/'>Read more +</Link>
                        <FaBalanceScaleLeft className='icon'/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;