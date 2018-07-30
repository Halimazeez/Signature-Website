import React, { Component } from 'react';

import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import { data } from '../components/data';

import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

class Customers extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Section>
          <SectionHeader
            header={data.headers[4]}
            subheader={data.subheaders[2]}
            color="inherit"
          />
          <Typography className={classes.othertitle}>
            {data.subheaders[3]}
          </Typography>
        </Section>
        <img
          src="http://www.signaturelnd.com/static/img/client-logos.png"
          className={classes.img}
        />
      </div>
    );
  }
}
const styles = theme => ({
  othertitle: {
    fontWeight: 300,
    textAlign: 'center',
    marginTop: -55,
    fontSize: '1.1rem',
    '@media screen and (min-width: 576px) and (max-width: 768px)': {
      fontSize: '1.25rem'
    },
    '@media screen and (min-width: 768px) and (max-width: 992px)': {
      fontSize: '1.41rem'
    },
    '@media screen and (min-width: 992px)': {
      fontSize: '1.575rem'
    }
  },
  img: {
    maxWidth: 930,
    paddingBottom: 40,
    margin: 'auto',
    display: 'block',
    width: '100%'
  }
});
export default withStyles(styles)(Customers);
