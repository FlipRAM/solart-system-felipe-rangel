import React from 'react';
import PropType from 'prop-types';
import './MissionCard.css';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="mission-card" data-testid="mission-card">
        <p data-testid="mission-name">{`Nome da Missão: ${name}`}</p>
        <p data-testid="mission-year">{`Ano: ${year}`}</p>
        <p data-testid="mission-country">{`País: ${country}`}</p>
        <p data-testid="mission-destination">{`Destino: ${destination}`}</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropType.string.isRequired,
  year: PropType.string.isRequired,
  country: PropType.string.isRequired,
  destination: PropType.string.isRequired,
};

export default MissionCard;
