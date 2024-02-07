import Grid from '@mui/material/Grid';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import Popover from './Popover';

export default ({ item }) => (
  <Grid style={{ padding: 30 }}>
    <ImageListItem style={{ maxWidth: 250 }}>
      <img
        style={{ borderRadius: '10px' }}
        src={item.img}
        alt={item.name}
        loading='lazy'
      />
      <ImageListItemBar
        title={item.name}
        subtitle={item.summary}
        style={{ borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}
        actionIcon={
          <Popover name={item.name} description={item.description || ''} />
        }
      />
    </ImageListItem>
  </Grid>
);
