import logo from '../../assets/LOGO AVENIR SAINT-LEGER EN BLANC.png';
import { isMobile } from 'react-device-detect';

const top = isMobile? '60px' : '150px';

const style = {
  position: 'absolute',
  display: 'flex',
  top,
  justifyContent: 'center',
  width: '100%'
};

export default () => <div style={style}><img src={logo} alt='logo' width='50%' /></div>;
