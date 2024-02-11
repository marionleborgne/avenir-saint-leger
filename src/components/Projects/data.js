import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import CheckIcon from '@mui/icons-material/Check';
import CottageIcon from '@mui/icons-material/CottageTwoTone';
import DiversityIcon from '@mui/icons-material/Diversity1TwoTone';
import LeafIcon from '@mui/icons-material/EnergySavingsLeafTwoTone';
import SavingsIcon from '@mui/icons-material/SavingsTwoTone';
import ArrowIcon from '@mui/icons-material/SubdirectoryArrowRight';
import { isMobile } from 'react-device-detect';

const marginRight = '20px';
const marginBottom = isMobile ? '20px' : 0;
const fontSize = isMobile ? 50 : 60;

const Item = ({ text, icon, sx }) => (
  <ListItem sx={sx}>
    {icon ? (
      <ListItemIcon>
        {icon}
      </ListItemIcon>
    ) : null}
    <ListItemText
      sx={{ color: '#000' }}
      primary={text}
    />
  </ListItem>
);

const CheckedItem = ({ text }) => <Item text={text} icon={<CheckIcon />} />;
const SubCheckedItem = ({ text }) => <Item text={text} icon={<ArrowIcon fontSize='small' />} />;
const LinkedItem = ({ text, link }) => (
  <Item
    text={
      <a href={link} target='_blank' rel="noreferrer">
        {text}
      </a>
    }
    icon={<CheckIcon />} />
);

