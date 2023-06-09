import { useState } from 'react';
import Choise01 from "../components/Choise01"
import Choise02 from '../components/Choise02';
import Choise03 from '../components/Choise03';
import './Home.css'
// TODO 
const Home = () => {
		const [sexe, setSexe] = useState("")
        const [homeworld,setHomeworld] =useState("")
        const [species, setSpecies] =useState ("")
		const [index, setIndex] = useState(0)
		
    return (
			<div className='body'>   
        <div id= "container">
            <div id = 'petitpersos'>
                <img id= 'petitperso1' src ="https://media.discordapp.net/attachments/1101546225041428485/1116385075131584522/StarWarsLove2.jpg?width=588&height=884" alt= "petit perso"  />
                <img id= 'petitperso2' src ="https://media.discordapp.net/attachments/1101546225041428485/1116385075416805448/StarWarsLove3.jpg?width=854&height=884" alt= "petit perso"  />
                <img id= 'petitperso3' src ="https://media.discordapp.net/attachments/1101546225041428485/1116385075672645763/StarWarsLove4.jpg?width=1456&height=820" alt= "petit perso"  />
                <img id= 'petitperso4' src ="https://media.discordapp.net/attachments/1101546225041428485/1116385076071108718/StarWarsLove5.jpg?width=638&height=884" alt= "petit perso"  />
            </div>

            	{/* <h1>Des Hommes des Femmes et d'autres créatures dans ta région galactique, n'attendent que toi sur ce site</h1> */}

							{ index === 0 ? <Choise01 sexe={sexe} setSexe={setSexe} setIndex={setIndex} /> : index === 1 ? <Choise02 homeworld={homeworld} setHomeworld={setHomeworld} setIndex={setIndex}/> :  index === 2 ? <Choise03 species={species} setSpecies={setSpecies} setIndex={setIndex} />: "" }
            <div id = "divbaiser">
            <img id = "baiser" src="https://media.discordapp.net/attachments/1101546225041428485/1116385074615681185/StarWarsLove1.png?width=884&height=884" alt="galaxie" />
            </div>
        </div>

        <p>page Home</p>
</div>
    );
}

export default Home;
/*remplacer choise02 par le composant choise02
dans le compo choise02 il va faloir faire un copy col du choise01 et remplacer par les bonnes data setspaces a la place de setsex
ca va set l index à 2 il va tester et aller sur l autre composant. 
choise3 envoit sex espece, on va envoyer l humain qd on clique ds 3 le link va correspondre au link du app.jsx . 
choise 3 copier coller mais plus de parametre.*/