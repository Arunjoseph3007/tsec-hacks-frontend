
import Navbar from '@/components/Navbar';
import Room from '@/components/Room';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Post from '../components/Post';


export default function FindRoomate () {
  return <>
<Navbar/>
  <Room/>

<AwesomeSlider bullets={false}>
    <div><Post/></div>
    <div><Post/></div>
    <div><Post/></div>
    
  </AwesomeSlider>
  
  </>
}
