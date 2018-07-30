import React, { Component } from 'react';

import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import { data } from '../components/data';

import { withStyles } from '@material-ui/core/styles';

class Contact extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Section>
        <SectionHeader header={data.headers[3]} color="secondary" />
      </Section>
    );
  }
}
const styles = theme => ({});
export default withStyles(styles)(Contact);
