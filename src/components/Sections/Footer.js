import React from 'react';
import './Footer.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaPaperPlane, FaFacebookF, FaGithub, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import logo from '../../images/dark_logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer'>
                <div className="contact-container">
                    <div className="container">
                        <div className="inner-container">
                            <div className="contact">
                                <div className="icon">
                                    <FaMapMarkerAlt />
                                </div>
                                <div className="text">
                                    <p>54B, Tailstoi Town 5238 MT,</p>
                                    <p>La city, IA 522364</p>
                                </div>
                            </div>
                            <div className="contact">
                                <div className="icon">
                                    <FaEnvelope />
                                </div>
                                <div className="text">
                                    <p>Email us :</p>
                                    <p>contact@example.com</p>
                                </div>
                            </div>
                            <div className="contact">
                                <div className="icon">
                                    <FaPhoneAlt />
                                </div>
                                <div className="text">
                                    <p>Call us on :</p>
                                    <p>+ 1800 456 7890</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                <div className="upper-footer">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="logo-text">
                                <img src={logo} alt="" />
                                <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide additional clickthroughs.</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="links">
                                <h5>Usefull Links</h5>
                                <Link className='page-link' to='/'>Home</Link>
                                <Link className='page-link' to='/about'>About</Link>
                                <Link className='page-link' to='/service'>Service</Link>
                                <Link className='page-link' to='/gellary'>Gellary</Link>
                                <Link className='page-link' to='/news'>News</Link>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="services">
                                <h5>Our Services</h5>
                                <p>Performance Upgrade</p>
                                <p>Transmission Services</p>
                                <p>Break Repair & Service</p>
                                <p>Engine Service & Repair</p>
                                <p>Tyre & Wheels</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="subscribe">
                                <h5>Newsletter</h5>
                                <p>Get latest updates and offers.</p>
                                <div className="group-input">
                                    <input type="email" placeholder='Enter your email'/>
                                    <FaPaperPlane className='paper-plane'/>
                                </div>
                                <ul className="social-container">
                                    <li><FaFacebookF /></li>
                                    <li><FaGithub /></li>
                                    <li><FaLinkedinIn /></li>
                                    <li><FaTiktok /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lower-footer py-4 d-flex justify-content-between">
                    <p>© Copyright Autorex 2022. All right reserved.</p>
                    <p>Created by ThemeArc</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;