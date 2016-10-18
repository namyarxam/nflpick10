import React, { PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';

const HomeComponent = (props) => {
  return (
    <section className='view home'>
      <div className='home__background' style={{backgroundImage: 'url(../images/fieldball.jpg)', backgroundPosition: '36% center'}} />
      <div className='home__content home__content--flex'>
        <div className='block text--centered ntp nb home__content__logo'>
          <a href="http://www.nfl.com/scores" target="_blank"><img className='nfl-logo' src='../favicon.ico' /></a>
          <h1 style={{marginTop: '0.5em', marginBottom: '-1em'}} className='block__title block__title--centered block__title--white' >
            NFL Pick 10
          </h1>
        </div>
        <div className='block stp nbp nb'>
          <Link style={{fontSize: '1.3em'}} to='/picks' className='btn btn--block btn--blue-bg lp'>Add / View Picks</Link>
        </div>
        <div className='block stp lbp nb'>
          <Link style={{fontSize: '1.3em'}} to='/standings' className='btn btn--block btn--white-bg btn--blue lp'>Standings</Link>
        </div>
        <div className='block ntp sbp nb home__content__link home__content__link--absolute'>
          <a style={{fontSize: '0.9em'}} href="http://www.github.com/namyarxam" target="_blank">made by github.com/namyarxam</a>
        </div>
      </div>
    </section>
  );
} ;

HomeComponent.propTypes = {};

export default HomeComponent;
