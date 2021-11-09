import { useState, createContext, useContext} from 'react'

const searchContext = createContext([])
export const UseSearchContext = () => useContext(searchContext)

export default function SearchContextProvider ({children}) {
    const [userSearch, setUserSearch] = useState("")
    const [heroSearched, setHeroSearched] = useState([])

    return(
        <searchContext.Provider value={{heroSearched, userSearch,
                                        setUserSearch, setHeroSearched}}>
        {children}
        </searchContext.Provider>
    )

}