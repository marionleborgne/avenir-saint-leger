import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import BoltIcon from '@mui/icons-material/BoltTwoTone';
import TrendIcon from '@mui/icons-material/TrendingUpTwoTone';

import data from './data';
import { Chip } from '@mui/material';
import { isMobile } from 'react-device-detect';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const ShortTerm = () => <Chip icon={<BoltIcon />} label="Court Terme" color='info' sx={{ marginBottom: 2 }} />;
const LongTerm = () => <Chip icon={<TrendIcon />} label="Long Terme" color='success' sx={{ marginBottom: 2 }} />;

export default () => {
  const [expanded, setExpanded] = React.useState(isMobile? null : 'panel-0-0');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div style={{ margin: '20px' }}>
      {data.map(({ section, icon, projects }, k) => (
        <div key={k}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: isMobile? 'column': 'row',
            marginTop: 30,
            marginBottom: 30
          }}>
            {icon}
            <Typography variant='h5'>
              {section}
            </Typography>
          </div>
          {
            projects.map((project, i) => {
              const id = `-${k}-${i}`;
              const { title, shortTerm, longTerm } = project;
              return <Accordion
                key={i}
                expanded={expanded === `panel${id}`}
                onChange={handleChange(`panel${id}`)}
              >
                <AccordionSummary aria-controls={`panel${id}-content`} id={`panel${id}-header`}>
                  <Typography sx={{ textAlign: 'left' }}>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ textAlign: 'left' }}>
                  {shortTerm ?
                    <div>
                      <ShortTerm />
                      {shortTerm}
                    </div> : null}
                  <br />
                  {longTerm ?
                    <div>
                      <LongTerm />
                      {longTerm}
                    </div> : null}
                </AccordionDetails>
              </Accordion>;
            })
          }
        </div>
      ))}
    </div>
  );
};
