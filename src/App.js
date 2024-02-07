import { ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { isMobile } from 'react-device-detect';

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
        <Typography variant={isMobile ? "h4" : "h2"} sx={{ margin: 10 }}>Une équipe à votre service</Typography>
        <Avatars />
      </div>
    </ThemeProvider>
  );
}

export default App;
