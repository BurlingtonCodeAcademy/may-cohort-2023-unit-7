import React, {useState} from 'react'
import PresidentTable from './PresidentTable'
import { presidentsArray } from './presidents.constant';

function Presidents() {

    const [ reverse, setReverse ] = useState(true);

    const livingPresidents = presidentsArray.filter(president => {
        return president.passed === undefined;
    });
    
    const deceasedPresidents = presidentsArray.filter(president => {
        return president.passed !== undefined;
    });
    // console.log(livingPresidents)

    // console.log(deceasedPresidents)

    return (
        <>
            <h2>Hello from Presidents</h2>
            <PresidentTable
                reverse={reverse}
                setReverse={setReverse}  
                title={"Living Presidents"} 
                presidents={reverse ? livingPresidents.reverse() : livingPresidents} />
            <PresidentTable
                reverse={reverse}
                setReverse={setReverse} 
                title={"Dead Presidents"} 
                presidents={reverse ? deceasedPresidents.reverse() : deceasedPresidents} />
        </>
    )
}

export default Presidents