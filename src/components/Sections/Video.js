import React from 'react';
import { HiOutlinePlay } from "react-icons/hi";
import './Video.css';

const Video = () => {
    return (
        <section className="video-section">
            <div className="container">
                <h5>Working since 1992</h5>
                <h1>We are leader <br /> in Car Mechanical Work</h1>
                <div className="video-box">
                    <div className="video-btn">
                        <HiOutlinePlay />
                    </div>
                    <div className="video-text">
                        <p>WATCH INTRO VIDEO <br /> ABOUT US</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Video;