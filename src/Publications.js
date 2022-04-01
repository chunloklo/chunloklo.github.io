import portraitCropped from './resources/portraitCropped.jpg';
import React from 'react';
import StyleText from './StyleText';
import Link from './Link';
import chunlokResume from './resources/chunlok-resume.pdf';

class Publications extends React.Component {
  render() {
    const divStyle = {
      fontSize: this.props.fontSize,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'start',
      initialScale: 1,
      paddingLeft: 400,
      paddingRight: 400,
      paddingTop: 100,
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

    const portraitStyle = {
      height: '70em',
      width: '70em',
      borderRadius: '50%',
      padding: 100,
    }

    return (
      <div style={divStyle}>
        <div style={{ alignSelf: 'start', paddingBottom: '4em' }}><StyleText fontSize={'10em'} fontWeight={400}>Publications</StyleText></div>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          <StyleText fontSize={'6em'} fontWeight={400}>Continual Auxiliary Task Learning</StyleText>
          <div style={{ alignSelf: 'end', paddingLeft: '4em' }}>
            <StyleText fontSize={'5em'} fontWeight={300}>Matthew McLeod, Chunlok Lo, Matthew Schlegel, Andrew Jacobsen, Raksha Kumaraswamy, Martha White, Adam White </StyleText>
          </div>
          <div style={{ alignSelf: 'end' }}>
            <StyleText fontSize={'5em'} fontWeight={280}>Advances in Neural Information Processing Systems (NeurIPS), 2021</StyleText>
          </div>
          <div style={{ alignSelf: 'center', paddingLeft: '2em' }}>
            <StyleText fontSize={'4em'} fontWeight={280}><Link href='https://proceedings.neurips.cc/paper/2021/file/68331ff0427b551b68e911eebe35233b-Paper.pdf'>[pdf]</Link></StyleText>
          </div>

        </div>
        {/* <div ><StyleText fontSize={'8em'} fontWeight={400}>Publications</StyleText></div> */}

      </div>
    );
  }
}

export default Publications;