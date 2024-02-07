import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import Popover from './Popover';
import itemData from "./data";

export default () => (
  <Box sx={{ flexGrow: 1 }} >
    <Grid container justifyContent='center' spacing={2}>
      {itemData.map(
        (item, i) => {
          console.log(item);
          return <Grid key={i} style={{ padding: 30 }}>
            <ImageListItem key={i} style={{ maxWidth: 200 }}>
              <img
                style={{ borderTopLeftRadius: '10%', borderTopRightRadius: '10%' }}
                src={item.img}
                alt={item.name}
                loading='lazy'
              />
              <ImageListItemBar
                title={item.name}
                subtitle={item.summary}
                actionIcon={
                  <Popover name={item.name} description={item.description || ''} />
                }
              />
            </ImageListItem>
          </Grid>;
        })}
    </Grid>
  </Box>
);

