import FavoriteIcon from '@mui/icons-material/FavoriteTwoTone';
import SunIcon from '@mui/icons-material/WbSunnyTwoTone';


export default () => <div id='footer' style={{ padding: 20, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
  <div style={{ marginRight: 5 }}>Codé avec</div>
  <FavoriteIcon style={{ fontSize: 20 }} />
  <div style={{ marginLeft: 5, marginRight: 5 }}>en Californie</div>
  <SunIcon style={{ fontSize: 25 }} />
</div>;
