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
  height: isMobile ? 250 : 300,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const iconFontSize = isMobile ? 60 : 90;
const margin = 5;
const textAlign = 'center';

export default function BasicCard() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <div style={{ maxWidth: isMobile? '100vw' : '50vw', margin: 10 }}>
        <div style={{ textAlign, margin: 10 }}>
          <Typography >
            {`Saint-Léger a su préserver son charme ; aujourd'hui, il doit faire face à de nouveaux défis.`}
          </Typography>
          <br />
          <Typography >
            {`Il faut dynamiser notre commune en respectant son identité et son caractère.
            J'ai le plaisir de vous proposer d'élire une équipe compétente, motivée et engagée.
            Elle est composée de femmes et d'hommes de toutes générations qui ont à cœur de travailler ensemble en développant la participation citoyenne.
            Je souhaite obtenir votre confiance pour ce mandat de deux ans afin de concrétiser des engagements à court terme et de mettre en œuvre des projets à plus long terme.`}
          </Typography>
        </div>

        <Typography variant='h5' sx={{ margin: 5 }}>
          Nos axes de travail
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'top', alignItems: 'top', flexDirection: 'row' }}>
            <Item style={{ display: 'flex', justifyContent: 'top', alignItems: 'top', flexDirection: 'column' }}>
              <CottageIcon style={{ fontSize: iconFontSize, margin }} />
              <Typography  sx={{ margin }}>
                Renforcer la qualité de vie
              </Typography>
            </Item>
            <Item style={{ display: 'flex', justifyContent: 'top', alignItems: 'top', flexDirection: 'column' }}>
              <LeafIcon style={{ fontSize: iconFontSize, margin }} />
              <Typography  sx={{ margin }}>
                Préserver notre environnement
              </Typography>
            </Item>
          </div>
          <div style={{ display: 'flex', justifyContent: 'top', alignItems: 'top', flexDirection: 'row' }}>
            <Item style={{ display: 'flex', justifyContent: 'top', alignItems: 'top', flexDirection: 'column' }}>
              <DiversityIcon style={{ fontSize: iconFontSize, margin }} />
              <Typography  sx={{ margin }}>
                Développer le social
              </Typography>
            </Item>
            <Item style={{ display: 'flex', justifyContent: 'top', alignItems: 'top', flexDirection: 'column' }}>
              <SavingsIcon style={{ fontSize: iconFontSize, margin }} />
              <Typography  sx={{ margin }}>
                Maîtriser les finances
              </Typography>
            </Item>
          </div>
          <div style={{ textAlign, margin: 10 }}>
            <Typography >
              {`Ce projet est ambitieux et réaliste. Notre village a un potentiel énorme. Avec vous et en toute transparence, nous pourrons lui offrir la qualité de vie et le dynamisme qu'il mérite.`}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
