import {connect} from 'react-redux';
import React from 'react';
import HelloWorld from '../component/hello-world';

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(HelloWorld);
