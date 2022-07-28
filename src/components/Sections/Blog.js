import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import './Blog.css';
import blog1 from '../../images/news-1.jpg';
import blog2 from '../../images/news-2.jpg';
import blog3 from '../../images/news-3.jpg';
import { Link } from 'react-router-dom';
import Appointment from './Appointment';

const Blog = () => {
    return (
        <section className="blog-section">
            <div className="container">
                <div className="blog-title">
                    <h2>Latest Blog & Articles</h2>
                    <Link to='/' className='blog-link'>View all blogs</Link>
                </div>
                <div className="blogs-card-container">
                    <div>
                        <div className="blogs-card">
                            <img src={blog1} alt="" />
                            <div className="blog-text">
                                <p>February 2, 2021 <span>Latest Blog</span></p>
                                <h5>Sixteen tips for fix and repairs for starting problem</h5>
                                <div className="arrow">
                                    <FaLongArrowAltRight />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="blogs-card">
                            <img src={blog2} alt="" />
                            <div className="blog-text">
                                <p>February 2, 2021 <span>Latest Blog</span></p>
                                <h5>What Soap Should Use <br /> for Washing</h5>
                                <div className="arrow">
                                    <FaLongArrowAltRight />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="blogs-card">
                            <img src={blog3} alt="" />
                            <div className="blog-text">
                                <p>February 2, 2021 <span>Latest Blog</span></p>
                                <h5>Low Hanging Fruit Two A <br /> Identify A Ballpark</h5>
                                <div className="arrow">
                                    <FaLongArrowAltRight />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Appointment />
        </section>
    );
};

export default Blog;