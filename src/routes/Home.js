import Destination from '../Components/Destination';
import Footer from '../Components/Footer';
import Slide from '../Components/Slide';
import Trip from '../Components/Trip';
import img1 from '../images/pexels-eberhard-grossgasteiger-691668.jpg';


const Home = () => {
  return (
    <>
    <Slide
    cName="banner"
    slideImg={img1}
    title="Your Journey Starts"
    text="Choose Your Desired Journey"
    btntext="Travel"
    url="/"
    btnclass="show"
    />
    <Destination/>
    <Trip/>
    <Footer/>
    </>

  )
}

export default Home
