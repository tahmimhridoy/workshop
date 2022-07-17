import React, { useEffect, useState } from 'react';
import './Team.css';
import Teams from './Teams';

const Team = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch('team.json')
        .then(res => res.json())
        .then(data => {
            setTeams(data);
        })
    },[])
    return (
        <section className="our-team">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 team-title">
                        <h1>Our Team</h1>
                    </div>
                    <div className="col-lg-9 text">
                        <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
                    </div>
                </div>
                <div className="all-teams mt-3">
                        {
                            teams.map(team => <Teams
                            key={team.id}
                            team = {team}
                            ></Teams>)
                        }
                </div>
            </div>
        </section>
    );
};

export default Team;