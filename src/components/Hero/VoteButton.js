import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
// import RocketIcon from '@mui/icons-material/RocketLaunchTwoTone';
import CheckIcon from '@mui/icons-material/MarkEmailReadTwoTone';

import pdfLink from '../../assets/vote/instructions.pdf';

export default () => {

  return (
    <div>
      <Button
        variant="contained"
        startIcon={<CheckIcon />}
        size="large"
        color="secondary"
        style={{ textTransform: 'none', color: '#000', marginTop: 25 }}
        target="_blank"
        rel="noopener noreferrer"
        href={pdfLink}
      >
        <Typography>Modalités de Vote</Typography>
      </Button>
    </div>
  );
};
