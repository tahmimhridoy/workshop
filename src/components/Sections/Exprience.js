import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../images/Exprience/image-1-1.jpg';
import image2 from '../../images/Exprience/image-2-1.jpg';
import './Exprience.css';

const Exprience = () => {
    return (
        <section className="exprience common-margin">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="img-box">
                            <img src={image1} alt="" />
                            <img src={image2} alt="" />
                            <div className="year">
                                <strong>24</strong><br />
                                year <br />
                                exprience
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="text-container">
                            <div className="text-title">
                                <h5>Welcome to Our workshop</h5>
                                <h2>We have 24 years experience</h2>
                            </div>
                            <div className="text">
                                <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touch points for offshoring.</p>
                                <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional click through from Dev Ops. Nanotechnology immersion along the information highway will close the loop on focusing.</p>
                                <Link to='/' className='common-btn'><span>About Us</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Exprience;