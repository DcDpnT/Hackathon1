
import { useParams } from "react-router-dom"

const Choice = () => {
    const {sexe,species,planet} = useParams()
    return (
        <>
            <p>{sexe}</p>
            <p>{species}</p>
            <p>{planet}</p>
            <p> ICI Choice </p>
        </>
    );
}

export default Choice;