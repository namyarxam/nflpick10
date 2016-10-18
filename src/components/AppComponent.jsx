import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const AppComponent = (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
} ;

AppComponent.propTypes = {
  children: PropTypes.element
};

export default AppComponent;
