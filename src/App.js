import { ThemeProvider } from '@mui/material/styles';

import {
  TABS,
  TopBar,
  Avatars,
  Hero,
  Projects,
  Footer,
  Contact,
  Finances
} from './components';
import './App.css';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div id={TABS.home}>
          <TopBar />
          <Hero />
        </div>
        <div id={TABS.projects}>
          <Projects />
        </div>
        <div id={TABS.team}>
          <Avatars />
        </div>
        <Finances />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
