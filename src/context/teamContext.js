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


let obj = {} 
const addTeam = (e, hero) =>{
    e.preventDefault()
    if(team.indexOf(hero) === -1){
        setTeam([...team, hero])
        for(const [key, value] of Object.entries(hero.powerstats)){
            if(value !== 'null')  {
                obj = {...obj, [key]: teamStats[key] + parseInt(value), [key+"Per"]: Math.round((teamStats[key] + parseInt(value)) / (team.length + 1))}
                setTeamStats(obj)
            }else{
                obj = {...obj, [key]: teamStats[key], [key+"Per"]:teamStats[key+"Per"]}
                setTeamStats(obj)
            }
        }
    }else{
        alert('ya esta en el equipo')
    }
}

const removeTeam = (e, hero) => {
    e.preventDefault()
    setTeam(team.filter(item => item.id !== hero.id))
    if(team.indexOf(hero) !== -1){
    for(const [key, value] of Object.entries(hero.powerstats)){
        if(value !== 'null')  {
            obj = {...obj, [key]: teamStats[key] - parseInt(value), [key+"Per"]: Math.round((teamStats[key] - parseInt(value)) / (team.length - 1))}
            setTeamStats(obj)
        }else{
            obj = {...obj, [key]: teamStats[key], [key+"Per"]:teamStats[key+"Per"]}
            setTeamStats(obj)
        }}}else{
            alert('No esta dentro del equipo')
        }
console.log(team.length)
}
return(
    <teamContext.Provider value={{team, teamStats,
                                addTeam, removeTeam}}>
        {children}
    </teamContext.Provider>
)
}