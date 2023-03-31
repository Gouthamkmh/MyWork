import Slide from '../Components/Slide';
import Footer from "../Components/Footer"
import Form from '../Components/Form';
import img1 from '../images/pexels-shukhrat-umarov-1534411.jpg';

const Contact = () => {
  return (
    <>
    <Slide
    cName="banner-last"
    slideImg={img1}
    title="Contact"/>
    <Form/>
    <Footer/>
    </>
  )
}

export default Contact
