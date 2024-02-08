import { styled } from '@mui/material/styles';

const highlightColor = 'rgb(205, 227, 242)';

export const HighlightContainer = styled('div')({
  background: highlightColor
});


export const SolidHighlight = styled('div')({
  // background: `${highlightColor} -moz-linear-gradient(top, ${highlightColor}, white 45%) -webkit-linear-gradient(top, ${highlightColor}, white 45%) linear-gradient(to bottom, ${highlightColor}, white 45%)`,
  background: `linear-gradient(to bottom, ${highlightColor}, white 45%)`,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
});
