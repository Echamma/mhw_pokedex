import WeaponAbilities from "./src/component/player/WeaponAbilities"
import PalicoAbilities from "./src/component/player/PalicoAbilities"

const PlayerStats = () =>
{
    return(
        <div className="snap-center">
            <div className='bg-cover bg-no-repeat h-screen nergi'>
            {/* <WeaponAbilities Weapon="GreatSword" Level={4}></WeaponAbilities>
            
            */}
            <PalicoAbilities Level={10}/>
            </div>
        </div>
    )
}

export default PlayerStats