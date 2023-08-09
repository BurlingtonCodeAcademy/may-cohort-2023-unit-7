import { React , useState } from 'react'

export default function Counter() {

    const iCount = () => {
      // console.log("runs every time");
      console.log("runs once");
      return 0; // providing our initial value to useState()
    }

    // const [ count, setCount ] = useState(0);
    const [ count, setCount ] = useState(iCount);

    const countUp = () => {
        // setCount(count + 1);
        // setCount(count + 1);
        // console.log(count)
        setCount(prevCount => prevCount + 1);
        // setCount(prevCount => prevCount + 1);
    }

    const countDown = () => {
        setCount(count - 1);
    }

  return (
    <div className='counter'>
            <button onClick={countDown}>-</button>
            <span>{count}</span>
            <button onClick={countUp}>+</button>
        </div>
  )
}
