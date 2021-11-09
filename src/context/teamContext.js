import { useState, createContext, useContext} from 'react'

const teamContext = createContext([])
export const UseTeamContext = () => useContext(teamContext)

export default function TeamContextProvider ({children}) {
const [team, setTeam] = useState([])
const [teamStats, setTeamStats] = useState({
                                            combat:0,
                                            durability:0,
                                            intelligence:0,
                                            power:0,
                                            speed:0,
                                            strength:0})

const addTeam = (e, hero) =>{
    if(team.indexOf(hero) === -1){
        setTeam([...team, hero])
        let obj = {} 
        for(const [key, value] of Object.entries(hero.powerstats)){
            if(value !== 'null'){
                obj = {...obj, [key]: (teamStats[key] + parseInt(value)) / (team.length + 1)}//hay que tener la sumatoria y despues dividir
                setTeamStats(obj)
            }else{
                obj = {...obj, [key]: teamStats[key]}
                setTeamStats(obj)
            }
            console.log(key)
            console.log(value)
            
        }
    }else{
        alert('ya esta en el equipo')
    }
}

const removeTeam = (e, hero) => {
    setTeam(team.filter(item => item.id !== hero.id))
}



console.log(team)
console.log(teamStats)
return(
    <teamContext.Provider value={{team, teamStats,
                                addTeam, removeTeam}}>
        {children}
    </teamContext.Provider>
)
}