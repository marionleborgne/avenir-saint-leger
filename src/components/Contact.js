import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/EmailTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';

import Stripes from './Stripes/Stripes';
import { SolidHighlight, HighlightContainer } from './Stripes/SolidHighlight';
import { Typography } from '@mui/material';

export default () => (
  <HighlightContainer>
    <Stripes width='100%' height='200px' flipped />
    <SolidHighlight>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
        <Typography variant='h4' sx={{ margin: 5 }}>
          Nous contacter
        </Typography>
        <Button
          variant="contained"
          startIcon={<EmailIcon />}
          size="large"
          color="secondary"
          target="_top"
          rel="noopener noreferrer"
          href={`mailto:contact@avenir-saint-leger.org`}
          style={{ textTransform: 'none', marginBottom: 20 }}
        >
          <Typography>contact@avenir-saint-leger.org</Typography>
        </Button>
        <Button
          variant="text"
          startIcon={<InstagramIcon />}
          size="large"
          color="secondary"
          target="_blank"
          rel="noopener noreferrer"
          href='https://www.instagram.com/avenir_saint_leger'
          style={{ textTransform: 'none', color: '#000', marginBottom: 20 }}
        >
          <Typography>avenir_saint_leger</Typography>
        </Button>
      </div>
    </SolidHighlight>
  </HighlightContainer>
);
