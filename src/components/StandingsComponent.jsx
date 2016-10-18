import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const StandingsComponent = (props) => {
  return (
    <section className='view home'>
      <div className='home__background' style={{backgroundImage: 'url(../images/fieldball.jpg)', backgroundPosition: '36% center'}} />
      <div className='home__content home__content--flex'>
        <h1 className='block__title block__title--centered block__title--white' >
          Standings
        </h1>
      </div>
    </section>
  );
} ;

StandingsComponent.propTypes = {
  children: PropTypes.element
};

export default StandingsComponent;
