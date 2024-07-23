import React from 'react'
import { useState } from 'react'

const Count = () => {

    const [count, setCount] = useState(0);

    const countDecrement = () => {
        setCount(count - 1)
    }

    const countReset = () => {
        setCount(0)
    }
    
    const countIncrement = () => {
        setCount(count + 1)
    }

  return (
    <>
        <h3 className='count-title'>Counter</h3>
        <p className='counter'>{count}</p>
        <div className='count-buttons'>
            <button className='decrement-button' onClick={() => countDecrement({count})}>Decrease</button>
            &nbsp;
            <button className='count-button' onClick={() => countReset({count})}>Reset</button>
            &nbsp;
            <button className='increment-button' onClick={() => countIncrement({count})}>Increase</button>
        </div>
        
    </>
    
  )
}

export default Count
