import React from 'react';
import Banner from '../Sections/Banner';
import ChooseUs from '../Sections/ChooseUs';
import Exprience from '../Sections/Exprience';
import QualityService from '../Sections/QualityService';
import Service from '../Sections/Service';
import Team from '../Sections/Team';
import Video from '../Sections/Video';

const Home = () => {
    return (
        <div>
            <Banner />
            <Exprience />
            <Service />
            <QualityService />
            <ChooseUs />
            <Video />
            <Team />
        </div>
    );
};

export default Home;