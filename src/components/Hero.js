import Logo from './Logo';

const style = {
  position: 'absolute',
  display: 'flex',
  top: '8vh',
  justifyContent: 'center',
  width: '100%'
};

export default () => (
  <div style={style}>
    <Logo />
  </div>
);
