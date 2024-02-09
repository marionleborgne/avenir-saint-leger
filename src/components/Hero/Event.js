import { Typography } from '@mui/material';
import EventIcon from '@mui/icons-material/EventAvailableTwoTone';

import { isMobile } from 'react-device-detect';

const variant = 'h5';
const fontSize = isMobile ? 60 : 90;

export default () => (
  <div style={{ marginTop: 50 }}>
    <EventIcon style={{ fontSize }} />
    <Typography variant={variant}>Réunion Publique</Typography>
    <Typography variant={variant}>29 février à 20h</Typography>
    <Typography variant={variant}>Maison du Village</Typography>
  </div >
);
