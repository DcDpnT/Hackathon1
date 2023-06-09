import { useParams } from "react-router-dom"

const Choice = () => {
    const {sexe,homeworld,species} = useParams()
    return (
        <>
            <p>{sexe}</p>
            <p>{species}</p>
            <p>{homeworld}</p>
            <p> ICI Choice </p>
        </>
    );
}

export default Choice;