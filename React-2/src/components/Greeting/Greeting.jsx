import React, { useEffect, useState } from 'react'

const Greeting =(props) =>{
    const [myName, changName] = useState(props.myName)
    
    useEffect(() => {
        setTimeout(() => {
          changName("Alfonsina");
        }, 3000);
      }, []);
    
  return (
    <div>
        <p>Hola {myName}</p>
    </div>
  )
}

export default Greeting