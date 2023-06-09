const Choise02 = ({spaces, setSpaces,setIndex}) => {
    return (
			<>
			<div className='buttonLove'>
       <div>votre choix sexe : {homeworld}</div>
				<div id="HF">
					<button className='HommeFemme' onClick={() => setSpaces("tatooine")}>TATOOINE</button>
					<button className='HommeFemme' onClick={() => setSpaces({homworld}!=="tatooine")}> OTHERS</button>
				</div>
				<button className="btn" type="button" onClick={()=> setIndex(2)}>
					<strong>FIND LOVE</strong>
					<div id="container-stars">
						<div id="stars"></div>
					</div>
					<div id="glow">
						<div class="circle"></div>
						<div class="circle"></div>
					</div>
				</button>
				</div>
			</>
			) 
}

export default Choise02;