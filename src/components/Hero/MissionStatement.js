import { Typography } from '@mui/material';

export default () => (
  <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
    <div style={{ maxWidth: '45rem', textAlign: 'justify', textJustify: 'inter-word', margin: 10 }}>
      <Typography>
        {`Saint-Léger a su préserver son charme ; aujourd'hui, il doit faire face à de nouveaux défis.`}
      </Typography>
      <br />
      <Typography>
        {`Il faut dynamiser notre commune en respectant son identité et son caractère.
        J'ai le plaisir de vous proposer d'élire une équipe compétente, motivée et engagée.
        Elle est composée de femmes et d'hommes de toutes générations qui ont à cœur de travailler ensemble en développant la participation citoyenne.
        Je souhaite obtenir votre confiance pour ce mandat de deux ans afin de concrétiser des engagements à court terme et de mettre en œuvre des projets à plus long terme.`}
      </Typography>
    </div>
  </div>
);
