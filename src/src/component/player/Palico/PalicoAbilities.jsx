import { useEffect, useState } from "react"
import abilities from "./palico.json"
import Ability from "../ability"

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

    },[Level])

    return(
        <div className='container abilityContainer mt-5 mr-10'>
            <h2 className="justify-center flex">Palico Abilities</h2>
            <ul>
                {
                    levelAbilities.map((ability, key)=>(
                        <Ability name={ability.name} type={"Bonus"} desc={ability.description} ></Ability>
                        
                    ))
                }
            </ul>
        </div>
    )

}
export default PalicoAbilities