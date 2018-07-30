import React, { Component } from 'react';
import Section from '../components/Section';
import FooterButton from '../components/FooterButton';
import SectionHeader from '../components/SectionHeader';

import { data } from '../components/data';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Avatar from '@material-ui/core/Avatar';

class People extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Section>
        <SectionHeader header={data.headers[2]} color="inherit" />
        <div className={classes.people}>
          {data.names.map((name, index) => (
            <div className={classes.person} key={index}>
              <Avatar
                alt={name}
                src={data.imgs[index]}
                className={classes.avatar}
              />

              <Typography className={classes.header} variant="title">
                {name}
              </Typography>
              <Typography className={classes.p} variant="subheader">
                {data.info[index].p1}
              </Typography>
              <Typography className={classes.p} variant="subheader">
                {data.info[index].p2}
              </Typography>
              <Typography className={classes.p} variant="subheader">
                {data.info[index].p3}
              </Typography>
            </div>
          ))}
        </div>
        <FooterButton buttontext={data.buttons[2]} />
      </Section>
    );
  }
}
const styles = theme => ({
  people: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 0 2rem 0',
    justifyContent: 'center'
  },
  person: {
    maxWidth: 510,
    padding: '0 15px',
    marginBottom: '2rem',
    '@media screen and (min-width: 992px )': {
      flexBasis: 0,
      flexGrow: 1
    }
  },
  header: {
    fontSize: '1.4rem',
    lineHeight: 1.2,
    marginBottom: '1.5rem',
    marginTop: '1rem',
    fontWeight: 700,
    color: 'inherit',
    '@media screen and (min-width: 768px )': {
      fontSize: '1.77rem'
    }
  },
  p: {
    fontSize: '1.1rem',
    marginBottom: '1rem',
    '@media screen and (min-width: 768px)': {
      fontSize: '1.23rem'
    },
    '@media screen and (min-width: 576px) and (max-width: 768px)': {
      fontSize: '1.17rem'
    }
  },
  avatar: {
    width: '200px',
    height: '200px',
    margin: 'auto'
  }
});
export default withStyles(styles)(People);
