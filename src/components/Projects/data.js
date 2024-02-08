import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import CheckIcon from '@mui/icons-material/Check';

const Item = ({ text }) => (<ListItem>
  <ListItemIcon>
    <CheckIcon />
  </ListItemIcon>
  <ListItemText
    sx={{ color: '#000' }}
    primary={text}
  />
</ListItem>);

export default [
  {
    title: 'Participation citoyenne',
    shortTerm: (<div>
      <div>{`Réunions régulières des commissions mixtes élus-citoyens relatives :`}</div>
      <List>
        <Item
          text={`À l'urbanisme, aux finances,  aux affaires scolaires, aux affaires sociales, à l'environnement`}
        />
        <Item
          text={`Commission des fêtes (forum des associations plus festif)`}
        />
        <Item
          text={`Commission jeunesse (proposer un salon des métiers, et forum d'orientation, réunion  avec un expert PARCOURS'SUP, accompagnement)`}
        />
        <Item
          text={`Consultations  citoyennes pour des projets précis (évolution du centre aéré, cantine, micro-crèche, réflexion sur la sécurité du village (vigilance citoyenne…), création d'un espace multisports)`}
        />
      </List>
    </div>),
    longTerm: ''
  },
  {
    title: 'Project Example',
    shortTerm: <div>{`Blah blah blah.`}</div>,
    longTerm: <div>{`Bli bli bli bli bli bli bli bli bli bli.`}</div>
  },
  {
    title: 'Project Example',
    shortTerm: <div>{`Blah blah blah.`}</div>,
    longTerm: <div>{`Bli bli bli bli bli bli bli bli bli bli.`}</div>
  },
  {
    title: 'Project Example',
    shortTerm: <div>{`Blah blah blah.`}</div>,
    longTerm: <div>{`Bli bli bli bli bli bli bli bli bli bli.`}</div>
  },
  {
    title: 'Project Example',
    shortTerm: <div>{`Blah blah blah.`}</div>,
    longTerm: <div>{`Bli bli bli bli bli bli bli bli bli bli.`}</div>
  }
];
