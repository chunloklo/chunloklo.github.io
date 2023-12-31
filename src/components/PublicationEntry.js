import React from 'react';
import StyleText from '../StyleText';
import Link from '../Link';
import sections from '../styles/sections';
import { Texts, Spacing } from '../styles'

class PublicationEntry extends React.Component {
  render() {
    return (
    <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignItems: 'start', paddingTop:Spacing.base}}>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'end' }}>
        <div style={Texts.labelText} >{this.props.title}</div>
        <div style={{...Texts.descriptionText, paddingLeft: '0.5em'}}>{this.props.conference}</div>
        <div style={{paddingLeft: '0.5em'}}>
          <StyleText fontSize={'1em'} fontWeight={280}><Link href={this.props.link}>[link]</Link></StyleText>
        </div>
      </div>
      <div style={Texts.authorText}>{this.props.authors}</div>
    </div>
    );
  }
}

export default PublicationEntry;