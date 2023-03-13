import React from 'react'
import { Water } from './Water'
import { useState, useEffect } from 'react'

export const Pool = ({count}) => {

    const [arr, setArr] = useState([])

    useEffect(()=>{
        let a = [];
        for(let i = 0; i < count; i++){
            a.push(a)
        }
        setArr(a);
    }, [count])

  return (
    <div className='Pool'>
       {
            arr.map(el=> <Water/>)
       }
    </div>
  )
}
