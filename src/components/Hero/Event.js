import { Typography } from '@mui/material';
import EventIcon from '@mui/icons-material/EventAvailableTwoTone';
import { isMobile } from 'react-device-detect';
import VoteButton from './VoteButton';

const variant = 'h5';
const fontSize = isMobile ? 60 : 90;

export default () => {
  return (
    <div style={{ marginTop: 50 }}>
      <EventIcon style={{ fontSize }} />
      <Typography variant={variant}>Élections Municipales</Typography>
      <Typography variant={variant}>Dimanche 3 Mars</Typography>
      <Typography variant={variant}>Mairie de Saint-Léger</Typography>
      <VoteButton />
    </div >
  );
};
