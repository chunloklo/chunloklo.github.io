import portraitCropped from './resources/portraitCropped.jpg';
import React from 'react';
import StyleText from './StyleText';
import Link from './Link';
import chunlokResume from './resources/chunlok-resume.pdf';
import TextStyles from './TextStyles';

import softBody from './resources/softBody.png';
import hrlOlPortrait from './resources/hrlOlPortrait.png';
import hrlPresentation from './resources/hrl-ol-presentation.pdf';
import ResearchProjectEntry from './components/ResearchProjectEntry';

class ResearchProjects extends React.Component {
  render() {
    const divStyle = {
      fontSize: this.props.fontSize,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'start',
      // gap: 300
    };

    const contentDivStyle = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      gap: '3rem',
    }
    
    const descriptionDivStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      // gap: '3rem',
    }
    
    const portraitStyle = {
      height: '8em',
      width: '8em',
      // padding: '1em',
    }
    
    const titleStyle = {
      fontSize: '1.8em',
      fontWeight: 300,
    }

    const authorStyle = {
      fontSize: '1em',
      textAlign: 'left',
      fontStyle: 'italic',
      fontWeight: 200
    }

    const descriptionStyle = {
      fontSize: '1em',
      textAlign: 'left', 
      fontWeight: 200
    }

    return (
      <div style={divStyle}>
        <div style={{ alignSelf: 'start', paddingBottom: '0.5em' }}><div style={TextStyles.sectionHeaderStyle}>Research Projects</div></div> 
        <ResearchProjectEntry 
          title='Simulation and Control of Soft-Bodied Creatures'
          author='Chunlok Lo, Greg Turk'
          description='Explores the use of covariance matrix adaptation evolution strategy to find control policies for soft bodied creatures with various body plans and muscle actuation patterns'
          link='https://chunloklo.github.io/softbody_gait_discovery/'
          linkText='Project Webpage'
          image={softBody}
        />
        <ResearchProjectEntry 
          title='Hierarchical Reinforcement Learning with Option Learning'
          author='Chunlok Lo, Eric Liu, Matthew Gombolay'
          description='Explored combining hierarchical reinforcement learning with option learning methodologies to improve exploration'
          link={hrlPresentation}
          linkText='Presentation'
          image={hrlOlPortrait}
        />
      </div>
    );
  }
}

export default ResearchProjects;