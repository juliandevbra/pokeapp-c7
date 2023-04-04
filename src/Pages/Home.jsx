import React from 'react'
import { Link } from 'react-router-dom'
import { usePokeStates } from '../Context/Context'

const Home = () => {

    const {pokeList} = usePokeStates()

  return (
    <div>
        {pokeList.map(poke => <Link key={poke.name} to={'/poke/' + poke.name}><h4>{poke.name}</h4></Link>)}
    </div>
  )
}

export default Home