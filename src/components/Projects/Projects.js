
import Typography from '@mui/material/Typography';

import Stripes from '../Stripes/Stripes';
import { SolidHighlight, HighlightContainer } from '../Stripes/SolidHighlight';
import Accordion from './Accordion';

export default () => (
  <HighlightContainer>
    <Stripes width='100%' height='200px'/>
    <SolidHighlight>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: ' column' }}>
        <div style={{ maxWidth: '45rem' }}>
          <Typography variant='h4' sx={{ marginBottom: 5 }}>Notre qualité de vie</Typography>
          <Accordion />
        </div>
      </div>
    </SolidHighlight>
  </HighlightContainer>
);
