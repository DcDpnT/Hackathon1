import "./Choise03.css"

const Choise03 = (espece,setEspece, setIndex) => {
 return (
    <>
			<div className='buttonLove'>
       <div>votre choix planètes : {species}</div>
				<div id="HF">
					<button className='button' onClick={() => setSpaces("human")}>HUMAN</button>
					<button className='button' onClick={() => setSpaces({species} !== "human")}> OTHERS</button>
				</div>
				<button className="btn" type="button" onClick={()=> setIndex(3)}>
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

export default Choise03;