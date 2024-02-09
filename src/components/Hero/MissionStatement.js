import { Typography } from '@mui/material';
import { isMobile } from 'react-device-detect';

import QuoteDown from './QuoteDown';
import QuoteUp from './QuoteUp';

export default () => (
  <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: '20px' }}>
      {isMobile? null : <QuoteDown />}
      <div style={{ maxWidth: '45rem', textAlign: 'left', margin: 10 }}>
        <Typography sx={{ marginBottom: 2 }}>
          {`Saint-Léger a su préserver son charme ; aujourd'hui, il doit faire face à de nouveaux défis.`}
        </Typography>
        <Typography>
          {`Il faut dynamiser notre commune en respectant son identité et son caractère.
        J'ai le plaisir de vous proposer d'élire une équipe compétente, motivée et engagée.
        Elle est composée de femmes et d'hommes de toutes générations qui ont à cœur de travailler ensemble en développant la participation citoyenne.
        Je souhaite obtenir votre confiance pour ce mandat de deux ans afin de concrétiser des engagements à court terme et de mettre en œuvre des projets à plus long terme.`}
        </Typography>
      </div>
      {isMobile? null: <QuoteUp />}
    </div>
  </div>
);
