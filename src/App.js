import logo from './logo.svg';
import './App.css';
import portraitCropped from './resources/portraitCropped.jpg';
import Header from './Header';
import Publications from './Publications';
import GameProjects from './GameProjects';
import ResearchProjects from './ResearchProjects';
import { Spacing } from './styles';

function App() {
  const mainStyle = {
    margin: Spacing.screen,
    display: 'flex',
    flexDirection: 'column',
    gap: Spacing.sectionGap,
  }
  return (
    <div style={mainStyle}>
      <Header />
      <GameProjects />
      <Publications />
      {/* <ResearchProjects /> */}
    </div>
  );
}

export default App;
