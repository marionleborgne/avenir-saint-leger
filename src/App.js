import { ThemeProvider } from '@mui/material/styles';

import { Background, TopBar, Avatars, Hero } from './components';
import './App.css';
import theme from './theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <TopBar />
        <Hero />
        <Background />
        <Avatars />
      </div>
    </ThemeProvider>
  );
}

export default App;
