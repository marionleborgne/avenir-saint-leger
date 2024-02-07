import { ThemeProvider } from '@mui/material/styles';

import { Background, NavBar, Avatars } from './components';
import './App.css';
import theme from './theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <Background />
        <Avatars />
      </div>
    </ThemeProvider>
  );
}

export default App;
