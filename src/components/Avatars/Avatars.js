import SANDRINE from '../../assets/avatars/SANDRINE LE BORGNE.jpg';
import ALAIN from '../../assets/avatars/ALAIN ZALMAN.jpg';
import CELINE from '../../assets/avatars/CELINE BAUDIN.jpg';
import CHRISTELLE from '../../assets/avatars/CHRISTELLE SAINT-MEULT.jpg';
import DELPHINE from '../../assets/avatars/DELPHINE RAINEAU.jpg';
import ERIC from '../../assets/avatars/ERIC ALLOUCHE.jpg';
import EVELYNE from '../../assets/avatars/EVELYNE BRIQUET.jpg';
import HUBERT from '../../assets/avatars/HUBERT MARTEAU.jpg';
import LAURENCE_P from '../../assets/avatars/LAURENCE PARISOT.jpg';
import LAURENCE_R from '../../assets/avatars/LAURENCE RENAULT.jpg';
import LEO from '../../assets/avatars/LEO LHOSTE.jpg';
import MARC from '../../assets/avatars/MARC MENDOWSKI.jpg';
import MARIE from '../../assets/avatars/MARIE COLLIN FARLET.jpg';
import MF from '../../assets/avatars/MARIE FRANÇOISE SELLA.jpg';
import OLIVIER from '../../assets/avatars/OLIVIER FAIVRE DUBOZ.jpg';
import RONAN from '../../assets/avatars/RONAN BEZIERS LA FOSSE.jpg';
import STEPHANE from '../../assets/avatars/STEPHANE VERON.jpg';

const avatars = [
  SANDRINE,
  ALAIN,
  CELINE,
  CHRISTELLE,
  DELPHINE,
  ERIC,
  EVELYNE,
  HUBERT,
  LAURENCE_P,
  LAURENCE_R,
  LEO,
  MARC,
  MARIE,
  MF,
  OLIVIER,
  RONAN,
  STEPHANE
];

export default () => avatars.map(
  (avatar, key) => <img key={key} src={avatar} alt='avatar' style={{ borderRadius: '50%', width: '120px' }} />
);
