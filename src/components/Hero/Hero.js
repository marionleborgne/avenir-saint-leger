import { Typography } from '@mui/material';
import EventIcon from '@mui/icons-material/EventAvailableTwoTone';

import Program from './Program';
import Background from './Background';
import Logo from './Logo';
import Stripes from '../Stripes/Stripes';
import { SolidHighlight, HighlightContainer } from '../Stripes/SolidHighlight';
import { isMobile } from 'react-device-detect';

const variant = 'h4';
const fontSize = isMobile? 60 : 90;

export default () => (
  <div>
    <Background />
    <Logo />
    <EventIcon style={{ fontSize }}/>
    <Typography variant={variant}>Réunion Publique</Typography>
    <Typography variant={variant}>Le 29 février à 20h</Typography>
    <Typography variant={variant}>Maison du Village</Typography>

    <HighlightContainer>
      <Stripes width='100%' height='200px' />
      <SolidHighlight>
        <Program />
      </SolidHighlight>
    </HighlightContainer>
  </div >
);
