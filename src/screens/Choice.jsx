<<<<<<< HEAD
import Card from "../components/Card";
import CardFilter from "../components/Cardfilter";
import "./Choice.css"

const Choice = () => {
    return (
        <>
          <CardFilter />
=======
import { useParams } from "react-router-dom"

const Choice = () => {
    const {sexe,species,planet} = useParams()
    return (
        <>
            <p>{sexe}</p>
            <p>{species}</p>
            <p>{planet}</p>
            <p> ICI Choice </p>
>>>>>>> 0002Home
        </>
    );
}

export default Choice;