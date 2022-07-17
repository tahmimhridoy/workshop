import React from 'react';
import Banner from '../Sections/Banner';
import ChooseUs from '../Sections/ChooseUs';
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
            <ChooseUs />
        </div>
    );
};

export default Home;