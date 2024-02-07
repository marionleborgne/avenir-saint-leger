import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const sx = { color: '#fff' };

export default({activeTabId, onClick}) => {
  return (
    <Box sx={{ width: '100%', position: 'absolute', top: '0', color: 'transparent', display: 'flex', justifyContent: 'center' }}>
      <Tabs
        value={activeTabId}
        onChange={onClick}
        aria-label='navigation'
        textColor='secondary'
        indicatorColor='secondary'
      >
        <Tab key={0} label='Accueil' sx={sx} />
        <Tab key={1} label='Equipe' sx={sx} />
        <Tab key={2} label='Programme' sx={sx} />
      </Tabs>
    </Box>
  );
};
