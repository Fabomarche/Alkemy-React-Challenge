import { useState, createContext, useContext, useEffect} from 'react'

import axios from 'axios'

const searchContext = createContext([])
export const UseSearchContext = () => useContext(searchContext)

export default function SeachContextProvider ({children}) {
    const [userSearch, setUserSearch] = useState("")
    const [heroSearched, setHeroSearched] = useState([])

    const getApi = ()=> {
        axios.get(`https://superheroapi.com/api/4859376540747559/search/${userSearch}`)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }
        



 /*    const serchAxios = () => {
        axios({
            url:`https://superheroapi.com/api/4859376540747559/search/${userSearch}`
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    } */
    

    console.log(userSearch)
    return(
        <searchContext.Provider value={{heroSearched, userSearch,
                                        setUserSearch, getApi}}>
        {children}
        </searchContext.Provider>
    )

}