import DestData from "./DestData"
import "./Deststyle.css"
import img1 from '../images/hilly.jpg';
import img2 from '../images/nature.jpg';
import img3 from '../images/kodai.jpg';
import img4 from '../images/hill.jpg';
import img5 from '../images/beach.jpg';
import img6 from '../images/Pondy.jpg';

const Destination = () => {
    return(
        <>
        <div className="Destination">
            <h1> Popular Destinations</h1>
            <p> Opportunity to see the Unseen</p>
           <DestData
            className="second-dest" 
            heading="OOty -Queen of Hills"
            img1={img1}
            img2={img2}
            text="Ooty  officially known as Udhagamandalam is a town and a municipality in the Nilgiris district of the South Indian state of
            Tamil Nadu. It is located 86 km (53 mi) north west of Coimbatore ,100 km (65 mi) north west of Tirupur ,
            128 km (80 mi) south of Mysore and is the headquarters of the Nilgiris district.
            It is a popular hill station located in the Nilgiri Hills. It is popularly called the 'Queen of Hill Stations'. 
            It was the summer capital of the Madras Presidency.
            
            Originally occupied by the Badaga and Toda people,
            the area came under the rule of the East India Company at the end of the 18th century. 
            The economy is based on tourism and agriculture, along with the manufacture of medicines and photographic film.
            The town is connected by the Nilgiri ghat roads and Nilgiri Mountain Railway. 
            Its natural environment attracts tourists and it is a popular summer destination.
            In 2011, the town had a population of 88,430.
            
            The origin of the name is obscure.
            The first known written mention of the place is given as Wotokymund in a letter of March 1821 to the Madras Gazette from 
            an unknown correspondent.In early times it was called Ottakal Mandu. 
            The name probably changed under British rule from Udhagamandalam to Ootacamund, and later was shortened to Ooty.
            
            The first part of the name (Ootaca) is probably a corruption of the local name for the central region of the Nilgiri Plateau.
            "
            />

            <DestData 
            className="first-dest"
            heading="Kodaikanal - Princess of Hills"
            img1={img3}
            img2={img4}
            text="Kodaikanal is a hill station which is located in Dindigul
            district in the state of Tamil Nadu, India.Its name in the Tamil
            language means 'The Gift of the Forest'.Kodaikanal is referred to
            as the 'Princess of Hill stations' and has a long history as a 
            retreat and tourist destination.
            
            Kodaikanal Main Town covered with mistKodaikanal was established in
            1845 as a refuge from the high temperatures and tropical diseases
            of the plains.Much of the local economy is based on the hospitality
            industry serving tourism.As of 2011, the city had a population of 36,
            501.It is not known who first used this name or what they intended it
            to mean.
            
            The word Kodaikanal is an amalgamation of two words: kodai and kanal. 
            The Tamil language has at least four possible interpretations of the
            name Kodaikanal.By pronouncing the first syllable of Kodaikanal with
            a long Tamil 'O', as in koe-dei (கோடை), it means 'summer', whilst
            the final two syllables kanal (காணல்) means 'to see', rendering 
            Kodaikanal as a 'place to see in summer'. 
            
            Tourism has been impacted by industrial pollution issues including the
            closure of a mercury factory owned by Unilever's Indian subsidiary
            Hindustan Unilever after evidence of widespread mercury pollution.
            To date no proper clean-up operation has been mounted."
            />
            
            <DestData 
            className="second-dest"
            heading="Pondicherry - Paris of India"
            img1={img5}
            img2={img6}
            text="Pondicherry , now known as Puducherry  is the capital and most populous city of the Union Territory of Puducherry in India.
            The city is in the Puducherry district on the southeast coast of India and is surrounded by the Bay of Bengal to the east and the state of Tamil Nadu,
            with which it shares most of its culture, heritage, and language
            
            Pondicherry waterfront circa 1900
            Puducherry, formerly known as Pondicherry, gained its significance as 'The French Riviera of the East'
            after the advent of French colonialisation in India. Puducherry is the Tamil interpretation of 'new town' 
            and mainly derives from 'Poduke', the name of the marketplace or 'port town' for Roman trade in the 1st century, 
            as mentioned in The Periplus of the Erythraean Sea. The settlement was once an abode of learned scholars versed in the Vedas,
            hence it was also known as Vedapuri.
            
            The history of Puducherry can broadly be classified into two periods: pre-colonial and colonial. 
            The pre-colonial period started with the reign of the Pallavas, who ruled the empire from 325 to 900, 
            after which came the Chola dynasty, from 900 to 1279, and the Pandya dynasty, from 1279 to 1370.
            During the 14th century, the city was under the rule of Naikship of Gingee of the Vijayanagara Empire,
            from 1370 to 1614, when it was conquered by the Sultan of Bijapur, who ruled it from 1614 to 1638.
            It was during this period that Portuguese and Danish merchants used it as a trading center.
            
            The colonial period began with the Portuguese, the first Europeans to conduct trade in textiles, in 1521, 
            and subsequently, the Dutch and the Danes in the 17th century.
            
            The prospering trade of Puducherry attracted the French, and the predominant feature of the town was laid by 
            the French pioneer Francois Martin in the form of a French settlement, in 1674. In 1693,
            Puducherry was captured by the Dutch and subsequently restored in 1699, with the Treaty of Ryswick.
            
            The French acquired Mahe in 1720, Yanam in 1731, and Karaikal in 1738. The British captured the 
            city from the French but returned it following the Treaty of Paris, in 1763. This Anglo-French war continued until 1814,
            where France found itself in control of the settlements of Puducherry, Mahe, Yanam, Karaikal, and Chandernagar,
            even during the British period, until 1954. It was a reign of 138 years under the French,
            who on 31 October 1954 left Indian shores following a de facto transfer of power.
            
            Nearby places such as Arikamedu, Ariyankuppam, Kakayanthoppe, Villianur, and Bahour,
            which were colonised by the French East India Company over a period of time and later became the union territory of Pondicherry,
            have recorded histories that predate the colonial period."
            />

        </div>
        </>
    )
}


export default Destination
