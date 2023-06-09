import "./Choise02.css"

const Choise02 = (spaces,setSpaces, setIndex) => {
 return (
    <>
			<div className='buttonLove'>
       <div>votre choix planètes : {homeworld}</div>
				<div id="HF">
					<button className='button' onClick={() => setSpaces("tatooine")}>TATOOINE</button>
					<button className='button' onClick={() => setSpaces({homeworld} !== "tatooine")}> OTHERS</button>
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