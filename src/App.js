import React, { Component } from 'react';
import './App.css';

import PropTypes from 'prop-types';
import People from './containers/People';
import { withStyles } from '@material-ui/core/styles';

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <section className={classes.peopleSection}>
          <People />
        </section>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    background: '#3a93f0'
  },
  peopleSection: {
    background: '#fff'
  }
});

export default withStyles(styles)(App);
