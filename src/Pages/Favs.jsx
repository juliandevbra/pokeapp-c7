import React, { useState } from 'react'

const Favs = () => {

    let favs = localStorage.getItem('favs')
    let parsedFavs = JSON.parse(favs)
    
  return (
    <div>
       {parsedFavs.map(poke => (
           <div>
           <h2>{poke.name}</h2>
           <img src={poke.sprites?.front_default} alt="" />
            </div>
       ))} 
    </div>
  )
}

export default Favs