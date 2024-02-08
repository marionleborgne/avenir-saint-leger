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
  // Notre qualité de vie
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
    title: 'Diffusion de linformation',
    shortTerm: (<div>
      <List>
        <Item
          text={`Panneaux d'affichage numérique`}
        />
        <Item
          text={`Créer un mur numérique pour échanger sur les ressources et les besoins`}
        />
        <Item
          text={`Valorisation des commerces grâce à une vitrine numérique`}
        />
      </List>
    </div>),
    longTerm: ''
  },
  {
    title: 'Accueil des enfants',
    shortTerm: (<div>
      <div>{`École :`}</div>
      <List>
        <Item
          text={`Consultation sur les horaires scolaires et périscolaires`}
        />
        <Item
          text={`Mise en place d'espaces ludiques peints au sol dans la cour de l'école`}
        />
      </List>
      <div>{`Centre aéré :`}</div>
      <List>
        <Item
          text={`Renforcer les liens entre le centre aéré et les ressources :`}
        />
        <Item
          text={`humaines (après-midi jeux de société avec les aînés, intervention de bénévoles pour la découverte d'un sport)`}
        />
        <Item
          text={`environnementales du village (sorties en forêt avec un guide, visite des jardins partagés, de la miellerie, de la caserne des pompiers …)`}
        />
        <Item
          text={`Mutualiser les sorties avec les autres centres de loisirs des communes avoisinantes`}
        />
        <Item
          text={`Etude de la plage d'ouverture du centre aéré`}
        />
      </List>
    </div>),
    longTerm: (<div>
      <List>
        <Item
          text={`Réflexion sur l'agrandissement de la cantine et la création d'une cuisine dans la cantine de l'école pour la transformation des produits sur place`}
        />
        <Item
          text={`Réflexion sur la création d' un bâtiment dédié au centre de loisirs`}
        />
      </List>
    </div>)
  },
  {
    title: 'Sécurisation de la circulation',
    shortTerm:  (<div>
      <List>
        <Item
          text={`Déplacer certains passages piétons vers des endroits plus sûrs`}
        />
        <Item
          text={`Mise en place d'éclairage sur les passages piétons`}
        />
        <Item
          text={`Matérialiser les zones de vitesse 30km/h`}
        />
      </List>
    </div>),
    longTerm: (<div>
      <List>
        <Item
          text={`Réflexions sur l'aménagement des trottoirs et des accès aux établissements publics et commerces pour les personnes à mobilité réduite`}
        />
      </List>
    </div>)
  },
  {
    title: 'Aménagement des espaces publics et sportifs',
    shortTerm:  (<div>
      <List>
        <Item
          text={`Mettre à disposition des poubelles et des toutounettes`}
        />
        <Item
          text={`Création d'évènements culturels par exemple :`}
        />
        <Item
          text={`Projections en plein air à la Mare Gautier (PNR), mini festival film en plein air sur une semaine en consultation avec les associations`}
        />
        <Item
          text={`Mare Gautier :`}
        />
        <Item
          text={`Réhabilitation et clôture anti-sangliers du terrain de foot`}
        />
        <Item
          text={`Fontaine à eau`}
        />
        <Item
          text={`Installation du « workout (espace culture physique de plein air) » demandé par la commission jeunes en 2020`}
        />
      </List>
    </div>),
    longTerm: (<div>
      <List>
        <Item
          text={`Mise aux normes sanitaires de la cuisine de la maison du village`}
        />
        <Item
          text={`Réflexion sur un lieu de rencontre pour les jeunes (voir “nos solidarités”)`}
        />
        <Item
          text={`Création d'un lieu couvert pour accueillir les randonneurs, cyclistes  et festivités`}
        />
        <Item
          text={`Consultation en vue de la création d'un complexe multisports vers le terrain de foot`}
        />
      </List>
    </div>)
  },
  {
    title: 'Création dun espace de coworking',
    shortTerm: '',
    longTerm: (<div>
      <List>
        <Item
          text={`Consultation dans le but de créer un espace de coworking avec un lieu de convivialité intergénérationnel (café, salon …)`}
        />
      </List>
    </div>)
  },
  // Nos solidarités
  {
    title: 'Instaurer le quotient familial pour la cantine, la garderie et le centre de loisirs',
    shortTerm: '',
    longTerm: ''
  },
  {
    title: `Développer le Centre Communal d'Action Sociale`,
    shortTerm: (<div>
      <List>
        <Item
          text={`Coordonner les différents services d'aide existants aux alentours pour les personnes en perte d'autonomie`}
        />
        <Item
          text={`Créer une fiche où sont répertoriés tous les numéros importants`}
        />
        <Item
          text={`Créer une permanence deux mercredis matin par mois et des visites à domicile sur rendez vous`}
        />
        <Item
          text={`signature d'une convention avec la CAF pour permettre un accompagnement sur l'élaboration des dossiers et obtenir des subventions`}
        />
        <Item
          text={`Permettre au personnel administratif et technique de suivre des formations`}
        />
      </List>
    </div>),
    longTerm: (<div>
      <List>
        <Item
          text={`Projet de la création d'un espace de vie social avec un bureau de  permanence multifonction (assistante sociale, écoute jeunes) en partenariat avec la CAF`}
        />
        <Item
          text={`Obtention d'un agrément CAF pour assurer sa pérennisation`}
        />
      </List>
    </div>)
  },
  {
    title: `Faire évoluer l'accueil des 3-18 ans`,
    shortTerm: (<div>
      <div>{`Centre aéré :`}</div>
      <List>
        <Item
          text={`Etude de la plage d'ouverture du centre aéré`}
        />
        <Item
          text={`Renforcer les liens entre le centre aéré et les ressources`}
        />
        <Item
          text={`humaines (après-midi jeux de société avec les aînés, intervention de bénévoles pour la découverte d'un sport) `}
        />
        <Item
          text={`environnementales du village (sorties en forêt avec un guide, visite des jardins partagés, de la miellerie, de la caserne des pompiers …)`}
        />
        <Item
          text={`Mutualiser les sorties avec les autres centres de loisirs des communes avoisinantes et coordonner les moyens de transport`}
        />
      </List>
      <div>{`Accueil des 11-18ans :`}</div>
      <List>
        <Item
          text={`Répertorier les diverses solutions  existantes aux alentours (Rambouillet, Auffargis) susceptibles d'accueillir nos jeunes (11-18 ans)`}
        />
        <Item
          text={`Diffuser l'information`}
        />
        <Item
          text={`Réflexion sur la mutualisation des moyens de transports`}
        />
      </List>
    </div>),
    longTerm: (<div>
      <List>
        <Item
          text={`Réflexion sur la création d'un nouveau bâtiment dédié au centre de loisirs plus proche de la nature`}
        />
        <Item
          text={`Réflexion sur la création d'un espace jeune`}
        />
      </List>
    </div>)
  },
  {
    title: 'Diversifier les modes de garde',
    shortTerm: '',
    longTerm: (<div>
      <List>
        <Item
          text={`Etude de la création d'une micro-crèche`}
        />
      </List>
    </div>)
  },
  {
    title: `Renforcer l'offre de santé`,
    shortTerm: (<div>
      <List>
        <Item
          text={`Favoriser l'installation d'un médecin`}
        />
      </List>
    </div>),
    longTerm: (<div>
      <List>
        <Item
          text={`Préparer l'offre de santé à venir en lien avec les praticiens en exercice ( réflexion sur la création d'une maison de santé)`}
        />
      </List>
    </div>) 
  },
  // Notre environnement
  {
    title: 'Installer le compostage collectif',
    shortTerm: (<div>
      <List>
        <Item
          text={`Mettre en place une zone test  près des poubelles de la place du Gros Billot`}
        />
      </List>
    </div>),  
    longTerm: ''
  },
  {
    title: 'Encourager la mobilité piétonne',
    shortTerm: (<div>
      <List>
        <Item
          text={`Installation de bancs sur l'ensemble du village`}
        />
        <Item
          text={`Abri bus aux Bruyères`}
        />
      </List>
    </div>),
    longTerm: (<div>
      <List>
        <Item
          text={`Réhabiliter la sente de Magonnet`}
        />
        <Item
          text={`Créer un sentier patrimonial sur le territoire de la commune reliant les ouvrages et bâtiments remarquables`}
        />
        <Item
          text={`Eclairage public muni de détecteur de mouvement (pollution nocturne et sécurité)`}
        />
      </List>
    </div>)
  },
  {
    title: 'Faciliter les mobilités douces (vélos)',
    shortTerm: (<div>
      <List>
        <Item
          text={`Mise en place d'espaces de stationnement `}
        />
      </List>
    </div>),
    longTerm: (<div>
      <List>
        <Item
          text={`Etude de la faisabilité de la liaison centre du village / pistes cyclables existantes et centre du village / quartier des Bruyères`}
        />
      </List>
    </div>)
  },
  {
    title: `Arboriser la cour de l'école`,
    shortTerm: (<div>
      <List>
        <Item
          text={`Plantation d'arbres dans la cour des maternelles (ombrage)`}
        />
      </List>
    </div>),
    longTerm: ''
  },
  {
    title: 'Mettre en plan le plan vigilance incendie',
    shortTerm: (<div>
      <List>
        <Item
          text={`Réalisation et distribution d'un document résumant les diverses conduites à tenir en cas d'incendie`}
        />
      </List>
    </div>),
    longTerm: ''
  },
  {
    title: 'Lutter contre les nuisances sonores et de circulation',
    shortTerm: '',
    longTerm: (<div>
      <List>
        <Item
          text={`Etude de la mise en place de radars sonores (motos)`}
        />
        <Item
          text={`Etude de l'optimisation de la circulation au centre du village`}
        />
      </List>
    </div>)
  },
  {
    title: 'Préserver le cadre urbain et le patrimoine',
    shortTerm: (<div>
      <List>
        <Item
          text={`Végétalisation du cimetière`}
        />
      </List>
    </div>),
    longTerm: ''
  },
  // Les équilibres financiers
  {
    title: 'gérer les coûts et maîtriser les finances',
    shortTerm: '',
    longTerm: '',
    learnMore: (<div>
      <List>
        <Item
          text={`Maintenir le taux des taxes locales`}
        />
        <Item
          text={`Pas de démarrage de travaux avant la notification de subventions`}
        />
      </List>
    </div>),
  },
  {
    title: 'Renforcer la coopération de la commune avec les acteurs territoriaux',
    subTitle: (<div>
      <List>
        <Item
          text={`Rambouillet territoires (RT78)`}
        />
        <Item
          text={`Etat ( ministère des finances département ruralité)`}
        />
        <Item
          text={`Région`}
        />
        <Item
          text={`département`}
        />
        <Item
          text={`Syndicat Intercommunal de Collecte et de traitements des Ordures Ménagères (SICTOM )`}
        />
        <Item
          text={`Syndicat Intercommunal pour le Traitement et la Valorisation des déchets (SITREVA)`}
        />
      </List>
    </div>),
    shortTerm: '',
    longTerm: '',
    learnMore: (<div>
      <List>
        <Item
          text={`https://WWW.collectivites-locales.gouv.fr/finances-locales/obtenir-des-subventions`}
        />
        <Item
          text={`https://www.iledefrance.fr/aides-et-appels-a-projets/contrat-rural#:~:text=de%20coop%C3%A9ration%20intercommunale)-,Partager,-Partager%20sur%20Facebook`}
        />
      </List>
    </div>)
  },
  {
    title: 'Rechercher des financements complémentaires',
    subTitle: (<div>
      <List>
        <Item
          text={`Agence de l'Environnement et de la Maîtrise de l'Energie (ADEME)`}
        />
        <Item
          text={`Agence Nationale pour l'Amélioration de l'Habitat (ANAH))`}
        />
        <Item
          text={`Centre National du Développement du Sport (CNDS)`}
        />
        <Item
          text={`Agence Locale de l'énergie et du climat (ALEC)`}
        />
        <Item
          text={`Caisse d'allocations familiales ( CAF)`}
        />
        <Item
          text={`Parc Naturel Régional de la Haute Vallée de Chevreuse (PNR)`}
        />
      </List>
    </div>),
    shortTerm: '',
    longTerm: '',
    learnMore: (<div>
      <List>
        <Item
          text={`https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.parc-naturel-chevreuse.fr/le-fonctionnement/les=aides&ved=2ahUKEwjejYCx3ZaEAxUTT6QEHUaPBIIQFnoECBUQAQ&usg=AOvVaw1cDiuW3TVBR1KCldPr6ztz`}
        />
      </List>
    </div>)
  },
];
