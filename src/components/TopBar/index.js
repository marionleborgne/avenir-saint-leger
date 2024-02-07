import { useState, useEffect } from 'react';
import './index.css';
import Tabs from './Tabs';

export default function TopBar() {
  const TABS = ['Accueil', 'Equipe', 'Programme'];
  const defaultNavColor = 'transparent';
  const [navColor, setnavColor] = useState(defaultNavColor);

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor('rgba(0,0,0,0.8)') : setnavColor(defaultNavColor);

    // TODO make generic based on TABS, and have <Tabs> auto-generate from the list
    const equipeTop = document.getElementById('Equipe').getBoundingClientRect().top;
    if (equipeTop > 1) { // (Note: Not 0, doesn't quite trigger when clicking)
      setValue(0);
    } else {
      setValue(1);
    }
  };

  const [value, setValue] = useState(0);

  const onClick = (event, newValue) => {
    document.getElementById(TABS[newValue]).scrollIntoView({ behavior: 'smooth' });
    setValue(newValue);
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  return (
    <div>
      <nav
        style={{
          backgroundColor: navColor,
          height: '48px',
          transition: 'all 1s'
        }}
      >
        <Tabs activeTabId={value} onClick={onClick} />
      </nav>
    </div>
  );
}
