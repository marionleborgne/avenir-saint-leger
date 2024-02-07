import Grid from '@mui/material/Grid';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import Popover from './Popover';

export default ({ key, item }) => (
  <Grid key={key} style={{ padding: 30 }}>
    <ImageListItem key={key} style={{ maxWidth: 200 }}>
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
  </Grid>
);