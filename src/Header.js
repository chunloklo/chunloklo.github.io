import portraitCropped from './resources/portraitCropped.jpg';
import React, { useState } from 'react'
import StyleText from './StyleText';
import Link from './Link';
import chunlokResume from './resources/chunlok-resume.pdf';
import TextStyles from './TextStyles';
import { Spacing, Texts } from './styles';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      aspectRatio: this.setState({aspectRatio: window.innerWidth / window.innerHeight})
    };
    window.addEventListener('load', this.windowListener);
    window.addEventListener('resize', this.windowListener);
    this.windowListener();
  }

  windowListener = () => {
    this.setState({aspectRatio: window.innerWidth / window.innerHeight})
  }

  render() {
    console.log('huh');
    console.log(this.state.aspectRatio);
    const divStyle = {
      fontSize: this.props.fontSize,
      display: 'flex',
      flexDirection: this.state.aspectRatio > 1.0 ? 'row' : 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    };

    const headerTextDivStyle = {
      fontSize: this.props.fontSize,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      gap: Spacing.base,
    }

    const portraitStyle = {
      height: '14em',
      width: '14em',
      borderRadius: '50%',
      padding: '1em',
    }

    const descriptionText = `I am a game developer passionate about engineering, game design, art, and writing. I am currently a software engineer working on VALORANT at Riot Games. 
    I recently graduated with a Master's degree in Computer Science at University of Alberta under Martha White,
    and wrote my thesis on improving model-based reinforcement learning algorithms.
    I previously interned at Facebook, Riot Games, Ab Initio, and Home Depot.`

    return (
      <div style={divStyle}>
        <div style={headerTextDivStyle}>
          <div style={TextStyles.titleStyle}>Chunlok Lo</div>
          <div style={{...Texts.descriptionText, textAlign: 'center', paddingLeft: Spacing.headerPadding, paddingRight: Spacing.headerPadding}}>{descriptionText}</div>
          <div style={{display: 'flex', flexDirection: 'row', textAlign: 'center', 'gap': Spacing.base, justifyContent: 'center'}}>
            <div style={Texts.descriptionText}>Email: chunlok.lo1@gmail.com</div>
            <div style={Texts.descriptionText}>
              <Link href={chunlokResume}>CV</Link> / 
              <Link href='https://github.com/chunloklo'>Github</Link> / 
              <Link href='https://www.linkedin.com/in/chunloklo/'>LinkedIn </Link>
            </div>    
          </div>
        </div> 
        <img style={portraitStyle} src={portraitCropped} />
      </div>
    );
  }
}

export default Header;