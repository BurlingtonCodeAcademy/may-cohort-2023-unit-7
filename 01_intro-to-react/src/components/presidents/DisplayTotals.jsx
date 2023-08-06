//  Can use either rfc or rfce functional component structure.

function DisplayTotals(props) {
    return(
        <>
            <p>{props.name} had a total vote count of {props.count}</p>
        </>
    )
}

export default DisplayTotals;