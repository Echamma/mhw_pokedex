import { useEffect, useState } from "react"
import abilities from "./palico.json"

const PalicoAbilities = ({Level}) =>
{
    const [levelAbilities, setAbilities] = useState([])

    const abilityGetter = () =>
    {
        const fullList = abilities['abilities']
        setAbilities(fullList.filter(ability => ability.level <=Level))
    }
    useEffect(()=>{
        
        abilityGetter()

    },[])

    return(
        <div>
            <h3>Palico Abilities</h3>
            <ul>
                {
                    levelAbilities.map((ability, key)=>(
                        <li key = {key}>{ability.name}
                        <br />
                        {ability.description}
                        </li>
                        
                    ))
                }
            </ul>
        </div>
    )

}
export default PalicoAbilities