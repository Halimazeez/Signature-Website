import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

import People from './containers/People';
import Intro from './containers/Intro';
import Solutions from './containers/Solutions';
import Contact from './containers/Contact';
import Customers from './containers/Customers';
import Footer from './containers/Footer';
import theme from './theme';

import { MuiThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <section className={classes.introSection}>
            <Intro />
          </section>
          <section className={classes.solutionsSection}>
            <Solutions />
          </section>
          <section className={classes.peopleSection}>
            <People />
          </section>
          <section className={classes.contactSection}>
            <Contact />
          </section>
          <section className={classes.customersSection}>
            <Customers />
          </section>
          <section className={classes.footerSection}>
            <Footer />
          </section>
        </div>
      </MuiThemeProvider>
    );
  }
}

const styles = theme => ({
  root: {
    background: '#3a93f0'
  },
  introSection: {
    background: '#fff'
  },
  peopleSection: {
    background: '#fff'
  },
  customersSection: {
    background: '#fff'
  }
});

export default withStyles(styles)(App);
