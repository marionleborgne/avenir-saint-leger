import { Typography } from '@mui/material';

import ProjectDetails from './ProjectDetails';
import ProjectsOverview from './ProjectsOverview';
import IntroStatement from './IntroStatement';
import Stripes from '../Stripes/Stripes';
import { SolidHighlight, HighlightContainer } from '../Stripes/SolidHighlight';

export default () => (
  <HighlightContainer>
    <Stripes width='100%' height='200px' />
    <SolidHighlight>
      <div style={{ maxWidth: '45rem' }} >
        <Typography variant='h4' sx={{ margin: 5 }}>
          Nos axes de travail
        </Typography>
        <ProjectsOverview />
        <IntroStatement />
        <ProjectDetails />
      </div>
    </SolidHighlight>
  </HighlightContainer>
);
