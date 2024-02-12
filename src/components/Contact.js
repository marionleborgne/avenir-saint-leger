import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/EmailTwoTone';


import Stripes from './Stripes/Stripes';
import { SolidHighlight, HighlightContainer } from './Stripes/SolidHighlight';
import { Typography } from '@mui/material';

export default () => (
  <HighlightContainer>
    <Stripes width='100%' height='200px' flipped />
    <SolidHighlight>
      <div>
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
      </div>
    </SolidHighlight>
  </HighlightContainer>
);
