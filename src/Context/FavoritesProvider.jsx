import React, { createContext, useContext, useState } from 'react'

const FavContext = createContext()
export const useFav=()=>useContext(FavContext)

function FavoritesProvider({ children }) {
    const [favs, setFavs] = useState([])
    const addFavs = (product) => {
        setFavs((prevItems)=>[...prevItems,product])
    }
    const removeFav = (id) => {
        setFavs((prevFavs)=>prevFavs.filter(fav=>fav.id !== id))
    }
    return <FavContext.Provider value={{favs,addFavs,removeFav}}>
        {children }
  </FavContext.Provider>
}

export default FavoritesProvider
