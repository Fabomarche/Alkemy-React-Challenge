import { useState, createContext, useContext} from 'react'

const loginContext = createContext([])
export const UseLoginContext = () => useContext(loginContext)

export default function LoginContextProvider ({children}) {
    

}