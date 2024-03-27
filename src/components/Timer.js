import React , {useState ,useEffect} from 'react'

function Timer() {
const [count ,setCount]= useState(0)

  return (
    <>
     <h1>l have counted {count} times</h1> 
    </>
  )
}

export default Timer
