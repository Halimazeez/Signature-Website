import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

class SectionHeader extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.headerContainer}>
        <Typography className={classes.header} variant="title">
          {this.props.title}
        </Typography>

        <Typography
          className={classes.subheader}
          variant="subheading"
          color="inherit"
        >
          {this.props.subheader}
        </Typography>
      </div>
    );
  }
}

SectionHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  subheader: PropTypes.string
};

const styles = theme => ({
  header: {
    fontWeight: 700,
    fontSize: '1.65rem',
    marginBottom: theme.spacing.unit * 3,
    '@media screen and (min-width: 768px)': {
      fontSize: '2.4rem'
    },
    '@media screen and (min-width: 576px)': {
      fontSize: '1.9rem'
    }
  },
  subheader: {
    fontWeight: 300,
    textAlign: 'center',
    margin: 'auto',
    textTransform: 'uppercase',
    marginBottom: theme.spacing.unit * 7,
    fontSize: '1.1rem',
    '@media screen and (min-width: 992px)': {
      fontSize: '1.575rem'
    },
    '@media screen and (min-width: 768px)': {
      fontSize: '1.41rem'
    },
    '@media screen and (min-width: 576px)': {
      fontSize: '1.25rem'
    },
    headerContainer: {
      margin: 'auto'
    }
  }
});

export default withStyles(styles)(SectionHeader);
