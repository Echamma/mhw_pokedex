import './index.css';
import MonsterPokedex from './MonsterPokedex';
import PlayerStats from './PlayerStats';



const App = () =>
{
  return(
    <div className='snap-y snap-mandatory overflow-y-scroll scroll-smooth h-screen'>
        <PlayerStats ></PlayerStats>
        <MonsterPokedex ></MonsterPokedex>
    </div>
  )
}

export default App