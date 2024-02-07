import React from 'react';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import Grid from '@mui/material/Grid';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default ({ key, item }) => {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Grid key={key} style={{ margin: 30, cursor: 'pointer' }} 
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}
    >
      <ImageListItem key={key} style={{ maxWidth: 200 }}>
        <img
          style={{ borderRadius: '15px' }}
          src={item.img}
          alt={item.name}
          loading='lazy'
        />
        <ImageListItemBar
          style={{ borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px' }}
          title={item.name}
          subtitle={item.summary}
        />
      </ImageListItem>
      <Popover
        id="mouse-over-popover"
        style={{ pointerEvents: 'none' }}
        disableScrollLock={true}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <div style={{ maxWidth: 400, padding: 20 }}>
          <Typography variant="h4">{name}</Typography>
          <Typography sx={{ p: 1 }}>{item.description || ''}</Typography>
        </div>
      </Popover>
    </Grid>
  );
};
