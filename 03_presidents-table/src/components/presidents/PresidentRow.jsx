import React from 'react'

function PresidentRow({first, last, year, passed}) {
    return (
        <>
            <tr>
                <td>{first}</td>
                <td>{last}</td>
                <td>{year}</td>
                <td>{
                    passed === undefined ? "Yes" : "No"
                    }</td>
            </tr>
        </>
    )
}

export default PresidentRow