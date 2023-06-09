// import { Link } from "react-router-dom";

// const Choise03 = ({species, setSpecies,setIndex}) => {
//     return (
// 			<>
// 			<div className='buttonLove'>
//        <div>votre choix sexe : {species}</div>
// 				<div id="HF">
// 					<button className='HommeFemme' onClick={() => setSpecies("human")}>HUMAN</button>
// 					<button className='HommeFemme' onClick={() => setSpecies({species} !=="human")}>OTHERS</button>
// 				</div>
// 				<button className="btn" type="button" onClick={()=> setIndex(3) && <Link to={"/choice/${sexe}/${homeworld}/${species}"}></Link>}>
// 					<strong>FIND LOVE</strong>
// 					<div id="container-stars">
// 						<div id="stars"></div>
// 					</div>
// 					<div id="glow">
// 						<div className="circle"></div>
// 						<div className="circle"></div>
// 					</div>
// 				</button>
// 				</div>
// 			</>
// 			) 
// }

// export default Choise03;

import { useState } from 'react';
import { Link } from 'react-router-dom';

const Choise03 = ({ species, setSpecies, setIndex, sexe, setSex, homeworld, setHomeworld}) => {
//   const [sexe, setSexe] = useState(''); // Ajoutez une variable d'état pour "sexe" si nécessaire
//   const homeworld = 'Tatooine'; // Assumons une valeur constante pour "homeworld"

  const handleClick = () => {
    setIndex(3);
  };

  return (
    <>
      <div className="buttonLove">
        <div>votre choix sexe : {species}</div>
        <div id="HF">
          <button className="HommeFemme" onClick={() => setSpecies('human')}>
            HUMAN
          </button>
          <button className="HommeFemme" onClick={() => setSpecies('others')}>
            OTHERS
          </button>
        </div>
        <Link to={`/choice/${sexe}/${homeworld}/${species}`}>
          <button className="btn" type="button" onClick={handleClick}>
            <strong>FIND LOVE</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>
            <div id="glow">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </button>
        </Link>
      </div>
    </>
  );
};

export default Choise03;