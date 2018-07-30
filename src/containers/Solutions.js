import React, { Component } from 'react';

import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import { data } from '../components/data';

import { withStyles } from '@material-ui/core/styles';

class Solutions extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Section>
        <SectionHeader
          header={data.headers[1]}
          subheader={data.subheaders[1]}
          color="secondary"
        />
      </Section>
    );
  }
}
const styles = theme => ({});
export default withStyles(styles)(Solutions);
