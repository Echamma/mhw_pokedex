import WeaponAbilities from "./src/component/player/Weapon/WeaponAbilities"
import PalicoAbilities from "./src/component/player/Palico/PalicoAbilities"
import { useEffect, useState } from "react"
import PlayerComponent from "./src/firebase/Players"
import WeaponChooser from "./src/component/player/Weapon/WeaponChooser"
import PlayerChooser from "./src/component/player/PlayerChooser"

const PlayerStats = () =>
{
    const [level , setLevel] = useState(0)
    const [weapon , setWeapon] = useState("")
    const [player, setPlayer] = useState("")

    return(
        <div className="snap-center">
            <div className='bg-cover bg-no-repeat h-screen nergi flex justify-between'>
                <div className=" ml-10">
                    <PlayerChooser setPlayer={setPlayer}></PlayerChooser>
                    <WeaponChooser setWeapon = {setWeapon}></WeaponChooser>
                    <PlayerComponent name = {player} setLevl={setLevel}></PlayerComponent>
                    
                </div>
                <WeaponAbilities Weapon={weapon} Level={level}></WeaponAbilities>
                <PalicoAbilities Level={level}/>
                
            </div>
        </div>
    )
}

export default PlayerStats