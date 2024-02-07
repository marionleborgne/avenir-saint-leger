import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Logo from './Logo';

export default () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="absolute" top="0" elevation={0} color="transparent">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          href="/"
        >
          <Logo />
        </IconButton>
      </Toolbar>
    </AppBar>
  </Box>
);
