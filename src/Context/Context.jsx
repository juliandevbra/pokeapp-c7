import { createContext, useContext, useState, useEffect } from "react";

const PokeStates = createContext()

const Context = ({children}) => {
    const [pokeList, setPokeList] = useState([])
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setPokeList(data.results))
    }, [])

    return(
        <PokeStates.Provider value={{pokeList, setPokeList}}>
            {children}
        </PokeStates.Provider>
    )
}

export default Context

export const usePokeStates = () => useContext(PokeStates)