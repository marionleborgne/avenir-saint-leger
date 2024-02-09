import { styled } from '@mui/material/styles';

const highlightColor = 'rgb(205, 227, 242)';

export const HighlightContainer = styled('div')({
  background: highlightColor
});


export const SolidHighlight = styled('div')({
  background: `linear-gradient(to bottom, ${highlightColor}, white 7rem)`,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
});
