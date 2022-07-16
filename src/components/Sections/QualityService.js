import React from 'react';
import tire from '../../images/image-3-1.jpg';
import './QualityService.css';


const QualityService = () => {
    return (
        <div className="quality-service">
            <div className="quality-container">
                <div className="text-content">
                    <h1>Quality Service And Customer Satisfaction !!</h1>
                    <p>We utilize the most recent symptomatic gear to ensure your vehicle is fixed or adjusted appropriately and in an opportune manner. We are an individual from Professional Auto Service, a first class execution arrange, where free assistance offices share shared objectives of being world-class car administration focuses.
</p>
                </div>
                <div className="img-content">
                    <img className='img-fluid' src={tire} alt="" />
                </div>
            </div>
        </div>
    );
};

export default QualityService;