import portraitCropped from './resources/portraitCropped.jpg';
import React from 'react';
import StyleText from './StyleText';
import Link from './Link';
import chunlokResume from './resources/chunlok-resume.pdf';
import TextStyles from './TextStyles';
import PublicationEntry from './components/PublicationEntry';
import SectionHeader from './components/SectionHeader';

class Publications extends React.Component {
  render() {
    const divStyle = {
      fontSize: this.props.fontSize,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'start',
      // gap: 300
    };

    const headerTextDivStyle = {
      fontSize: this.props.fontSize,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      gap: '3rem',
    }

    const authorStyle = {
      fontSize: "1em",
      fontWeight: 300
    }

    const conferenceStyle = {
      fontSize: "1em",
      fontWeight: 200
    }

    return (
      <div style={divStyle}>
        <SectionHeader title='Publications'/>
        {/* <PublicationEntry 
          title={'Goal Space Planning with Subgoal Models'} 
          authors={'Chunlok Lo, Gabor Mihucz, Adam White, Farzane Aminmansour, Martha White'}
          conference={'arXiv preprint'}
          link={'https://arxiv.org/abs/2206.02902'}
        /> */}
        <PublicationEntry 
          title={'Goal Space Planning with Subgoal Models'} 
          authors={'Chunlok Lo'}
          conference={'Master\'s Thesis, University of Alberta'}
          link={'https://era.library.ualberta.ca/items/62d98104-a61c-403d-a07c-df8da53ee489'}
        />
        <PublicationEntry 
          title={'Continual Auxiliary Task Learning'} 
          authors={'Matthew McLeod, Chunlok Lo, Matthew Schlegel, Andrew Jacobsen, Raksha Kumaraswamy, Martha White, Adam White'}
          conference={'Advances in Neural Information Processing Systems (NeurIPS), 2021'}
          link={'https://arxiv.org/abs/2202.11133'}
        />
      </div>
    );
  }
}

export default Publications;