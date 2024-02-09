/* eslint-disbale-file */
import { Paper, Typography } from '@mui/material';
import CottageIcon from '@mui/icons-material/CottageTwoTone';
import DiversityIcon from '@mui/icons-material/Diversity1TwoTone';
import LeafIcon from '@mui/icons-material/EnergySavingsLeafTwoTone';
import SavingsIcon from '@mui/icons-material/SavingsTwoTone';
import { styled } from '@mui/material/styles';
import { isMobile } from 'react-device-detect';

const Item = styled(Paper)(() => ({
  elevation: 2,
  margin: isMobile ? 10 : 20,
  width: isMobile ? 150 : 300,
  height: isMobile ? 200 : 300,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const iconFontSize = isMobile ? 60 : 90;
const gridIconAlignment = isMobile ? 'center' : 'top';
const margin = '10px';

export default function BasicCard() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'top', alignItems: 'top', flexDirection: 'row' }}>
          <Item style={{ display: 'flex', justifyContent: gridIconAlignment, alignItems: 'top', flexDirection: 'column' }}>
            <CottageIcon style={{ fontSize: iconFontSize, margin }} />
            <Typography sx={{ margin }}>
              Renforcer la qualité de vie
            </Typography>
          </Item>
          <Item style={{ display: 'flex', justifyContent: gridIconAlignment, alignItems: 'top', flexDirection: 'column' }}>
            <LeafIcon style={{ fontSize: iconFontSize, margin }} />
            <Typography sx={{ margin }}>
              Préserver notre environnement
            </Typography>
          </Item>
        </div>
        <div style={{ display: 'flex', justifyContent: 'top', alignItems: 'top', flexDirection: 'row' }}>
          <Item style={{ display: 'flex', justifyContent: gridIconAlignment, alignItems: 'top', flexDirection: 'column' }}>
            <DiversityIcon style={{ fontSize: iconFontSize, margin }} />
            <Typography sx={{ margin }}>
              Développer le social
            </Typography>
          </Item>
          <Item style={{ display: 'flex', justifyContent: gridIconAlignment, alignItems: 'top', flexDirection: 'column' }}>
            <SavingsIcon style={{ fontSize: iconFontSize, margin }} />
            <Typography sx={{ margin }}>
              Maîtriser les finances
            </Typography>
          </Item>
        </div>
      </div>
    </div>
  );
}
