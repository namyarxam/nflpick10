import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import HomeComponent from '../components/HomeComponent';

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

class HomeContainer extends Component {
  render() {
    return (
      <HomeComponent {...this.props} />
    );
  }
};

HomeContainer.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
