import { useState, useEffect } from 'react';
import './index.css';
import Tabs from './Tabs';

export default function TopBar() {
  const defaultNavColor = 'transparent';
  const [navColor, setnavColor] = useState(defaultNavColor);
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor('rgba(0,0,0,0.8)') : setnavColor(defaultNavColor);
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
        <Tabs />
      </nav>
    </div>
  );
}
