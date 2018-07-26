import React, { Component } from 'react';

import Section from '../components/Section';
import FooterButton from '../components/FooterButton';
import SectionHeader from '../components/SectionHeader';

import { data } from '../components/data';
import { withStyles } from '@material-ui/core/styles';

class People extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Section>
        <SectionHeader header={data.headers[2]} />
        <FooterButton buttontext={data.buttons[2]} />
      </Section>
    );
  }
}
const styles = theme => ({});
export default withStyles(styles)(People);
