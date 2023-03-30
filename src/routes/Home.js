import Destination from '../Components/Destination';
import Footer from '../Components/Footer';
import Slide from '../Components/Slide';
import Trip from '../Components/Trip';


const Home = () => {
  return (
    <>
    <Slide
    cName="banner"
    slideImg="images/pexels-eberhard-grossgasteiger-691668.jpg"
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
