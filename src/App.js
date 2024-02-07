import './App.css';
import { Background, NavBar, Avatars } from './components';
import theme from './theme';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Background />
      <Avatars />
    </div>
  );
}

export default App;
