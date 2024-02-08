import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

import Card from './Card';
import itemData from './data';

export default () => (
  <div>
    <Typography variant="h4" sx={{ margin: 10 }}>Projets</Typography>
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
