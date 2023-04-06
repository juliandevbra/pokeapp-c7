import React, { useState } from 'react'
import { usePokeStates } from '../Context/Context'

const Favs = () => {

  const {favState} = usePokeStates()
    
  return (
    <div>
       {favState.map(poke => (
           <div key={poke.id}>
           <h2>{poke.name}</h2>
           <img src={poke.sprites?.front_default} alt="" />
            </div>
       ))} 
    </div>
  )
}

export default Favs