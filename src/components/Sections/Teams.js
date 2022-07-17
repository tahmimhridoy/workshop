import React from 'react';
import './Teams.css';

const Teams = ({team}) => {
    const {name, img, job} = team;
    return (
        <div className='team-single'>
            <img src={img} alt="" />
            <h5>{name}</h5>
            <p>{job}</p>
        </div>
    );
};

export default Teams;