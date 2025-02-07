import './index.css';
import MonsterPokedex from './MonsterPokedex';
import PlayerStats from './PlayerStats';



const App = () =>
{
  return(
    <div className='snap-y'>
        <PlayerStats></PlayerStats>
        <MonsterPokedex></MonsterPokedex>
    </div>
  )
}

export default App