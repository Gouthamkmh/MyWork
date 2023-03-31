import Tripdata from "./Tripdata"
import "./Tripstyle.css"
import img1 from '../images/one.jpg';
import img2 from '../images/pexels-josh-hild-2448749.jpg';
import img3 from '../images/pexels-pixabay-33317.jpg';
const Trip = () => {
  return (
    <div className='trip'>
        <h1> Recent Trips</h1>
        <p> Discover Your Destination</p>
        <div className="tripcard">
          <Tripdata
          heading="kodaikanal"
          image={img1}
          text="heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
            heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
            heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
            heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
            heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
            heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
            heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
            heyheyheyheyheyheyheyheyheyheyheyheyheyheyyheyheyheyheyhey
            heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
            heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
            heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
            heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
            heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
            heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
            heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
            heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
            heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
            heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
            heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
            heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
            "/>
            <Tripdata
            heading="ooty"
            image={img2}
            text="heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
              heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
              heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
              heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
              heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
              heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
              heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
              heyheyheyheyheyheyheyheyheyheyheyheyheyheyyheyheyheyheyhey
              heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
              heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
              heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
              heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
              heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
              heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
              heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
              heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
              heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
              heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
              heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
              heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
              "/>
            <Tripdata
          heading="Pondicherry"
          image={img3}
          text="heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
            heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
            heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
            heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
            heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
            heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
            heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
            heyheyheyheyheyheyheyheyheyheyheyheyheyheyyheyheyheyheyhey
            heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
            heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
            heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
            heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
            heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
            heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
            heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
            heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
            heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
            heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
            heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
            heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey
            "/>    
          
        </div>
    </div>
  )
}

export default Trip
