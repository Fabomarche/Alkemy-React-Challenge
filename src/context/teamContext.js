import { useState, createContext, useContext, useEffect} from 'react'

const teamContext = createContext([])
export const UseTeamContext = () => useContext(teamContext)

const TeamContextProvider = ({children}) => {
const [team, setTeam] = useState([])
const [teamStats, setTeamStats] = useState({
                                            combat:0,
                                            durability:0,
                                            intelligence:0,
                                            power:0,
                                            speed:0,
                                            strength:0})
const [alignmentCount, setAlignmentCount] = useState({good:0, bad:0})


let obj = {} 
const  addTeamv1 = (e, hero) =>{
    e.preventDefault()
    if(team.indexOf(hero) === -1){
        console.log(team)
        setTeam(team => [...team, hero])
        console.log(team)
        for(const [key, value] of Object.entries(hero.powerstats)){
            if(value !== 'null')  {
                obj = {...obj, [key]: teamStats[key] + parseInt(value), [key+"Per"]: Math.round((teamStats[key] + parseInt(value)) / (team.length + 1))}
                setTeamStats(obj)
            }else{
                obj = {...obj, [key]: teamStats[key], [key+"Per"]:teamStats[key+"Per"]}
                setTeamStats(obj)
            }
        }
        if(hero.biography.alignment === "good"){
            if(alignmentCount.good = 3){
                setAlignmentCount({good: alignmentCount.good + 1, bad: alignmentCount.bad})
            }else{
                alert('Ya hay 3 buenos')
            }
        }else if(hero.biography.alignment === "bad"){
            if(alignmentCount.bad = 3){
                setAlignmentCount({good: alignmentCount.good, bad: alignmentCount.bad + 1})
            }else{
                alert('Ya hay 3 malos')
            }
        }
    }else{
        alert('ya esta en el equipo')
    }
}

const addTeam= (e, hero) => {
    e.preventDefault()
    if(team.length === 6){
        alert("solo se pueden agregar 6 heroes al equipo")
    }else if(alignmentCount.good === 3 && hero.biography.alignment === "good"){
        alert("solo se pueden agregar 3 heroes buenos al equipo")
    }else if(alignmentCount.bad === 3 && hero.biography.alignment === "bad"){
        alert("solo se pueden agregar 3 heroes malos al equipo")
    }else if(team.indexOf(hero) !== -1){
        alert('Este heroe ya esta en el equipo')
    }else{
        console.log(team)
        setTeam(team => [...team, hero])
        console.log(team)
        for(const [key, value] of Object.entries(hero.powerstats)){
            if(value !== 'null')  {
                obj = {...obj, [key]: teamStats[key] + parseInt(value), [key+"Per"]: Math.round((teamStats[key] + parseInt(value)) / (team.length + 1))}
                setTeamStats(obj)
            }else{
                obj = {...obj, [key]: teamStats[key], [key+"Per"]:teamStats[key+"Per"]}
                setTeamStats(obj)
            }
        }
        if(hero.biography.alignment === "good"){
            setAlignmentCount({good: alignmentCount.good + 1, bad: alignmentCount.bad})
        }else if(hero.biography.alignment === "bad"){
            setAlignmentCount({good: alignmentCount.good, bad: alignmentCount.bad + 1})
        }
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
            }}}
            if(hero.biography.alignment === "good"){
                setAlignmentCount({good: alignmentCount.good - 1, bad: alignmentCount.bad})
            }else if(hero.biography.alignment === "bad"){
                setAlignmentCount({good: alignmentCount.good, bad: alignmentCount.bad - 1})
            }
        }
console.log(team)
console.log(alignmentCount)

return(
    <teamContext.Provider value={{team, teamStats,
                                addTeam, removeTeam}}>
        {children}
    </teamContext.Provider>
)
}

export default TeamContextProvider