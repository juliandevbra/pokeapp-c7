import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'
import { usePokeStates } from '../Context/Context'

const PokeDetail = () => {
    const {name} = useParams()
    const {apiState, apiDispatch, favDispatch} = usePokeStates()
    const url = 'https://pokeapi.co/api/v2/pokemon/' + name

    useEffect(() => {
        // fetch(url)
        // .then(res => res.json())
        // .then(data => apiDispatch({type: 'GET_POKE', payload: data}))

        const fetchData = async () => {
          try {
          let res = await fetch(url)
          let data = await res.json()
          apiDispatch({type: 'GET_POKE', payload: data})
          }
          catch(err) {
            Swal.fire({
              icon: 'error',
              title: 'Ay!',
              text: err + '. No se pudo obtener el pokemon',
              timer: 2000
            })
          }
        }
        fetchData()
    }, [])


    const addFav = () => {
        favDispatch({type: 'ADD_FAV', payload: apiState.pokeDetail})
        toast('⭐Se ha agregado a favoritos!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          })
    }
    
  return (
    <div>
      {/* <Toast></Toast> Ejemplo para el Error Boundary */}
        <h2>{apiState.pokeDetail.name}</h2>
        <img src={apiState.pokeDetail.sprites?.front_default} alt="" />
        <br />
        <button onClick={addFav}>⭐</button>
    </div>
  )
}

export default PokeDetail