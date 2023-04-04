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
          heading="Pondicherry"
          image={img1}
          text="Pondicherry ,now known as Puducherry is the capital and most
          populous city of the Union Territory of Puducherry in India.
          The city is in the Puducherry district on the southeast coast of
          India and is surrounded by the Bay of Bengal to the east and the state
          of Tamil Nadu, with which it shares most of its culture, heritage,
          and language Pondicherry waterfront circa 1900 Puducherry,
          formerly known as Pondicherry, gained its significance as 
          'The French Riviera of the East' after the advent of French colonialisation in India. 
          Puducherry is the Tamil interpretation of 'new town' and mainly derives from 'Poduke',
          the name of the marketplace or 'port town' for Roman trade in the 1st century,
          as mentioned in The Periplus of the Erythraean Sea. 
          The settlement was once an abode of learned scholars versed in the Vedas,
          hence it was also known as Vedapuri. The history of Puducherry 
          can broadly be classified into two periods: pre-colonial and colonial.
          The pre-colonial period started with the reign of the Pallavas,
          who ruled the empire from 325 to 900, after which came the Chola dynasty,
          from 900 to 1279, and the Pandya dynasty, from 1279 to 1370. 
            "/>
            <Tripdata
            heading="ooty"
            image={img2}
            text="Ooty officially known as Udhagamandalam is a town and 
            a municipality in the Nilgiris district of the South Indian 
            state of Tamil Nadu. It is located 86 km (53 mi) north west of
            Coimbatore ,100 km (65 mi) north west of Tirupur , 
            128 km (80 mi) south of Mysore and is the headquarters of the Nilgiris district.
            It is a popular hill station located in the Nilgiri Hills. 
            It is popularly called the 'Queen of Hill Stations'.
            It was the summer capital of the Madras Presidency. 
            Originally occupied by the Badaga and Toda people, the area 
            came under the rule of the East India Company at the end of the 18th century.
             The economy is based on tourism and agriculture,
            along with the manufacture of medicines and photographic film.
              "/>
            <Tripdata
          heading="Kodaikanal"
          image={img3}
          text="Kodaikanal is a hill station which is located
          in Dindigul district in the state of Tamil Nadu, India.
          Its name in the Tamil language means 'The Gift of the Forest'.
          Kodaikanal is referred to as the 'Princess of Hill stations'
          and has a long history as a retreat and tourist destination.
          Kodaikanal Main Town covered with mistKodaikanal
          was established in 1845 as a refuge from the high temperatures
          and tropical diseases of the plains.Much of the local economy 
          is based on the hospitality industry serving tourism.As of 2011, 
          the city had a population of 36, 501.It is not known who first 
          used this name or what they intended it to mean.
          The word Kodaikanal is an amalgamation of two words: kodai and kanal.
            "/>    
          
        </div>
    </div>
  )
}

export default Trip
