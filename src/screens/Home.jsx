import './Home.css'

const Home = () => {
    return (
<body>
        <div id= "container">
            <div id = 'petitpersos'>
                <img id= 'petitperso1' src ="https://media.discordapp.net/attachments/1101546225041428485/1116385075131584522/StarWarsLove2.jpg?width=588&height=884" alt= "petit perso"/>
                <img id= 'petitperso2' src ="https://media.discordapp.net/attachments/1101546225041428485/1116385075416805448/StarWarsLove3.jpg?width=854&height=884" alt= "petit perso"/>
                <img id= 'petitperso3' src ="https://media.discordapp.net/attachments/1101546225041428485/1116385075672645763/StarWarsLove4.jpg?width=1456&height=820" alt= "petit perso"/>
                <img id= 'petitperso4' src ="https://media.discordapp.net/attachments/1101546225041428485/1116385076071108718/StarWarsLove5.jpg?width=638&height=884" alt= "petit perso"/>
            </div>
            
            <img id = "baiser" src="https://media.discordapp.net/attachments/1101546225041428485/1116385074615681185/StarWarsLove1.png?width=884&height=884" alt="galaxie" />
        </div>

        <div className='buttonLove'>
        <button id= "button">find love</button>
        </div>   
        
        <p>page Home</p>
</body>
    );
}

export default Home;