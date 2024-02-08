import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

import Card from './Card';
import itemData from './data';

export default () => (
  <div>
    <Typography variant='h5' sx={{ margin: 5 }}>Une équipe à votre service</Typography>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container justifyContent='center' spacing={2}>
        {itemData.map(
          (item, i) => {
            return <Card key={i} item={item} />;
          })}
      </Grid>
    </Box>
  </div>
);
