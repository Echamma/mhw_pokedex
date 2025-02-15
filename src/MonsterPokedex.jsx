import AllMonsters from "./src/component/monsters/monster"


const MonsterPokedex = () =>
{
    return(
        <div className="snap-center">
            <div className='diablo bg-no-repeat h-screen bg-cover flex justify-center'>
                <div className="container mt-10 monsterContainer">
                    <div className="flex justify-center">Monsters</div>
                    <AllMonsters></AllMonsters>
                </div>

            </div>
        </div>
    )
}

export default MonsterPokedex