import React from 'react';
import { connect } from 'react-redux';
import Items from '../component/items';
import styles from './app.css';

function App(props) {
  return (
    <div className={styles.app}>
      <Items {...props} />
    </div>
  );
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
