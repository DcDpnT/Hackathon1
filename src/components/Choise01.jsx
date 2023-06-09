import "./Choise01.css"

const Choise01 = ({sexe, setSexe,setIndex}) => {
    return (
			<>
			<div className='buttonLove'>
       <div>votre choix sexe : {sexe}</div>
				<div id="HF">
					<button className='HommeFemme' onClick={() => setSexe("male")}>HOMME</button>
					<button className='HommeFemme' onClick={() => setSexe("female")}> FEMME</button>
				</div>
				<button className="btn" type="button" onClick={()=> setIndex(1)}>
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

export default Choise01