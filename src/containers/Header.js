import React, { Component } from 'react';
import Section from '../components/Section';
import FooterButton from '../components/FooterButton';
import { data } from '../components/data';

import './styles/header.css';
class Header extends Component {
  render() {
    return (
      <section classname="hero">
        <header>
          <div className="containera containerb">
            <a href="/" className="link">
              <img
                className="img"
                src="http://www.signaturelnd.com/static/img/logo.png"
              />
            </a>
          </div>
        </header>
        <main className="hero">
          <div className="container">
            <h1 className="hover">Hi</h1>
          </div>
        </main>
      </section>
    );
  }
}

export default Header;
