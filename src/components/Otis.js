import React , {useState} from 'react'


function Otis() {
    const [color, setColor]= useState('#58C8FA')
  return (
    <>
      <button onClick={()=>setColor('red')}>red</button>
      <span>this my favourate color is   {color}!</span>
      <button onClick={()=>setColor('blue')}>blue</button>
    </>
  )
}

export default Otis
