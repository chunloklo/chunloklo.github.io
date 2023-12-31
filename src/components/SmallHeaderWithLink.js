import React from 'react';
import StyleText from '../StyleText';
import Link from '../Link';
import sections from '../styles/sections';
import { Texts, Spacing } from '../styles'

class SmallHeaderWithLink extends React.Component {
  render() {
    const smallSectionStyle = {
      display: 'flex', 
      flexDirection:'row',
      alignItems: 'center',
      gap: Spacing.small,
    };

    return (
      <div style={smallSectionStyle}>
        <div style={Texts.sectionTitle}>{this.props.sectionHeader}</div>
        <div style={Texts.descriptionText}><Link href={this.props.link}>[link]</Link></div>
      </div>
    );
  }
}

export default SmallHeaderWithLink;