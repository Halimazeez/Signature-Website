import React, { Component } from 'react';

import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import FooterButton from '../components/FooterButton';
import { data } from '../components/data';

import { withStyles } from '@material-ui/core/styles';

import './styles/intro.css';

class Intro extends Component {
  render() {
    return (
      <Section>
        <SectionHeader subheader={data.subheaders[0]} color="inherit" />

        <div className="flowchart">
          <img
            className="vertical"
            src="http://www.signaturelnd.com/static/img/flowchart-vertical@2x.png"
          />
          <img
            className="horizontal"
            src="http://www.signaturelnd.com/static/img/flowchart@2x.png"
          />
        </div>
        <FooterButton buttontext={data.buttons[1]} />
      </Section>
    );
  }
}

export default Intro;
