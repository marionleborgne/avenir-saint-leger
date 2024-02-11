import Button from '@mui/material/Button';
import EuroIcon from '@mui/icons-material/Euro';

import Stripes from './Stripes/Stripes';
import { SolidHighlight, HighlightContainer } from './Stripes/SolidHighlight';
import { Typography } from '@mui/material';

export default () => (
  <HighlightContainer>
    <Stripes width='100%' height='200px' flipped />
    <SolidHighlight>
      <div>
        <Typography variant='h4' sx={{ margin: 5 }}>
          Finances
        </Typography>
        <Typography sx={{ margin: 5 }}>
          Le détail de nos comptes de campagne ainsi que les pièces justificatives associées sont à votre disposition.
        </Typography>
        <Button
          variant="contained"
          startIcon={<EuroIcon />}
          size="large"
          color="secondary"
          target="_blank"
          rel="noopener noreferrer"
          href={`https://drive.google.com/drive/folders/1-5a2vl6mF2sifufzJci1apZH18EL9coC?usp=drive_link`}
          style={{ textTransform: 'none', marginBottom: 20 }}
        >
          <Typography>Comptes de Campagne</Typography>
        </Button>
      </div>
    </SolidHighlight>
  </HighlightContainer>
);
