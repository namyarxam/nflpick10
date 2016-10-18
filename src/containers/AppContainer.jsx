import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import AppComponent from '../components/AppComponent';

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

class AppContainer extends Component {
  render() {
    return (
      <AppComponent {...this.props} />
    );
  }
};

AppContainer.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);


