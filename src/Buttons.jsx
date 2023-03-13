import React from 'react'

export const Buttons = ({addWater, removeWater}) => {
  return (
    <div>
        <button onClick={addWater}>Add</button>
        <button onClick={removeWater}>Remove</button>
    </div>
  )
}
