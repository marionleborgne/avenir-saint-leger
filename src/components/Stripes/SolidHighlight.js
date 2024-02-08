import styled from 'styled-components';

const highlightColor = 'rgb(205, 227, 242)';

export const HighlightContainer = styled.div`
  background: ${highlightColor};
`;

export const SolidHighlight = styled.div`
  background: ${highlightColor}; /* Old browsers */
  background: -moz-linear-gradient(top, ${highlightColor}, white 45%);
  background: -webkit-linear-gradient(top, ${highlightColor}, white 45%);
  background: linear-gradient(to bottom, ${highlightColor}, white 45%);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