export default [
  {
    section: 'Renforcer la qualité de vie',
    icon: <CottageIcon style={{ fontSize, marginRight, marginBottom }} />,
    projects: [
      {
        title: 'Participation citoyenne',
        shortTerm: (
          <List>
            <Item text={`Réunions régulières des commissions mixtes élus-citoyens relatives :`} />
            <CheckedItem
              text={`À l'urbanisme, aux finances,  aux affaires scolaires, aux affaires sociales, à l'environnement`}
            />
            <CheckedItem
              text={`Commission des fêtes (forum des associations plus festif)`}
            />
            <CheckedItem
              text={`Commission jeunesse (proposer un salon des métiers, et forum d'orientation, réunion  avec un expert PARCOURS'SUP, accompagnement)`}
            />
            <CheckedItem
              text={`Consultations  citoyennes pour des projets précis (évolution du centre aéré, cantine, micro-crèche, réflexion sur la sécurité du village (vigilance citoyenne…), création d'un espace multisports)`}
            />
          </List>
        ),
        longTerm: ''
      },
      {
        title: `Diffusion de l'information`,
        shortTerm: (
          <List>
            <CheckedItem
              text={`Panneaux d'affichage numérique`}
            />
            <CheckedItem
              text={`Créer un mur numérique pour échanger sur les ressources et les besoins`}
            />
            <CheckedItem
              text={`Valorisation des commerces grâce à une vitrine numérique`}
            />
          </List>
        ),
        longTerm: ''
      },
      {
        title: 'Accueil des enfants',
        shortTerm: (
          <List>
            <Item text={`École :`} />
            <CheckedItem
              text={`Consultation sur les horaires scolaires et périscolaires`}
            />
            <CheckedItem
              text={`Mise en place d'espaces ludiques peints au sol dans la cour de l'école`}
            />
            <Item text={`Centre aéré :`} />
            <CheckedItem
              text={`Renforcer les liens entre le centre aéré et les ressources :`}
            />
            <SubCheckedItem
              text={`Humaines (après-midi jeux de société avec les aînés, intervention de bénévoles pour la découverte d'un sport)`}
            />
            <SubCheckedItem
              text={`Environnementales du village (sorties en forêt avec un guide, visite des jardins partagés, de la miellerie, de la caserne des pompiers …)`}
            />
            <CheckedItem
              text={`Mutualiser les sorties avec les autres centres de loisirs des communes avoisinantes`}
            />
            <CheckedItem
              text={`Etude de la plage d'ouverture du centre aéré`}
            />
          </List>
        ),
        longTerm: (
          <List>
            <CheckedItem
              text={`Réflexion sur l'agrandissement de la cantine et la création d'une cuisine dans la cantine de l'école pour la transformation des produits sur place`}
            />
            <CheckedItem
              text={`Réflexion sur la création d' un bâtiment dédié au centre de loisirs`}
            />
          </List>
        )
      },
      {
        title: 'Sécurisation de la circulation',
        shortTerm: (
          <List>
            <CheckedItem
              text={`Déplacer certains passages piétons vers des endroits plus sûrs`}
            />
            <CheckedItem
              text={`Mise en place d'éclairage sur les passages piétons`}
            />
            <CheckedItem
              text={`Matérialiser les zones de vitesse 30km/h`}
            />
          </List>
        ),
        longTerm: (
          <List>
            <CheckedItem
              text={`Réflexions sur l'aménagement des trottoirs et des accès aux établissements publics et commerces pour les personnes à mobilité réduite`}
            />
          </List>
        )
      },
      {
        title: 'Aménagement des espaces publics et sportifs',
        shortTerm: (
          <List>
            <Item
              text={`Création d'évènements culturels par exemple :`}
            />
            <CheckedItem
              text={`Projections en plein air à la Mare Gautier (PNR), mini festival film en plein air sur une semaine en consultation avec les associations`}
            />
            <Item
              text={`Mare Gautier :`}
            />
            <CheckedItem
              text={`Réhabilitation et clôture anti-sangliers du terrain de foot`}
            />
            <CheckedItem
              text={`Fontaine à eau`}
            />
            <CheckedItem
              text={`Installation du « workout (espace culture physique de plein air) » demandé par la commission jeunes en 2020`}
            />
            <Item
              text={`Mise à disposition de poubelles et de toutounettes`}
            />
          </List>
        ),
        longTerm: (
          <List>
            <CheckedItem
              text={`Mise aux normes sanitaires de la cuisine de la maison du village`}
            />
            <CheckedItem
              text={`Réflexion sur un lieu de rencontre pour les jeunes (voir “nos solidarités”)`}
            />
            <CheckedItem
              text={`Création d'un lieu couvert pour accueillir les randonneurs, cyclistes  et festivités`}
            />
            <CheckedItem
              text={`Consultation en vue de la création d'un complexe multisports vers le terrain de foot`}
            />
          </List>
        )
      },
      {
        title: `Création d'un espace de coworking`,
        shortTerm: '',
        longTerm: (
          <List>
            <CheckedItem
              text={`Consultation dans le but de créer un espace de coworking avec un lieu de convivialité intergénérationnel (café, salon …)`}
            />
          </List>
        )
      }
    ]
  },
  {
    section: 'Préserver notre environnement',
    icon: <LeafIcon style={{ fontSize, marginRight, marginBottom }} />,
    projects: [
      {
        title: 'Installer le compostage collectif',
        shortTerm: (
          <List>
            <CheckedItem
              text={`Mettre en place une zone test  près des poubelles de la place du Gros Billot`}
            />
          </List>
        ),
        longTerm: ''
      },
      {
        title: 'Encourager la mobilité piétonne',
        shortTerm: (
          <List>
            <CheckedItem
              text={`Installation de bancs sur l'ensemble du village`}
            />
            <CheckedItem
              text={`Abri bus aux Bruyères`}
            />
          </List>
        ),
        longTerm: (
          <List>
            <CheckedItem
              text={`Réhabiliter la sente de Magonnet`}
            />
            <CheckedItem
              text={`Créer un sentier patrimonial sur le territoire de la commune reliant les ouvrages et bâtiments remarquables`}
            />
            <CheckedItem
              text={`Eclairage public muni de détecteur de mouvement (pollution nocturne et sécurité)`}
            />
          </List>
        )
      },
      {
        title: 'Faciliter les mobilités douces (vélos)',
        shortTerm: (
          <List>
            <CheckedItem
              text={`Mise en place d'espaces de stationnement `}
            />
          </List>
        ),
        longTerm: (
          <List>
            <CheckedItem
              text={`Etude de la faisabilité de la liaison centre du village / pistes cyclables existantes et centre du village / quartier des Bruyères`}
            />
          </List>
        )
      },
      {
        title: `Arboriser la cour de l'école`,
        shortTerm: (
          <List>
            <CheckedItem
              text={`Plantation d'arbres dans la cour des maternelles (ombrage)`}
            />
          </List>
        ),
        longTerm: ''
      },
      {
        title: 'Mettre en plan le plan vigilance incendie',
        shortTerm: (
          <List>
            <CheckedItem
              text={`Réalisation et distribution d'un document résumant les diverses conduites à tenir en cas d'incendie`}
            />
          </List>
        ),
        longTerm: ''
      },
      {
        title: 'Lutter contre les nuisances sonores et de circulation',
        shortTerm: '',
        longTerm: (
          <List>
            <CheckedItem
              text={`Etude de la mise en place de radars sonores (motos)`}
            />
            <CheckedItem
              text={`Etude de l'optimisation de la circulation au centre du village`}
            />
          </List>
        )
      },
      {
        title: 'Préserver le cadre urbain et le patrimoine',
        shortTerm: (
          <List>
            <CheckedItem
              text={`Végétalisation du cimetière`}
            />
          </List>
        ),
        longTerm: ''
      }
    ]
  },
  {
    section: 'Développer le social',
    icon: <DiversityIcon style={{ fontSize, marginRight, marginBottom }} />,
    projects: [
      {
        title: 'Instaurer le quotient familial pour la cantine, la garderie et le centre de loisirs',
        content: `Toutes les familles de Saint Léger en Yvelines n'ont pas les mêmes revenus. Pour une contribution plus juste et adaptée des charges inhérentes à la cantine, garderie et centre aéré, nous mettrons en place le quotient familial.`,
        shortTerm: '',
        longTerm: ''
      },
      {
        title: `Développer le Centre Communal d'Action Sociale`,
        shortTerm: (
          <List>
            <CheckedItem
              text={`Coordonner les différents services d'aide existants aux alentours pour les personnes en perte d'autonomie`}
            />
            <CheckedItem
              text={`Créer une fiche où sont répertoriés tous les numéros importants`}
            />
            <CheckedItem
              text={`Créer une permanence deux mercredis matin par mois et des visites à domicile sur rendez vous`}
            />
            <CheckedItem
              text={`signature d'une convention avec la CAF pour permettre un accompagnement sur l'élaboration des dossiers et obtenir des subventions`}
            />
            <CheckedItem
              text={`Permettre au personnel administratif et technique de suivre des formations`}
            />
          </List>
        ),
        longTerm: (
          <List>
            <CheckedItem
              text={`Projet de la création d'un espace de vie social avec un bureau de  permanence multifonction (assistante sociale, écoute jeunes) en partenariat avec la CAF`}
            />
            <CheckedItem
              text={`Obtention d'un agrément CAF pour assurer sa pérennisation`}
            />
          </List>
        )
      },
      {
        title: `Faire évoluer l'accueil des 3-18 ans`,
        shortTerm: (<List>
          <Item text={`Centre aéré :`} />
          <CheckedItem
            text={`Etude de la plage d'ouverture du centre aéré`}
          />
          <CheckedItem
            text={`Renforcer les liens entre le centre aéré et les ressources :`}
          />
          <SubCheckedItem
            text={`Humaines (après-midi jeux de société avec les aînés, intervention de bénévoles pour la découverte d'un sport)`}
          />
          <SubCheckedItem
            text={`Environnementales du village (sorties en forêt avec un guide, visite des jardins partagés, de la miellerie, de la caserne des pompiers …)`}
          />
          <CheckedItem
            text={`Mutualiser les sorties avec les autres centres de loisirs des communes avoisinantes et coordonner les moyens de transport`}
          />
          <Item text={`Accueil des 11-18ans :`} />
          <CheckedItem
            text={`Répertorier les diverses solutions  existantes aux alentours (Rambouillet, Auffargis) susceptibles d'accueillir nos jeunes (11-18 ans)`}
          />
          <CheckedItem
            text={`Diffuser l'information`}
          />
          <CheckedItem
            text={`Réflexion sur la mutualisation des moyens de transports`}
          />
        </List>
        ),
        longTerm: (
          <List>
            <CheckedItem
              text={`Réflexion sur la création d'un nouveau bâtiment dédié au centre de loisirs plus proche de la nature`}
            />
            <CheckedItem
              text={`Réflexion sur la création d'un espace jeune`}
            />
          </List>
        )
      },
      {
        title: 'Diversifier les modes de garde',
        shortTerm: '',
        longTerm: (
          <List>
            <CheckedItem
              text={`Etude de la création d'une micro-crèche`}
            />
          </List>
        )
      },
      {
        title: `Renforcer l'offre de santé`,
        shortTerm: (
          <List>
            <CheckedItem
              text={`Favoriser l'installation d'un médecin`}
            />
          </List>
        ),
        longTerm: (
          <List>
            <CheckedItem
              text={`Préparer l'offre de santé à venir en lien avec les praticiens en exercice ( réflexion sur la création d'une maison de santé)`}
            />
          </List>
        )
      }
    ]
  },
  {
    section: 'Maîtriser les finances',
    icon: <SavingsIcon style={{ fontSize, marginRight, marginBottom }} />,
    projects: [
      {
        title: 'Gérer les coûts et maîtriser les finances',
        content: (
          <List>
            <CheckedItem
              text={`Maintenir le taux des taxes locales`}
            />
            <CheckedItem
              text={`Pas de démarrage de travaux avant la notification de subventions`}
            />
          </List>
        ),
      },
      {
        title: 'Renforcer la coopération de la commune avec les acteurs territoriaux',
        content: (
          <List>
            <CheckedItem
              text={`Rambouillet territoires (RT78)`}
            />
            <CheckedItem
              text={`Etat (ministère des finances département ruralité)`}
            />
            <CheckedItem
              text={`Région`}
            />
            <CheckedItem
              text={`Département`}
            />
            <CheckedItem
              text={`Syndicat Intercommunal de Collecte et de traitements des Ordures Ménagères (SICTOM )`}
            />
            <CheckedItem
              text={`Syndicat Intercommunal pour le Traitement et la Valorisation des déchets (SITREVA)`}
            />
          </List>
        ),
        shortTerm: '',
        longTerm: '',
        learnMore: (
          <List>
            <LinkedItem
              text='Subventions des collectivités locales'
              link={`https://www.collectivites-locales.gouv.fr/finances-locales/obtenir-des-subventions`}
            />
            <LinkedItem
              text='Aides et appels à projets'
              link={`https://www.iledefrance.fr/aides-et-appels-a-projets/contrat-rural`}
            />
          </List>
        )
      },
      {
        title: 'Rechercher des financements complémentaires',
        content: (
          <List>
            <CheckedItem
              text={`Agence de l'Environnement et de la Maîtrise de l'Energie (ADEME)`}
            />
            <CheckedItem
              text={`Agence Nationale pour l'Amélioration de l'Habitat (ANAH))`}
            />
            <CheckedItem
              text={`Centre National du Développement du Sport (CNDS)`}
            />
            <CheckedItem
              text={`Agence Locale de l'énergie et du climat (ALEC)`}
            />
            <CheckedItem
              text={`Caisse d'allocations familiales ( CAF)`}
            />
            <CheckedItem
              text={`Parc Naturel Régional de la Haute Vallée de Chevreuse (PNR)`}
            />
          </List>
        ),
        learnMore: (
          <List>
            <LinkedItem
              text={`Aides du Parc Naturel Régional de la Haute Vallée de Chevreuse (PNR)`}
              link='https://www.parc-naturel-chevreuse.fr/le-fonctionnement/les-aides'
            />
          </List>
        )
      }
    ]
  }
];
