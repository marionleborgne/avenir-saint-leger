import { ThemeProvider } from '@mui/material/styles';

import { Background, TopBar, Avatars, Hero, Program, Projects, TABS } from './components';
import './App.css';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div id={TABS.home}>
          <TopBar />
          <Background />
          <Hero />
          <Program />
        </div>
        <div id={TABS.team}>
          <Avatars />
        </div>
        <div id={TABS.projects}>
          <Projects />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
