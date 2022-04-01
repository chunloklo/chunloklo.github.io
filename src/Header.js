import portraitCropped from './resources/portraitCropped.jpg';
import React from 'react';
import StyleText from './StyleText';
import Link from './Link';
import chunlokResume from './resources/chunlok-resume.pdf';

class Header extends React.Component {
  render() {
    const divStyle = {
      fontSize: this.props.fontSize,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      initialScale: 1,
      paddingLeft: 400,
      paddingRight: 400,
      paddingTop: 100,
      gap: 300
    };

    const headerTextDivStyle = {
      fontSize: this.props.fontSize,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      gap: '3rem',
    }

    const portraitStyle = {
      height: '70em',
      width: '70em',
      borderRadius: '50%',
      padding: 100,
    }

    return (
      <div style={divStyle}>
        <div style={headerTextDivStyle}>
          <StyleText fontSize={'20em'} fontWeight={400}>Chunlok Lo</StyleText>
          <div>
            <StyleText fontSize={'5em'} fontWeight={300}>I am currently pursuing a thesis-based Master's degree in Computer Science at University of Alberta. My current research interests is reinforcement learning. I have interned at Facebook, Riot Games, Ab Initio, and Home Depot. I got my undergraduate CS degree from Georgia Tech.</StyleText>
            <div style={{ paddingTop: '4em', display: 'flex', flexDirection: 'column', gap: '1rem', }}>
              <StyleText fontSize={'4.6em'} fontWeight={300}>Email: chunlok.lo1@gmail.com</StyleText>
              <StyleText fontSize={'4.6em'} fontWeight={300}> <Link href={chunlokResume}>CV</Link> / <Link href='https://github.com/chunloklo'>Github</Link> / <Link href='https://www.linkedin.com/in/chunloklo/'>LinkedIn </Link></StyleText>
            </div>
          </div>
        </div>
        <img style={portraitStyle} src={portraitCropped} />
      </div>
    );
  }
}

export default Header;