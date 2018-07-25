import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

class SectionHeader extends Component {
  render() {
    const { classes } = this.props;
    return (
      <section>
        <Typography className={classes.header} variant="title" color="white">
          {this.props.header}
        </Typography>

        <Typography
          className={classes.subheader}
          variant="subheading"
          color="inherit"
        >
          {this.props.subheader}
        </Typography>
      </section>
    );
  }
}

SectionHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  subheader: PropTypes.string,
  header: PropTypes.string,
  color: PropTypes.string
};

SectionHeader.defaultPropTypes = {
  color: '#fff'
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
    marginBottom: theme.spacing.unit * 7,
    fontSize: '1.1rem',
    '@media screen and (min-width: 576px)': {
      fontSize: '1.25rem'
    },
    '@media screen and (min-width: 768px)': {
      fontSize: '1.41rem'
    },
    '@media screen and (min-width: 992px)': {
      fontSize: '1.575rem'
    }
  }
});

export default withStyles(styles)(SectionHeader);
