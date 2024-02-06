import image from '../assets/PHOTO GROUPE.jpg';

const backgroundImage = `url('${image}')`;
console.log(backgroundImage);
export default () => <div className="Background" style={{ backgroundImage }}/>;
