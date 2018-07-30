import React, { Component } from 'react';
import './section.css';
class Section extends Component {
  render() {
    return <div className="container">{this.props.children}</div>;
  }
}

export default Section;
