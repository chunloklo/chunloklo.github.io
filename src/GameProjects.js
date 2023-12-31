import portraitCropped from './resources/portraitCropped.jpg';
import React from 'react';
import StyleText from './StyleText';
import Link from './Link';
import chunlokResume from './resources/chunlok-resume.pdf';


import fighterScreenshot  from './resources/2dFighterScreenshot.png';
import { Spacing, Texts } from './styles';
import SmallHeaderWithLink from './components/SmallHeaderWithLink';


class GameProjects extends React.Component {
  render() {
    const divStyle = {
      fontSize: this.props.fontSize,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'start',
      // gap: 300
    };

    const smallSectionStyle = {
      display: 'flex', 
      flexDirection:'row',
      alignItems: 'center',
      gap: Spacing.small,
    }

    return (
      <div style={divStyle}>
        <SmallHeaderWithLink sectionHeader='Game Dev Projects' link='https://github.com/chunloklo/game-dev-projects'/>
        <SmallHeaderWithLink sectionHeader='Personal Blog' link='https://chunloklo.github.io/schrodingers-cube/'/>
      </div>
    );
  }
}

export default GameProjects;