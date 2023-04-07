import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { usePokeStates } from '../Context/Context'

const PokeDetail = () => {
    const {name} = useParams()
    const {apiState, apiDispatch, favDispatch} = usePokeStates()
    const url = 'https://pokeapi.co/api/v2/pokemon/' + name

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => apiDispatch({type: 'GET_POKE', payload: data}))
    }, [])


    const addFav = () => {
        favDispatch({type: 'ADD_FAV', payload: apiState.pokeDetail})
    }
    
  return (
    <div>
        <h2>{apiState.pokeDetail.name}</h2>
        <img src={apiState.pokeDetail.sprites?.front_default} alt="" />
        <br />
        <button onClick={addFav}>⭐</button>
    </div>
  )
}

export default PokeDetail