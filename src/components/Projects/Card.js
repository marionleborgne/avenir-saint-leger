import Grid from '@mui/material/Grid';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default ({ item }) => (
  <Grid style={{ padding: 30 }}>
    <ImageListItem style={{ maxWidth: 250 }}>
      <ImageListItemBar
        title={item.title}
        subtitle={item.description}
        style={{ borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}
        actionIcon={null}
      />
    </ImageListItem>
  </Grid>
);
