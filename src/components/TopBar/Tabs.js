import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export const TABS = {
  home: 'Accueil',
  projects: 'Projets',
  team: 'Equipe'
};

export default ({ activeTabId, onClick }) => {
  const sx = { color: '#fff' };
  return (
    <Box sx={{ width: '100%', position: 'absolute', top: '0', color: 'transparent', display: 'flex', justifyContent: 'center' }}>
      <Tabs
        value={activeTabId}
        onChange={onClick}
        aria-label='navigation'
        textColor='secondary'
        indicatorColor='secondary'
      >
        {Object.entries(TABS).map(
          ([key, label]) => <Tab key={key} label={label} sx={sx} />
        )}
      </Tabs>
    </Box>
  );
};
