import React from 'react';
import StyleText from '../StyleText';
import Link from '../Link';
import sections from '../styles/sections';
import { Texts } from '../styles'

class SectionHeader extends React.Component {
  render() {
    return (
      <div style={Texts.titleText}>{this.props.title}</div>
    );
  }
}

export default SectionHeader;