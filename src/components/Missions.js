import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import './Missions.css';

class Missions extends React.Component {
  render() {
    return (
      <div id="missions" data-testid="missions">
        <Title headline="Missões" />
        {missions.map(
          (element) => (<MissionCard
            key={ element.name }
            name={ element.name }
            year={ element.year }
            country={ element.country }
            destination={ element.destination }
          />),
        )}
      </div>
    );
  }
}

export default Missions;
