import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { isMobile } from 'react-device-detect';

import Card from './Card';
import itemData from './data';

export default () => (
  <div>
    <Typography variant={isMobile ? "h3" : "h2"} sx={{ margin: 10 }}>Une équipe à votre service</Typography>
    <Box sx={{ flexGrow: 1 }} id="Equipe" >
      <Grid container justifyContent='center' spacing={2}>
        {itemData.map(
          (item, i) => {
            return <Card key={i} item={item} />;
          })}
      </Grid>
    </Box>
  </div>
);
