import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import AddViewPicksComponent from '../components/AddViewPicksComponent';

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

class AddViewPicksContainer extends Component {
  render() {
    return (
      <AddViewPicksComponent {...this.props} />
    );
  }
};

AddViewPicksContainer.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(AddViewPicksContainer);


