import { createContext, useContext, useState, useEffect, useReducer } from "react";

const PokeStates = createContext()

const themes = {
    dark: {
        theme: false,
        bgColor: 'black',
        color: 'white'
    },
    light: {
        theme: true,
        bgColor: 'white',
        color: 'black'
    }
}

const initialThemeState = themes.light
const initialFavState = JSON.parse(localStorage.getItem('favs')) || []

const themeReducer = (state, action) => {
    switch(action.type){
        case 'SWITCH_DARK':
            return themes.dark
        case 'SWITCH_LIGHT':
            return themes.light
        default:
            throw new Error
    }
}
const favReducer = (state, action) => {
    switch(action.type){
        case 'ADD_FAV': 
            return [...state, action.payload]
        default: 
            throw new Error
    }
}

const Context = ({children}) => {

    const [themeState, themeDispatch] = useReducer(themeReducer, initialThemeState)
    const [favState, favDispatch] = useReducer(favReducer, initialFavState)
    console.log(favState)
    const [pokeList, setPokeList] = useState([])
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(favState))
    }, [favState])

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setPokeList(data.results))
    }, [])

    return(
        <PokeStates.Provider value={{pokeList, setPokeList, themeState, themeDispatch, favState, favDispatch}}>
            {children}
        </PokeStates.Provider>
    )
}

export default Context

export const usePokeStates = () => useContext(PokeStates)