import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class FooterButton extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.sectionFooter}>
        <Button className={classes.Button} variant="outlined">
          {this.props.buttontext}
        </Button>
      </div>
    );
  }
}

FooterButton.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  sectionFooter: {},
  Button: {
    padding: '.5rem 3rem',
    border: '2px solid transparent',
    borderRadius: '.75rem',
    color: '#3a93f0',
    borderColor: '#3a93f0',
    fontWeight: 400,
    fontSize: '1.15rem',
    lineHeight: '1.5',
    '&:hover': {
      color: '#fff',
      backgroundColor: '#3a93f0'
    },
    '@media screen and (min-width: 768px)': {
      fontSize: '1.3rem'
    },
    '@media screen and (min-width: 576px and max-width: 768px)': {
      fontSize: '1.2rem'
    }
  }
});

export default withStyles(styles)(FooterButton);
