import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Card from './Card';
import itemData from './data';

export default () => (
  <Box sx={{ flexGrow: 1 }} >
    <Grid container justifyContent='center' spacing={2}>
      {itemData.map(
        (item, i) => {
          console.log(item);
          return <Card key={i} item={item} />;
        })}
    </Grid>
  </Box>
);

