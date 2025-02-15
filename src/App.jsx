import './index.css';
import MonsterPokedex from './MonsterPokedex';
import PlayerStats from './PlayerStats';
import Background from './src/component/background';



const App = () =>
{
  return(
    <div className='snap-y snap-mandatory overflow-y-scroll scroll-smooth h-screen scroll'>
        
        <PlayerStats ></PlayerStats>
        <MonsterPokedex ></MonsterPokedex>
        <Background/>
    </div>
  )
}

export default App