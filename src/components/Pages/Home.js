import React from 'react';
import Banner from '../Sections/Banner';
import Exprience from '../Sections/Exprience';
import QualityService from '../Sections/QualityService';
import Service from '../Sections/Service';

const Home = () => {
    return (
        <div>
            <Banner />
            <Exprience />
            <Service />
            <QualityService />
        </div>
    );
};

export default Home;