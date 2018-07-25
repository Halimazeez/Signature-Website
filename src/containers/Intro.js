import React, { Component } from 'react';

import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import FooterButton from '../components/FooterButton';
import { data } from '../components/data';

import { withStyles } from '@material-ui/core/styles';

class Intro extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Section>
        <SectionHeader subheader={data.subheaders[0]} />
        <FooterButton buttontext={data.buttons[1]} />
      </Section>
    );
  }
}
const styles = theme => ({});
export default withStyles(styles)(Intro);
