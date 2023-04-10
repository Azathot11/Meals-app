import { createContext,useState } from "react";

export const Context = createContext({
    ids:[],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
})

const ContextProvider = ({ children }) => {
    const [ids, setIds] = useState([])

    const addFavorite = (id) =>{
        setIds(ids=> [...ids,id])
    }

    const removeFavorite = (selectedId) =>{
        setIds(ids=> ids.filter((id)=> id !== selectedId))
    }

    // give me a function that add two numbers 

    return <Context.Provider value={{
        ids,
        addFavorite,
        removeFavorite
    }}>{children}</Context.Provider>
}

export default ContextProvider