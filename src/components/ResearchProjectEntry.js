import React from 'react';
import StyleText from '../StyleText';
import Link from '../Link';
import sections from '../styles/sections';
import * as textStyles from '../styles/texts';

class ResearchProjectEntry extends React.Component {
  render() {
    const contentDivStyle = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      gap: '3rem',
    }

    const portraitStyle = {
      height: '8em',
      width: '8em',
      // padding: '1em',
    }

    return (
      <div style={contentDivStyle}><img style={portraitStyle} src={this.props.image} /> 
        <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignItems: 'start'}}>
          <div style={textStyles.labelText}>{this.props.title}</div>
          <div style={textStyles.authorText}>{this.props.author}</div>
          <div style={{...textStyles.descriptionText, textAlign: 'left'}}>{this.props.description}</div>
          <div style={{...textStyles.descriptionText, textAlign: 'left'}}>
            <Link href={this.props.link}>{this.props.linkText}</Link>
          </div>
        </div>
      </div> 
    );
  }
}

export default ResearchProjectEntry;