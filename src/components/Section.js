import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

class Section extends Component {
  render() {
    const { classes } = this.props;
    return <div className={classes.sectionMain}>{this.props.children}</div>;
  }
}

Section.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  sectionMain: {
    padding: '0 15px',
    textAlign: 'center',
    width: '100%',
    margin: 'auto',
    minWidth: '320px',

    '@media screen and (min-width: 992px)': {
      maxWidth: 960
    },
    '@media screen and (min-width: 768px)': {
      maxWidth: 720
    },
    '@media screen and (min-width: 576px)': {
      maxWidth: 540
    },
    '@media screen and (min-width: 1200px)': {
      maxWidth: 1140
    }
  }
});

export default withStyles(styles)(Section);
