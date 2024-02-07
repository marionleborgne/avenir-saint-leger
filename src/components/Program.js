import { Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(() => ({
  elevation: 2,
  margin: 10,
  padding: 10,
  width: 150,
  height: 150,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));


export default function BasicCard() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: 5 }}>
      <div style={{ padding: 5, margin: 2 }}>
        <Typography variant="h6">
          {`Saint-Léger a su préserver son charme ; aujourd'hui, il doit faire face à de nouveaux défis.`}
        </Typography>
        <br/>
        <div>
          <Typography variant="h7">
            {`Il faut dynamiser notre commune en respectant son identité et son caractère.
            J'ai le plaisir de vous proposer d'élire une équipe compétente, motivée et engagée.
            Elle est composée de femmes et d'hommes de toutes générations qui ont à cœur de travailler ensemble en développant la participation citoyenne.
            Je souhaite obtenir votre confiance pour ce mandat de deux ans afin de concrétiser des engagements à court terme et de mettre en œuvre des projets à plus long terme.`}
          </Typography>
          <Typography variant="h6" sx={{ margin: 5 }}>Nos quatre axes de travail</Typography>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'top', alignItems: 'top', flexDirection: 'row' }}>
              <Item>Renforcer la qualité de vie à Saint-Léger</Item>
              <Item>Préserver notre environnement</Item>
            </div>
            <div style={{ display: 'flex', justifyContent: 'top', alignItems: 'top', flexDirection: 'row' }}>
              <Item>Développer le social</Item>
              <Item>Maîtriser les finances en développant les partenariats avec les acteurs territoriaux</Item>
            </div>
          </div>
          <br />
          <div>
            {`Ce projet est ambitieux et réaliste. Notre village a un potentiel énorme. Avec vous et en toute transparence, nous pourrons lui offrir la qualité de vie et le dynamisme qu'il mérite.`}
          </div>
        </div>
      </div>
    </div>
  );
}



// import { useState } from 'react';
// import Button from '@mui/material/Button';
// import { Paper, Typography } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { isMobile } from 'react-device-detect';

// const Item = styled(Paper)(() => ({
//   elevation: 2,
//   margin: 10,
//   padding: 10,
//   maxWidth: 200,
//   minHeight: 200
// }));

// const short = <div>{`Saint-Léger a su préserver son charme ; aujourd'hui, il doit faire face à de nouveaux défis.`}</div>;
// const full = <div>
//   <br />
//   <div>
//     {`Il faut dynamiser notre commune en respectant son identité et son caractère.
//     J'ai le plaisir de vous proposer d'élire une équipe compétente, motivée et engagée.
//     Elle est composée de femmes et d'hommes de toutes générations qui ont à cœur de travailler ensemble en développant la participation citoyenne.
//     Je souhaite obtenir votre confiance pour ce mandat de deux ans afin de concrétiser des engagements à court terme et de mettre en œuvre des projets à plus long terme.`}
//   </div>
//   <Typography variant="h5" sx={{ margin: 5 }}>Nos quatre axes de travail</Typography>
//   <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
//     <div style={{ display: 'flex', justifyContent: 'top', alignItems: 'top', flexDirection: 'row' }}>
//       <Item>Renforcer la qualité de vie à Saint-Léger</Item>
//       <Item>Préserver notre environnement</Item>
//     </div>
//     <div style={{ display: 'flex', justifyContent: 'top', alignItems: 'top', flexDirection: 'row' }}>
//       <Item>Développer le social</Item>
//       <Item>Maîtriser les finances en développant les partenariats avec les acteurs territoriaux</Item>
//     </div>
//   </div>
//   <br />
//   <div>
//     {`Ce projet est ambitieux et réaliste. Notre village a un potentiel énorme. Avec vous et en toute transparence, nous pourrons lui offrir la qualité de vie et le dynamisme qu'il mérite.`}
//   </div>
// </div>;

// export default function BasicCard() {
//   const [showAll, setShowAll] = useState(false);
//   const variant = isMobile ? 'h7' : 'h6';
//   const maxWidth = isMobile ? '100%' : '50vw';
//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
//       <Typography sx={{ padding: 5, margin: 2, maxWidth }}>
//         <Typography variant={variant}>
//           {short}
//         </Typography>
//         <Typography variant={variant}>
//           {showAll ? full : ''}
//         </Typography>
//         <div style={{ marginTop: 10 }} >
//           <Button size='small' onClick={() => setShowAll(!showAll)}>
//             <Typography variant={variant}>
//               En savoir plus
//             </Typography></Button>
//         </div>
//       </Typography >
//     </div>
//   );
// }
