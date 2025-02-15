

const PlayerChooser = ({ setPlayer }) => {
    const players = [
        {'player': 'Player', 'race':'Race'},
        {'player': 'Sleepy', 'race':'Tiefling'},
        {'player': 'Thanamir', 'race':'Fairy'},
        {'player': 'BulueDwarf', 'race':'Dwarf'},
        {'player': 'Mr.Tyson', 'race':'Orc'},
        {'player': 'HTK', 'race':'Fairy'},
        {'player': 'Vaer','race':'Kalashtar'},
        {'player': 'Zorglug','race':'Orc'}
    ];

    return (
        <select onChange={(e) => setPlayer(e.target.value)} className="container mt-5 abilityContainer">
            {players.map((playerData, index) => (
                <option key={index} value={playerData.player}>
                    {playerData.player} - {playerData.race}
                </option>
            ))}
        </select>
    );
}

export default PlayerChooser
