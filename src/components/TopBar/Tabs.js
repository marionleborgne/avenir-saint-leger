import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const sx = { color: '#fff' };

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', position: 'absolute', top: '0', color: 'transparent', display: 'flex', justifyContent: 'center' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label='basic tabs example'
        textColor='secondary'
        indicatorColor='secondary'
      >
        <Tab label='ACCUEIL' sx={sx} />
        <Tab label='EQUIPE' sx={sx} />
        <Tab label='PROGRAMME' sx={sx} />
      </Tabs>
    </Box>
  );
}
