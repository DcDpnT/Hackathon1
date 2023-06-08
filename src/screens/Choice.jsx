import Card from "../components/Card";

const Choice = () => {
    return (
        <>
        {TabCaracters.map((TabCaracters) => {
            return < Card clef={TabCaracters} key={TabCaracters.id}/>
            })}
        {/* < Card /> */}
        <p> ICI Choice </p>

        </>
    );
}

export default Choice