function AboutMe() {

    const city = 'Indianapolis';
    const state = 'Indiana'

    const placeOne = "TX";
    const placeTwo = "Kitchen";
    const placeThree = "Street";

    let styles = {
        ul: {
            textAlign: 'left',
            color: 'green'
        },
        p: {
            fontSize: "20pt"
        }
    }

    return (
        <div>
            <p style={styles.p}>I grew up in {city}, {state}. The last three places are:
            </p>
            <ul style={styles.ul} >
                <li>{placeOne}</li>
                <li>{placeTwo}</li>
                <li>{placeThree}</li>
            </ul>
        </div>

    )
}

export default AboutMe;