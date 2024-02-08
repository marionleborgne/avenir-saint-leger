import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

import Card from './Card';
import itemData from './data';
import Stripes from '../Stripes/Stripes';
import { SolidHighlight, HighlightContainer } from '../Stripes/SolidHighlight';

export default () => (
  <HighlightContainer>
    <Stripes width='100%' height='200px' flipped />
    <SolidHighlight>
      <Typography variant='h4' sx={{ marginTop: 0, marginRight: 10, marginBottom: 5, marginLeft: 10 }}>Une équipe à votre service</Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container justifyContent='center' spacing={2}>
          {itemData.map(
            (item, i) => {
              return <Card key={i} item={item} />;
            })}
        </Grid>
      </Box>
    </SolidHighlight>
  </HighlightContainer>

);
