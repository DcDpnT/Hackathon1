const Choise03 = ({species, setSpecies,setIndex}) => {
    return (
			<>
			<div className='buttonLove'>
       <div>votre choix sexe : {species}</div>
				<div id="HF">
					<button className='HommeFemme' onClick={() => setSpecies("human")}>HUMAN</button>
					<button className='HommeFemme' onClick={() => setSpecies({species} !=="human")}>OTHERS</button>
				</div>
				<button className="btn" type="button" onClick={()=> setIndex(3)}>
					<strong>FIND LOVE</strong>
					<div id="container-stars">
						<div id="stars"></div>
					</div>
					<div id="glow">
						<div className="circle"></div>
						<div className="circle"></div>
					</div>
				</button>
				</div>
			</>
			) 
}

export default Choise03;