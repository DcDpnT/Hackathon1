
import { useParams } from "react-router-dom"

import Card from "../components/Card";


const Choice = () => {
    const {sexe,species,planet} = useParams()
    return (
        <>

            <p>{sexe}</p>
            <p>{species}</p>
            <p>{planet}</p>
            <p> ICI Choice </p>

        {TabCaracters.map((TabCaracters) => {
            return < Card clef={TabCaracters} key={TabCaracters.id}/>
            })}
        {/* < Card /> */}
        <p> ICI Choice </p>

        </>
    );
}

export default Choice