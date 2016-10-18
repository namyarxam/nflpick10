import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import StandingsComponent from '../components/StandingsComponent';

const mapStateToProps = (state) => {
  return {
    state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  };
};

class StandingsContainer extends Component {
  render() {
    return (
      <StandingsComponent {...this.props} />
    );
  }
};

StandingsContainer.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(StandingsContainer);


