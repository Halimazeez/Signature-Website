import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Section from '../components/Section';
import { data } from '../components/data';

class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Section>
        <Typography>{data.footer}</Typography>
      </Section>
    );
  }
}

const styles = theme => ({
  copyright: {
    color: 'rgba(255, 255, 255, 0.65)'
  }
});

export default withStyles(styles)(Footer);
